const { describe, expect, test } = require("bun:test");
const { readdirSync, readFileSync, existsSync } = require("node:fs");
const { resolve, join, relative } = require("node:path");

const DOCS = resolve(__dirname, "../..", "docs");
const SITEMAP_PATH = join(DOCS, "sitemap.txt");
const ORIGIN = "https://10k24.com";

const EXPECTED_SITEMAP_URLS = [
    `${ORIGIN}`,
    `${ORIGIN}/projects/`,
    `${ORIGIN}/projects/planetary-society/`,
    `${ORIGIN}/projects/salgirah-festival/`,
    `${ORIGIN}/projects/midjourney/`,
];

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

function sitemapUrlToPath(url) {
    const pathname = new URL(url).pathname;
    const relativePath = pathname === "/" ? "index.html" : join(pathname.slice(1), "index.html");
    return join(DOCS, relativePath);
}

describe("sitemap", () => {
    test("contains expected URLs in order", () => {
        const content = readFileSync(SITEMAP_PATH, "utf8");
        const urls = content.trim().split("\n");
        expect(urls).toEqual(EXPECTED_SITEMAP_URLS);
    });

    test("no empty lines or trailing whitespace", () => {
        const content = readFileSync(SITEMAP_PATH, "utf8");
        const lines = content.split("\n");
        for (let i = 0; i < lines.length; i++) {
            expect(lines[i], `line ${i + 1} has trailing whitespace`).toBe(lines[i].trimEnd());
        }
        expect(content.endsWith("\n")).toBe(true);
    });

    test("all URLs share the same origin", () => {
        const content = readFileSync(SITEMAP_PATH, "utf8");
        const urls = content.trim().split("\n");
        for (const url of urls) {
            expect(new URL(url).origin).toBe(ORIGIN);
        }
    });
});

describe("route-to-file mapping", () => {
    test("every sitemap URL has a corresponding index.html", () => {
        const content = readFileSync(SITEMAP_PATH, "utf8");
        const urls = content.trim().split("\n");
        for (const url of urls) {
            const filePath = sitemapUrlToPath(url);
            expect(existsSync(filePath), `Missing file for ${url}`).toBe(true);
        }
    });
});

describe("HTML integrity", () => {
    const htmlFiles = collectHtmlFiles(DOCS);

    test("at least one HTML file exists", () => {
        expect(htmlFiles.length).toBeGreaterThan(0);
    });

    for (const file of htmlFiles) {
        const rel = relative(DOCS, file);

        test(`${rel} has doctype`, () => {
            const html = readFileSync(file, "utf8");
            expect(html.startsWith("<!DOCTYPE html>")).toBe(true);
        });

        test(`${rel} has non-empty title`, () => {
            const html = readFileSync(file, "utf8");
            const match = html.match(/<title>([^<]*)<\/title>/);
            expect(match, "Missing <title>").not.toBeNull();
            expect(match[1].trim().length).toBeGreaterThan(0);
        });

        test(`${rel} has non-empty description meta`, () => {
            const html = readFileSync(file, "utf8");
            const match = html.match(/<meta\s+name="description"\s+content="([^"]*)"/);
            expect(match, 'Missing <meta name="description">').not.toBeNull();
            expect(match[1].trim().length).toBeGreaterThan(0);
        });
    }
});

describe("robots.txt", () => {
    const filePath = join(DOCS, "robots.txt");

    test("exists", () => {
        expect(existsSync(filePath)).toBe(true);
    });

    if (existsSync(filePath)) {
        const content = readFileSync(filePath, "utf8");

        test("sitemap URL matches metadata.baseURL", () => {
            expect(content).toContain("Sitemap: https://10k24.com/sitemap.txt");
            expect(content).not.toContain("www.10k24.com");
        });

        test("disallows tech projects but not all /projects", () => {
            expect(content).not.toContain("Disallow: /projects\n");
            expect(content).toContain("Disallow: /projects/clock/");
            expect(content).toContain("Disallow: /projects/processing-native/");
            expect(content).toContain("Disallow: /projects/words-have-power/");
        });

        test("allows design projects", () => {
            expect(content).not.toContain("Disallow: /projects/planetary-society/");
            expect(content).not.toContain("Disallow: /projects/salgirah-festival/");
            expect(content).not.toContain("Disallow: /projects/midjourney/");
        });
    }
});

describe("static assets", () => {
    const assets = [
        "styles.css",
        "img/opengraph.png",
    ];

    for (const asset of assets) {
        test(`${asset} exists`, () => {
            expect(existsSync(join(DOCS, asset)), `Missing ${asset}`).toBe(true);
        });
    }
});
