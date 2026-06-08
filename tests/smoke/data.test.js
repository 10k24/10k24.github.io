const { describe, expect, test } = require("bun:test");
const { readFileSync } = require("node:fs");
const { resolve, join } = require("node:path");

const DATA_DIR = resolve(__dirname, "../..", "src/_data");

function readJson(filename) {
    return JSON.parse(readFileSync(join(DATA_DIR, filename), "utf8"));
}

describe("metadata.json", () => {
    const data = readJson("metadata.json");

    test("baseURL is a non-empty string", () => {
        expect(typeof data.baseURL).toBe("string");
        expect(data.baseURL.length).toBeGreaterThan(0);
    });

    test("author.name is a non-empty string", () => {
        expect(typeof data.author?.name).toBe("string");
        expect(data.author.name.length).toBeGreaterThan(0);
    });

    test("author.email is a non-empty string", () => {
        expect(typeof data.author?.email).toBe("string");
        expect(data.author.email.length).toBeGreaterThan(0);
    });

    test("social links are non-empty strings", () => {
        for (const [key, value] of Object.entries(data.social || {})) {
            expect(typeof value, `social.${key} must be a string`).toBe("string");
            expect(value.length, `social.${key} must not be empty`).toBeGreaterThan(0);
        }
    });
});
