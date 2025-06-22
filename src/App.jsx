import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <PostComponent />
    </div>
  );
}

const style = {
  width: 200,
  height: 250,
  backgroundColor: "white",
  //borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  display: "flex",
};

function PostComponent() {
  return (
    <div style={style}>
      <img
        src={"https://picsum.photos/200/300"}
        style={{ width: 100, height: 100, borderRadius: 300 }}
      />
      <div> 100xdevs</div>
      <div>23422-followers</div>
    </div>
  );
}

export default App;
