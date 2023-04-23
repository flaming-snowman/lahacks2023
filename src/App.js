import duck from './img/duck.png';
import { useState } from 'react';
import './App.css'

function ImageButton(props) {
  return (
    <img
        width={300}
        height={300}
        src={props.imageSrc}
        title={props.imageTitle}
        onClick={props.onClick}
    />
  );
}


function DuckButton({}) {
    const [count, setCount] = useState(0);
    function gotClicked() {
        setCount(count+1);
    }

    return (<><ImageButton
                imageSrc={duck}
                imageTitle={count}
                onClick={gotClicked}
            />
            <h1>You clicked the duck {count} times</h1></>
    );
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
