import React from 'react';
import classes from './Button.module.css';

//defining the functional button component
const Button = props => {
  return (
  <button className={classes.button} 
  type={props.type || 'button'}
  onClick={props.onClick}
  >
    {props.children}
  </button>
 );
};


export default Button;
// ^^ exports the button component to use in other sections of the app

//onClick prop is used in the Button component to attach a custom click event handler to the button element
//{props.children} This renders any children passed to the Button component. This allows you to set the button's label or include other elements (such as icons) within the button.
