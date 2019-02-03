/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
const Html = ({ body, title, styles }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
    <script src="/static/vendor.js"></script>
    <script src="/static/client.js"></script>
  </html>
`;

export default Html;