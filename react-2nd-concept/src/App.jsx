import "./App.css";
import Friends from "./Friends";
import Users from "./Users";
import Counter from "./counter";
import Team from "./team";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 click");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>React Core Concepts</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click ME</button>
      <button onClick={handleClick2}>Click Me 222</button>

      <button
        onClick={() => {
          alert("click 3333");
        }}
      >
        Click 333
      </button>
      <button onClick={() => addToFive(3)}>444</button>
    </>
  );
}

export default App;
