import duck from './img/transduck.png';
import { useState } from 'react';
import './App.css'

function ImageButton(props) {
  return (
    <button onClick={props.onClick}>
      <img src={props.imageSrc} alt={props.imageAlt} title={props.imageAlt} style={{ background: 'transparent' }} />
    </button>
  );
}


function DuckButton({}) {
    const [count, setCount] = useState(0);
    function gotClicked() {
        setCount(count+1);
    }

    return (<ImageButton
        imageSrc={duck}
        imageAlt={count}
        onClick={gotClicked}
    />);
}
function GooseButton({}) {
  return <button>GOOSE</button>;
}
export default function Board() {
  return (
    <>
      <DuckButton />
      <GooseButton />
    </>
  );
}
