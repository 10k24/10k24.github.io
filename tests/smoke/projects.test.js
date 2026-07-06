const { describe, expect, test } = require("bun:test");
const { readFileSync, existsSync } = require("node:fs");
const { resolve, join } = require("node:path");

const SRC = resolve(__dirname, "../..", "src");

const DESIGN_PROJECTS = [
    { slug: "planetary-society" },
    { slug: "salgirah-festival" },
    { slug: "midjourney" },
];

function parseFrontmatter(content) {
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) return {};
    const frontmatter = fmMatch[1];
    const data = {};
    const lines = frontmatter.split("\n");
    let currentKey = null;
    for (const line of lines) {
        const kvMatch = line.match(/^(\w[\w-]*):\s*(.*)$/);
        if (kvMatch) {
            currentKey = kvMatch[1];
            let value = kvMatch[2].trim();
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            if (value === "") {
                data[currentKey] = [];
            } else {
                data[currentKey] = value;
            }
        } else {
            const listMatch = line.match(/^\s+-\s+(.+)$/);
            if (listMatch && currentKey && Array.isArray(data[currentKey])) {
                data[currentKey].push(listMatch[1].trim());
            }
        }
    }
    return data;
}

describe("design project pages", () => {
    for (const { slug } of DESIGN_PROJECTS) {
        const filePath = join(SRC, "projects", slug, "index.liquid");
        const content = readFileSync(filePath, "utf8");
        const fm = parseFrontmatter(content);

        describe(slug, () => {
            test("has title", () => {
                expect(fm.title).toBeDefined();
                expect(fm.title.length).toBeGreaterThan(0);
            });

            test("has non-TODO description", () => {
                expect(fm.description).toBeDefined();
                expect(fm.description.length).toBeGreaterThan(0);
                expect(fm.description).not.toBe("TODO");
            });

            test("has cover", () => {
                expect(fm.cover).toBeDefined();
                expect(fm.cover.length).toBeGreaterThan(0);
            });

            test("cover file exists in source", () => {
                const coverPath = join(SRC, "projects", slug, fm.cover);
                expect(existsSync(coverPath)).toBe(true);
            });

            test("has media", () => {
                expect(fm.media).toBeDefined();
                expect(fm.media.length).toBeGreaterThan(0);
            });

            test("tags include 'projects'", () => {
                expect(Array.isArray(fm.tags)).toBe(true);
                expect(fm.tags).toContain("projects");
            });

            test("layout is 'project'", () => {
                expect(fm.layout).toBe("project");
            });
        });
    }
});
