//libraries
import React from 'react';
//styles
import classes from './Button.module.scss';

const button = (props) => {

    let color;
    switch(props.color) {
        case "primary":
        color = classes.Primary;
        break;
        case "secondary":
        color = classes.Secondary;
        break;
        case "success":
        color = classes.Success;
        break;
        case "danger":
        color = classes.Danger;
        break;
        case "warning":
        color = classes.Warning;
        break;
        default:
        color = color.None;
    }
  return (
    <button
      onClick={props.clicked}
      label={props.label}
      type={props.type}
      className={classes.Button + ' ' + color}>
      {props.children}
    </button>
  )

}

export default button;