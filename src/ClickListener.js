import React, { Component } from 'react';

class ClickAnywhereListener extends Component {
  componentDidMount() {
    // Attach the event listener when the component mounts
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    // Remove the event listener when the component unmounts to prevent memory leaks
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = (event) => {
    // Handle the click event here
    // You can add your custom logic or trigger an action when a click occurs
    //console.log('Click anywhere on the site');
    //console.log(this.props.asperji);
  };

  render() {
    return this.props.children;
  }
}

export default ClickAnywhereListener;