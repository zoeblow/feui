const Components = require("./get-components")();
const fs = require("fs");
const path = require("path");
const uppercamelize = require("uppercamelcase");
const version = process.env.VERSION || require("../../package.json").version;
const tips = "// This file is auto gererated by build/bin/build-entry.js";

function buildFeuiEntry() {
  const uninstallComponents = [
    "Dialog",
    "Toast",
    "Lazyload",
    "ImagePreview",
    "Locale"
  ];

  const importList = Components.map(
    name => `import ${uppercamelize(name)} from './${name}';`
  );
  const exportList = Components.map(name => `${uppercamelize(name)}`);
  const intallList = exportList.filter(
    name => !~uninstallComponents.indexOf(uppercamelize(name))
  );
  const content = `${tips}
${importList.join("\n")}

const version = '${version}';
const components = [
  ${intallList.join(",\n  ")}
];

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  ${exportList.join(",\n  ")}
};

export default {
  install,
  version
};
`;

  fs.writeFileSync(path.join(__dirname, "../../packages/index.js"), content);
}

buildFeuiEntry();
