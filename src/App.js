import duck from './img/duck.png';
import goose from './img/goose.png';
import { useState, useEffect } from 'react';
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


function CounterButton({src, text, updateKarma, add}) {
    const [count, setCount] = useState(0);
    function gotClicked() {
        setCount(count+1);
        updateKarma(add);
    }

    return (<><ImageButton
                imageSrc={src}
                imageTitle={count}
                onClick={gotClicked}
            />
            <h1>You clicked the {text} {count} times</h1></>
    );
}

function DuckButton({func}) {
    return <CounterButton src={duck} updateKarma={func} add={1} text="duck"/>;
}

function GooseButton({func}) {
    return <CounterButton src={goose} updateKarma={func} add={-1} text="goose"/>;
}

export default function Board() {
    const [karma, setKarma] = useState(0);
    function updateKarma(add) {
        setKarma(karma+add);
        if(karma+add < 0) setKarma(0);
    }
  return (
    <>
        <h1>Karma: {karma}</h1>
      <DuckButton func={updateKarma}/>
      <GooseButton func={updateKarma}/>
    </>
  );
}
