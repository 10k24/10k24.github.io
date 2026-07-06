const { describe, expect, test } = require("bun:test");
const { readFileSync, readdirSync } = require("node:fs");
const { resolve, join, extname } = require("node:path");

const ROOT = resolve(__dirname, "../..");
const SRC = join(ROOT, "src");
const ELEVENTY_CONFIG = join(ROOT, ".eleventy.js");

function getDefinedCollections() {
    const content = readFileSync(ELEVENTY_CONFIG, "utf8");
    const names = new Set();
    const re = /addCollection\(\s*["']([^"']+)["']\s*,/g;
    let match;
    while ((match = re.exec(content)) !== null) {
        names.add(match[1]);
    }
    return names;
}

function walkFiles(dir, extensions) {
    const files = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = join(dir, entry.name);
        if (entry.name.startsWith(".")) continue;
        if (entry.isDirectory()) {
            files.push(...walkFiles(full, extensions));
        } else if (entry.isFile() && extensions.includes(extname(entry.name))) {
            files.push(full);
        }
    }
    return files;
}

function extractTagsFromFrontmatter(content) {
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) return [];
    const frontmatter = fmMatch[1];
    const tags = [];
    const lines = frontmatter.split("\n");
    let inTagList = false;
    for (const line of lines) {
        const singleMatch = line.match(/^tags:\s*(\S.+)$/);
        if (singleMatch) {
            tags.push(singleMatch[1].trim());
            inTagList = false;
        } else if (/^tags:\s*$/.test(line)) {
            inTagList = true;
        } else if (inTagList) {
            const itemMatch = line.match(/^\s*-\s+(.+)$/);
            if (itemMatch) {
                tags.push(itemMatch[1].trim());
            } else if (!line.match(/^\s/)) {
                inTagList = false;
            }
        }
    }
    return tags;
}

function getAutoTagCollections() {
    const tags = new Set();
    const files = walkFiles(SRC, [".liquid", ".md"]);
    for (const file of files) {
        const content = readFileSync(file, "utf8");
        for (const tag of extractTagsFromFrontmatter(content)) {
            if (/^\w+$/.test(tag)) {
                tags.add(tag);
            }
        }
    }
    return tags;
}

function getReferencedCollections() {
    const refs = new Set();
    const files = walkFiles(SRC, [".liquid"]);
    for (const file of files) {
        const content = readFileSync(file, "utf8");
        const re = /collections\.(\w+)/g;
        let match;
        while ((match = re.exec(content)) !== null) {
            refs.add(match[1]);
        }
    }
    return refs;
}

describe("11ty collection references", () => {
    const defined = getDefinedCollections();
    const autoTags = getAutoTagCollections();
    const allValid = new Set([...defined, ...autoTags]);
    const referenced = getReferencedCollections();

    test("at least one collection is defined via addCollection", () => {
        expect(defined.size).toBeGreaterThan(0);
    });

    test("at least one collection is referenced in templates", () => {
        expect(referenced.size).toBeGreaterThan(0);
    });

    test("every referenced collection is defined or auto-generated from tags", () => {
        const missing = [...referenced].filter((n) => !allValid.has(n));
        expect(missing).toEqual([]);
    });
});
