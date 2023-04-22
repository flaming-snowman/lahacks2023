import React from 'react';

export default function ImageButton(props) {
  return (
    <button onClick={props.onClick}>
      <img src={props.imageSrc} title={props.imageAlt} alt={props.imageAlt} style={{ background: 'transparent' }} />
    </button>
  );
}
