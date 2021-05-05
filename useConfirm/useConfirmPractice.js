import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useConfirm = (message = "", callback, rejection) => {
  if (!callback||typeof callback !== "function") {
    return;
  }
   if (!rejection||typeof rejection !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};
const App = () => {
  const deleteWorld = () => console.log("deleting world....");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>delete the world</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
