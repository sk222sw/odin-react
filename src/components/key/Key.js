import React, { Component } from 'react';

require('./key.css')

export default class Key extends Component {
  constructor(props) {
    super(props);
    console.log('hej')
  }
  
  componentDidMount = () => {
  }
  
  render() {
    return (
      <div className="key">
        {this.props.name}
      </div> 
    );
  }
}