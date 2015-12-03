module.exports = {
  "replace": {
    "_i18n/template.en-US.json": {
      "author": /docprofsky/g,
      "info-name": "info.name",
      "info-use": "info.use",
      "info-detail": "info.detail"
    },

    "package.json": {
      "author": /docprofsky/g,
      "name": /template(?!_)/g
    },

    "template.js": {
      "name": /template/g
    },

    "template.ps.js": {
      "name": /template/g
    },

    "template.html": {
      "name": /template/g
    },

    "template.css": {
      "name": /template/g
    }
  },
  "files": {
    "rename": [
      "_i18n/template.en-US.json",
      "template.css",
      "template.html",
      "template.js",
      "template.ps.js"
    ],
    "delete": [
      ".git"
    ]
  }
}
