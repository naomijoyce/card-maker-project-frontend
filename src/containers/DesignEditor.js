import React, { Component } from 'react';
import Konva from "konva";
import { Stage, Layer, Line } from "react-konva";
import "../css/DesignEditor.css";

class DesignEditor extends Component {
  render() {
    console.log(Konva);
    
    return (
      <div>
        vector editorrrrr
        <Stage className="editor">
          <Layer>

          </Layer>
        </Stage>
      </div>
    );
  }
}

export default DesignEditor;