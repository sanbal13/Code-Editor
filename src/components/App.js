import Editor from './Editor';
import './App.css';
import Output from './Output';  
import React, {useState, useEffect} from 'react';

function App() {
  const [html, setHtml] = useState(htmlText);
  const [css, setCss] = useState(cssText);
  const [srcDoc, setSrcDoc] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>
      <body>${html}</body>
      <style>${css}</style>
      </html>`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css]);

  return (
    <div className="App container">
    <div className="header">
      <h1>Code Editor</h1>
      <p>You can write and preview HTML and CSS!</p>
    </div>
      <div className="flex-row">
        <div className="flex-col flex-grow-1 width-50">
          <Editor header="HTML" language="xml" value={html} onChange={setHtml}/>
          <div className="margin-bottom"></div>
          <Editor header="CSS" language="css" value={css} onChange={setCss}/>
        </div>
        <Output srcDoc={srcDoc}/>
      </div>
    </div>
  );
}
const htmlText = `<center>\n<img src="https://cutt.ly/JbMvJKT" />\n<h1>Hello World!</h1>\n</center>`;

const cssText = `h1 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
img {
  width: 200px;
  height: auto;
  border-radius: 20px;
}`;
export default App;
