import React, { Component } from 'react';
import "../css/DesignEditor.css";
import { SketchField, Tools } from 'react-sketch';
import { SketchPicker } from 'react-color';
import { connect } from "react-redux";
import { selectTool, selectColor } from "../actions/designAction";
import { getEvents } from "../thunks/eventThunk";

class DesignEditor extends Component {
  constructor(props){
    super(props)

    this.props.getEvents()
    
    this.state = {
      image: ""
    }
  }
  
  clickHandler = (event) => {
    console.log(event.target.value);
    this.props.selectTool(event.target.value)
  }

  colorChangeHandler = (color) => {
    console.log(color);
    this.props.selectColor(color.hex)
  }


  render() {
   console.log(this.props);   
    
    return (
      <div className="editor-container">
        <SketchField 
          ref={image => (this.image = image)}
          className="canvas"
          tool={this.props.selectedTool}
          lineColor={this.props.selectedColor}
          fillColor={this.props.selectedColor}
          width = "700px"
          height = "500px" />
          
        <div className="sketch-tools">
          
          <button id="icon1" value="pencil" onClick={this.clickHandler}>
          </button>

          <button id="icon2" value="line" onClick={this.clickHandler}>
          </button>

          <button id="icon3" value="circle" onClick={this.clickHandler}>
          </button>

          <button id="icon4" value="rectangle" onClick={this.clickHandler}>
          </button>

          <button id="icon5" value="select" onClick={this.clickHandler}>
          </button>
        </div>

        <div className="colors">
          <SketchPicker color={this.props.selectedColor}
          onChange={this.colorChangeHandler}/>
        </div>

        <div className="new-design-info">
          
        </div>
        
      </div>
      
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    selectedTool: state.designInfo.selectedTool,
    selectedColor: state.designInfo.selectedColor

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    selectTool: (tool) => dispatch(selectTool(tool)),
    selectColor: (color) => dispatch(selectColor(color)),
    getEvents: () => dispatch(getEvents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignEditor);