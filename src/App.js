import "./App.css";
function DuckButton({}) {
    return (
        <div id="duck-btn">
            <button class="btn">sksksk</button>
        </div>
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
