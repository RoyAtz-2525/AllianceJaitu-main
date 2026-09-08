import fs from "fs";
import path from "path";

const dirs = [
  "src/pages/public",
  "src/components/home",
  "src/components/about",
  "src/components/admissions",
  "src/components/faculty",
  "src/components/facilities",
  "src/components/gallery",
  "src/components/contact",
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith(".jsx")) {
      const content = fs.readFileSync(file, "utf8");
      const imgRegex = /<img[^>]*>/g;
      const matches = content.match(imgRegex);
      if (matches) {
        matches.forEach((img) => {
          const altMatch = img.match(/alt=\s*(?:["']([^"']*)["']|{([^}]*)})/);
          const currentAlt = altMatch
            ? altMatch[1] !== undefined
              ? altMatch[1]
              : `Dynamic text: {${altMatch[2]}}`
            : "MISSING_ALT";
          results.push(`${file} ::: ${currentAlt}`);
        });
      }
    }
  });
  return results;
}

const allAlts = [];
dirs.forEach((d) => {
  if (fs.existsSync(d)) {
    allAlts.push(...walk(d));
  }
});

fs.writeFileSync("audit_alts.txt", allAlts.join("\n"), "utf8");
