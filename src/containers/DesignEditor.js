import React, { Component } from 'react';
import "../css/DesignEditor.css";
import { SketchField, Tools } from 'react-sketch';
import { SketchPicker } from 'react-color';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectTool, selectColor } from "../actions/designAction";
import { getEvents } from "../thunks/eventThunk";
import { creatingNewDesign } from "../thunks/designThunk";

class DesignEditor extends Component {
  constructor(props){
    super(props)
    
    this.props.getEvents()
    
    this.state = {
      image: "",
      event_id: "",
      title: "",
      user_id: this.props.currentUser.id
    }
  }
  
  clickHandler = (event) => {
    console.log(event.target.value);
    this.props.selectTool(event.target.value)
  }

  colorChangeHandler = (color) => {
    console.log(color);
    this.props.selectColor(color)
  }

  selectOptionHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      event_id: event.target.value
    })
  } 

  changeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
      image: this.canvas.toDataURL().toString()
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    const token = localStorage.getItem("token")
    this.props.creatingNewDesign(this.state, token)    
    alert('Yay! You created a design!')
    this.props.history.push("/")

  }


  render() {
   console.log(this.props); 
   const toRgba = (color) => {
     return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
   } 
    
    return (
      <div className="editor-container">

        <div className="canvas-area">
          <SketchField 
            ref={canvas => (this.canvas = canvas)}
            className="canvas"
            tool={this.props.selectedTool}
            lineColor={this.props.selectedColor}
            fillColor={this.props.selectedColor}
            width = "700px"
            height = "500px" />
        </div>
          
        <div className="sketch-tools">
          
          <button name="tools" id="icon1" value="pencil" onClick={this.clickHandler}>
          </button>

          <button name="tools" id="icon2" value="line" onClick={this.clickHandler}>
          </button> 

          <button name="tools" id="icon3" value="circle" onClick={this.clickHandler}>
          </button>

          <button name="tools" id="icon4" value="rectangle" onClick={this.clickHandler}>
          </button>

          <button name="tools" id="icon5" value="select" onClick={this.clickHandler}>
          </button>
        </div>

        <div className="colors">
          <SketchPicker 
          disableAlpha={false}
          color={this.props.selectedColor}
          onChange={(color) => this.colorChangeHandler(toRgba(color.rgb))}/>
        </div>

        <div className="new-design-info">
          <strong>
            <label>Type of Event</label>
            </strong> <br/>
          <select
            name="event_id"
            value={this.state.event_id}
            onChange={this.selectOptionHandler}
            > <br/>
            <strong>

              <option>Pick an Event</option>
            </strong>
            
            {
              this.props.events.map(event => 
                <option key={event.id} value={event.id}>
                {event.category}
                </option>  
              )
            }
          </select><br/>

          <form 
            className="design-add-form"
            onSubmit={this.submitHandler}>
            <strong>
              <label>Name your Design</label>
              </strong>
            <input 
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.changeHandler}
              placeholder="title"/> <br/>

            <button>Create Design</button>
          </form>
        </div>

      </div>
      
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    selectedTool: state.designInfo.selectedTool,
    selectedColor: state.designInfo.selectedColor,
    events: state.eventInfo.events,
    currentUser: state.userInfo.currentUser.user

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    selectTool: (tool) => dispatch(selectTool(tool)),
    selectColor: (color) => dispatch(selectColor(color)),
    getEvents: () => dispatch(getEvents()),
    creatingNewDesign: (designInfo, token) =>dispatch(creatingNewDesign(designInfo, token))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DesignEditor));