module.exports = function(config) {
  config.addPassthroughCopy({
    'src/includes/styles.css': './styles.css'
  });

  return {
    dir: {
      input: "src/*.html",
      output: "dist",
      // ⚠️ These values are both relative to your input directory.
      includes: "includes",
      layouts: "layouts"
    },
    passthroughFileCopy: true,
  }  
};

