import React, { Component } from 'react';
import { connect } from "react-redux";

class UpdateForm extends Component {
  render() {
    return (
      <div>
        where you update your account settings!
      </div>
    );
  }
}

export default connect()(UpdateForm);