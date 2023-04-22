function DuckButton({}) {
  return <button>DUCK</button>;
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
