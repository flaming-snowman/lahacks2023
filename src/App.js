import duck from "./img/duck.png";
import goose from "./img/goose.png";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./App.css";

function ImageButton(props) {
    return (
        <img
            width={300}
            height={300}
            src={props.imageSrc}
            title={props.imageTitle}
            onClick={props.onClick}
            alt="bird"
        />
    );
}

function CounterButton({ src, text, updateKarma, add }) {
    const [count, setCount] = useState(0);
    function gotClicked() {
        setCount(count + 1);
        updateKarma(add);
    }

    return (
        <div
            style={{
                margin: "100px",
                border: "10px solid black",
                textAlign: "center",
            }}
        >
            <ImageButton
                imageSrc={src}
                imageTitle={count}
                onClick={gotClicked}
            />
            <h1>
                You clicked the {text} {count} times
            </h1>
        </div>
    );
}

function DuckButton({ func }) {
    return <CounterButton src={duck} updateKarma={func} add={1} text="duck" />;
}

function GooseButton({ func }) {
    return (
        <CounterButton src={goose} updateKarma={func} add={-1} text="goose" />
    );
}

export default function Board() {
    const [karma, setKarma] = useState(0);
    function updateKarma(add) {
        setKarma(karma + add);
        if (karma + add < 0) setKarma(0);
        if (karma + add > 20) setKarma(20);
    }
    return (
        <>
            <div style={{ padding: "20px" }}>
                <ProgressBar now={karma * 5} />
            </div>
            <h1>Karma: {karma}</h1>
            <div style={{ display: "flex" }}>
                <DuckButton func={updateKarma} />
                <GooseButton func={updateKarma} />
            </div>
        </>
    );
}
