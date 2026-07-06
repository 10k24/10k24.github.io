const { describe, expect, test } = require("bun:test");
const { readdirSync, readFileSync, existsSync } = require("node:fs");
const { resolve, join, relative, dirname } = require("node:path");

const DOCS = resolve(__dirname, "../..", "docs");

function collectHtmlFiles(dir) {
    const files = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...collectHtmlFiles(full));
        } else if (entry.name.endsWith(".html")) {
            files.push(full);
        }
    }
    return files;
}

function isExternal(value) {
    return /^(https?:|mailto:|tel:|javascript:|#)/.test(value) || value.startsWith("//");
}

function hrefsFromHtml(html) {
    const hrefs = [];
    const re = /<a\b[^>]*\bhref=["']([^"']+)["']/gi;
    let match;
    while ((match = re.exec(html)) !== null) {
        hrefs.push(match[1]);
    }
    return hrefs;
}

function assetsFromHtml(html) {
    const assets = [];
    const patterns = [
        /<img\b[^>]*\bsrc=["']([^"']+)["']/gi,
        /<link\b[^>]*\bhref=["']([^"']+)["']/gi,
        /<script\b[^>]*\bsrc=["']([^"']+)["']/gi,
        /<source\b[^>]*\bsrc=["']([^"']+)["']/gi,
        /<video\b[^>]*\bsrc=["']([^"']+)["']/gi,
        /<dotlottie-wc\b[^>]*\bsrc=["']([^"']+)["']/gi,
        /data-sketch-src=["']([^"']+)["']/gi,
    ];
    for (const re of patterns) {
        let match;
        while ((match = re.exec(html)) !== null) {
            assets.push(match[1]);
        }
    }
    return assets;
}

function idsFromHtml(html) {
    const ids = [];
    const re = /\sid=["']([^"']+)["']/gi;
    let match;
    while ((match = re.exec(html)) !== null) {
        ids.push(match[1]);
    }
    return ids;
}

function resolveRef(ref, sourceFile) {
    if (ref.startsWith("#")) {
        return { kind: "anchor", target: ref };
    }
    if (ref.startsWith("/")) {
        const rootRelative = join(DOCS, ref);
        if (existsSync(rootRelative)) {
            return { kind: "file", file: rootRelative };
        }
        if (!ref.endsWith("/") && !ref.includes(".")) {
            const withIndex = join(DOCS, ref, "index.html");
            if (existsSync(withIndex)) {
                return { kind: "file", file: withIndex };
            }
        }
        if (!ref.includes(".")) {
            const withIndex = join(DOCS, ref.slice(1), "index.html");
            if (existsSync(withIndex)) {
                return { kind: "file", file: withIndex };
            }
        }
        return { kind: "file", file: rootRelative };
    }
    if (ref.startsWith(".")) {
        const resolved = resolve(dirname(sourceFile), ref);
        return { kind: "file", file: resolved };
    }
    const resolved = resolve(dirname(sourceFile), ref);
    return { kind: "file", file: resolved };
}

function isInComment(html, index) {
    const before = html.slice(0, index);
    const lastCommentStart = before.lastIndexOf("<!--");
    const lastCommentEnd = before.lastIndexOf("-->");
    if (lastCommentStart === -1) return false;
    return lastCommentStart > lastCommentEnd;
}

function findRefPositions(html, ref) {
    const positions = [];
    let idx = 0;
    while (true) {
        idx = html.indexOf(ref, idx);
        if (idx === -1) break;
        positions.push(idx);
        idx += ref.length;
    }
    return positions;
}

function isInAnyComment(html, ref) {
    const positions = findRefPositions(html, ref);
    for (const pos of positions) {
        if (!isInComment(html, pos)) return false;
    }
    return positions.length > 0;
}

describe("internal links", () => {
    const htmlFiles = collectHtmlFiles(DOCS);
    const broken = [];

    for (const file of htmlFiles) {
        const html = readFileSync(file, "utf8");
        const hrefs = hrefsFromHtml(html);
        const rel = relative(DOCS, file);

        for (const href of hrefs) {
            if (isExternal(href)) continue;
            if (isInAnyComment(html, href)) continue;

            const result = resolveRef(href, file);
            if (result.kind === "file" && !existsSync(result.file)) {
                broken.push(`${rel}: ${href} → ${relative(DOCS, result.file)} (not found)`);
            }
        }
    }

    test("all internal hrefs resolve to existing files", () => {
        expect(broken, `Broken internal links:\n${broken.join("\n")}`).toEqual([]);
    });
});

describe("anchor fragments", () => {
    const htmlFiles = collectHtmlFiles(DOCS);

    for (const file of htmlFiles) {
        const html = readFileSync(file, "utf8");
        const ids = new Set(idsFromHtml(html));
        const hrefs = hrefsFromHtml(html);
        const rel = relative(DOCS, file);

        const anchors = hrefs
            .map(h => h.match(/^#(.+)/))
            .filter(Boolean)
            .map(m => m[1]);

        const missingAnchors = [...new Set(anchors.filter(id => !ids.has(id)))];

        test(`${rel} anchor fragments exist`, () => {
            expect(missingAnchors,
                `${rel} missing anchor targets: ${missingAnchors.join(", ")}`
            ).toEqual([]);
        });
    }
});

describe("asset references", () => {
    const htmlFiles = collectHtmlFiles(DOCS);
    const broken = [];

    for (const file of htmlFiles) {
        const html = readFileSync(file, "utf8");
        const refs = assetsFromHtml(html);
        const rel = relative(DOCS, file);

        for (const ref of refs) {
            if (isExternal(ref)) continue;
            if (isInAnyComment(html, ref)) continue;

            const result = resolveRef(ref, file);
            if (result.kind === "file" && !existsSync(result.file)) {
                broken.push(`${rel}: ${ref} → ${relative(DOCS, result.file)} (not found)`);
            }
        }
    }

    test("all internal asset references resolve to existing files", () => {
        expect(broken, `Broken asset references:\n${broken.join("\n")}`).toEqual([]);
    });
});
