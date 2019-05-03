module.exports = {
  "roots": [
    "<rootDir>/src"
  ],

  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },

  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report",
      "dateFormat":"yy-mm-dd HH:MM:ss"
    }]
  ],

  "testResultsProcessor": "./node_modules/jest-html-reporter"
}