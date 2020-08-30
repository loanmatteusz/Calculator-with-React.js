import React from 'react';
import './styles.css';

interface Props {
  value?: number | string
}

function Display(props: Props) {

  return (
    <div className="Display">
      {props.value || undefined}
    </div>
  );
}

export default Display;