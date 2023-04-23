import duck from './img/duck.png';
import goose from './img/goose.png';
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


function CounterButton({src, text}) {
    const [count, setCount] = useState(0);
    function gotClicked() {
        setCount(count+1);
    }

    return (<><ImageButton
                imageSrc={src}
                imageTitle={count}
                onClick={gotClicked}
            />
            <h1>You clicked the {text} {count} times</h1></>
    );
}

function DuckButton({}) {
    return <CounterButton src={duck} text="duck"/>;
}

function GooseButton({}) {
    return <CounterButton src={goose} text="goose"/>;
}

export default function Board() {
  return (
    <>
      <DuckButton />
      <GooseButton />
    </>
  );
}
