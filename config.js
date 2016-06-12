System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "blacklist": []
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "JustGoscha/allmighty-autocomplete": "github:JustGoscha/allmighty-autocomplete@master",
    "angular": "github:angular/bower-angular@1.5.0",
    "angular-bootstrap-dropdownandtab": "npm:angular-bootstrap-dropdownandtab@1.0.6",
    "angular-cache": "npm:angular-cache@4.5.0",
    "angular-loading-bar": "npm:angular-loading-bar@0.9.0",
    "angular-local-storage": "npm:angular-local-storage@0.2.6",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.0",
    "angular-route": "github:angular/bower-angular-route@1.5.0",
    "angular-ui/ui-tinymce": "github:angular-ui/ui-tinymce@0.0.16",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "bootstrap-css-only": "npm:bootstrap-css-only@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "es6-module-loader": "npm:es6-module-loader@0.17.11",
    "font-awesome": "npm:font-awesome@4.5.0",
    "leon/angular-upload": "github:leon/angular-upload@1.0.12",
    "lodash": "npm:lodash@3.10.1",
    "restangular": "github:mgonto/restangular@1.5.2",
    "text": "github:systemjs/plugin-text@0.0.3",
    "tinymce": "github:tinymce/tinymce-dist@4.3.12",
    "github:angular/bower-angular-mocks@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-route@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:mgonto/restangular@1.5.2": {
      "angular": "github:angular/bower-angular@1.5.0",
      "lodash": "npm:lodash@3.10.1"
    },
    "npm:angular-cache@4.5.0": {
      "angular": "npm:angular@1.5.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:es6-module-loader@0.17.11": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "when": "npm:when@3.7.7"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:when@3.7.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
