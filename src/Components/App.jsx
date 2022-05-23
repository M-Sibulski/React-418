import { React } from "react";
import Login from "./Login";

var userIsRegistered = false;
var currentTime = new Date(2022, 2, 1, 18).getHours();

export default function App() {
  return (
    <div>
      <div className="container">
        {currentTime > 12 && <h1>Why are you still working?</h1>}
      </div>
      <div className="container">
        <Login isRegistered={userIsRegistered} />
      </div>
    </div>
  );
}
