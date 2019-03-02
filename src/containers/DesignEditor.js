import React, { Component } from 'react';
import Konva from "konva";
import { Stage, Layer } from "react-konva";

class DesignEditor extends Component {
  render() {
    console.log(Konva);
    
    return (
      <div>
        vector editorrrrr
        <Stage>
          <Layer>

          </Layer>
        </Stage>
      </div>
    );
  }
}

export default DesignEditor;