import duck from "./img/duck.png";
import goose from "./img/goose.png";
import egg from "./img/egg.png";
import splash from "./img/splash.png"
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
        />
    );
}

function CounterButton({ src, text, updateKarma, add, id }) {
    const [count, setCount] = useState(0);
    function gotClicked() {
        setCount(count + 1);
        updateKarma(add);
    }

    return (
        <div
            style={{
                textAlign: "center",
            }}
            id={id}
        >
            <ImageButton
                imageSrc={src}
                imageTitle={count}
                onClick={gotClicked}
            />
            <h1>
                {text}
            </h1>
        </div>
    );
}

function DuckButton({ func }) {
    return <CounterButton src={duck} updateKarma={func} add={1} text="Duck giv u karma" id="duck" />;
}

function GooseButton({ func }) {
    return (
        <CounterButton src={goose} updateKarma={func} add={-1} text="Goose take ur karma" id="goose" />
    );
}

function Egg({karma, func}) {
    if(karma==20) {
        return <img src={egg} class="wobble" style={{ display: "block", margin: "0 auto 50px" }} onClick={func}/>;

    }
    return <img src={egg} style={{ display: "block", margin: "0 auto 50px" }} />;
}

function Board({func}) {
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
            <h1 style={{marginLeft: "20px"}}>Karma: {karma} </h1>
            <Egg karma={karma} func={func}/>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <DuckButton func={updateKarma} />
                <GooseButton func={updateKarma} />
            </div>
        </>
    );
}

function Splash({ func }) {
    return (
                <div className = "splash">
                    <img src={splash} style={{width: "100%"}} onClick={func}/>
                    <h1> Duck Duck Goose </h1>
                </div>
           )
    return }

export default function App() {
    const [board, setBoard] = useState(0);
    function switchBoard() {
        setBoard(1-board);
    }
    if(board == 0) return <Splash func={switchBoard}/>;
    else return <Board func={switchBoard}/>;
}
