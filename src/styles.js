import MyApp from "./App.js";
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const sheet = new ServerStyleSheet();
try {
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <MyApp />
    </StyleSheetManager>
  );
  const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
} catch (error) {
  // handle error
  console.error(error);
} finally {
  sheet.seal();
}