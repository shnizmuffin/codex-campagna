var MarkdownIt = require('markdown-it')({
    html: true,
    linkify: false,
    typographer: true,
    breaks: true
  })
  .use(require('markdown-it-attrs'))
  .use(require('markdown-it-header-sections'))

/**
 * Handlebars block helper that converts Markdown to HTML.
 * @param {object} options - Handlebars object.
 * @example
 * {{#markdown}}Welcome to [zombo.com](http://zombo.com){{/markdown}}
 * @returns The Markdown inside the helper, converted to HTML.
 */
module.exports = function(options) {
  return MarkdownIt.render(options.fn(this));
};

