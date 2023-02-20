import React from 'react';
import { Controlled as Codemirror } from 'react-codemirror2';

import './Editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import Dots from './Dots';

export default class Editor extends React.Component {
  handleChange = (editor, data, value) => {
    this.props.onChange(value);
  }
  render() {
    const {header, language, value} = this.props;
    return (
        <>      
          <div className="editor-header">
            <Dots />
            <div className="editor-heading">{header}</div>
          </div>
          <div className="editor-body">
            <Codemirror 
                value= {value}
                options={{
                    mode: language,
                    theme:'material',
                    lineNumbers: true,
                    lineWrapping: true
                }}
                onBeforeChange={this.handleChange}
            />
          </div>     
        </>
      );
  }
}
