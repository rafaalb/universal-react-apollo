
const Html = ({ body, title, styles, scripts }) => `
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
    ${scripts}
  </html>
`;

export default Html;
