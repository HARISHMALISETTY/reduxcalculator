import React, { useState } from "react";
import { useEffect } from "react";
const LifeCycleFunComp = () => {
  const [button1Color, setButton1Color] = useState("orange");
  const [button2Color, setButton2Color] = useState("orange");
  const [button3Color, setButton3Color] = useState("orange");
  const [button4Color, setButton4Color] = useState("orange");
  useEffect(() => {
    console.log("useeffect called");
  });

  return (
    <div>
      <h1>LifeCycleFunComponent</h1>
      <button
        onClick={(event) =>
          setButton1Color(
            (event.target.style.backgroundColor = "green"),
            alert("colour changed from orange to green")
          )
        }
      >
        {button1Color}
      </button>
      <button
        onClick={(event) =>
          setButton2Color(
            (event.target.style.backgroundColor = "brown"),
            alert("colour changed from orange to brown")
          )
        }
      >
        {button2Color}
      </button>
      <button
        onClick={(event) =>
          setButton3Color(
            (event.target.style.backgroundColor = "red"),
            alert("colour changed from orange to red")
          )
        }
      >
        {button3Color}
      </button>
      <button
        onClick={(event) =>
          setButton4Color(
            (event.target.style.backgroundColor = "blue"),
            alert("colour changed from orange to blue")
          )
        }
      >
        {button4Color}
      </button>
    </div>
  );
};
export default LifeCycleFunComp;
