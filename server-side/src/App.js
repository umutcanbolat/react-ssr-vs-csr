const React = require("react");

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1>Hallo {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increment
      </button>
    </div>
  );
}

module.exports = App;
