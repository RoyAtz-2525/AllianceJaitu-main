const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
const traverse = require("@babel/traverse").default;

const ROOT = path.join(__dirname, "src");

function parseFile(filePath, visited = new Set()) {
  if (visited.has(filePath)) return null;
  visited.add(filePath);

  let content;
  try {
    content = fs.readFileSync(filePath, "utf-8");
  } catch (e) {
    return null;
  }

  const results = { h1: [], h2: [], h3: [], imported: [] };

  try {
    const ast = babel.parseSync(content, {
      filename: filePath,
      presets: ["@babel/preset-react"],
      ast: true,
    });

    traverse(ast, {
      JSXElement(path) {
        const name = path.node.openingElement.name.name;
        if (name === "h1" || name === "h2" || name === "h3") {
          // try to extract text content
          let text = "";
          path.node.children.forEach((child) => {
            if (child.type === "JSXText") text += child.value;
            if (child.type === "JSXExpressionContainer") text += "{expr}";
          });
          results[name].push(text.replace(/\s+/g, " ").trim());
        }
      },
      ImportDeclaration(path) {
        const source = path.node.source.value;
        if (source.startsWith(".")) {
          results.imported.push(source);
        }
      },
    });
  } catch (e) {}

  return results;
}

function resolveImportPath(currentFile, importPath) {
  const dir = path.dirname(currentFile);
  let resolved = path.resolve(dir, importPath);
  if (fs.existsSync(resolved) && fs.statSync(resolved).isFile())
    return resolved;
  if (fs.existsSync(resolved + ".jsx")) return resolved + ".jsx";
  if (fs.existsSync(resolved + ".js")) return resolved + ".js";
  if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
    if (fs.existsSync(path.join(resolved, "index.jsx")))
      return path.join(resolved, "index.jsx");
    if (fs.existsSync(path.join(resolved, "index.js")))
      return path.join(resolved, "index.js");
  }
  return null;
}

function analyzePage(pagePath) {
  const visited = new Set();
  const queue = [pagePath];

  const allH1 = [];
  const allH2 = [];
  const allH3 = [];
  let name = path.basename(pagePath);

  while (queue.length > 0) {
    const current = queue.shift();
    const res = parseFile(current, visited);
    if (!res) continue;

    allH1.push(...res.h1.filter(Boolean));
    allH2.push(...res.h2.filter(Boolean));
    allH3.push(...res.h3.filter(Boolean));

    res.imported.forEach((imp) => {
      const p = resolveImportPath(current, imp);
      if (p) queue.push(p);
    });
  }

  console.log(`\n=== ${name} ===`);
  console.log(`H1 count: ${allH1.length}`);
  console.log(`H1 details: ${allH1.join(" | ")}`);
  console.log(`H2 count: ${allH2.length}`);
  // console.log(`H2 details: ${allH2.join(' | ')}`);
  console.log(`H3 count: ${allH3.length}`);
  // console.log(`H3 details: ${allH3.join(' | ')}`);
}

const pages = [
  "src/pages/public/Home.jsx",
  "src/pages/public/About.jsx",
  "src/pages/public/Admissions.jsx",
  "src/pages/public/Faculty.jsx",
  "src/pages/public/Facilities.jsx",
  "src/pages/public/Gallery.jsx",
  "src/pages/public/Contact.jsx",
];

pages.forEach((p) => analyzePage(path.join(__dirname, p)));
