import React, { Component } from 'react';

class ClickAnywhereListener extends Component {
  componentDidMount() {
    // Attach the event listener when the component mounts
    document.addEventListener('mouseover', this.handleClick);
  }

  componentWillUnmount() {
    // Remove the event listener when the component unmounts to prevent memory leaks
    document.removeEventListener('mouseover', this.handleClick);
  }

  handleClick = (event) => {
    console.log(this.props.idOfDiv);
    this.props.onMouseOverDiv(this.props.idOfDiv);
  };

  render() {
    return this.props.children;
  }
}

export default ClickAnywhereListener;