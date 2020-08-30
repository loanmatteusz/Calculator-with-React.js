import React from 'react';
import './styles.css';

interface Props {
  label?: any
  operation?: any
  double?: any
  triple?: any
  click?: Function
}

function Button(props: Props) {

  return (
    <>
      <button
        className={`
        Button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
        `}
        onClick={ () =>
          props.click && props.click(props.label)
        }
      >
        {props.label === "*" ? "x" : props.label}
      </button>
    </>
  );
}

export default Button;