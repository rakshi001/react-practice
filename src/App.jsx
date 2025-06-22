
import { useState } from "react";

function App() {

const [count,setCount] = useState(1);

function counterIncrease(){
  return setCount(count + 1)
}


  return (
    <div style={{display:"flex"}}>
      <div  >
         <img src="https://th.bing.com/th/id/OIP.js7OZ-JowQURfg8TyZbghAHaJH?w=141&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" height={50} width={40}/>
      </div>
      <div>
        {count}
      </div>
      <button onClick={counterIncrease}>click</button>
    </div>
  );
}

export default App;
