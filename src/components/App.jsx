import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  var [, nTime] = React.useState(time);
  function getTime() {
    var time = new Date().toLocaleTimeString();
    nTime(time);
    // console.log(time, state);
  }
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
