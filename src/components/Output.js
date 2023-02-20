import React from 'react';
import Dots from './Dots';
import './Output.css';

export default function Output(props) {
  return (
    <>
      <div className="flex-col output">
        <div className="editor-header">
          <Dots />
          <div className="editor-heading">OUTPUT</div>
        </div>
        <div className="editor-body">
          <iframe title="output" className="iframe" srcDoc={props.srcDoc} 
            sandbox="allow-scripts"            
          />
        </div>
      </div>
    </>
  );
}
