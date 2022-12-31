import {useState} from "react";

export function Tuesdays() {
  const [joemama1, joemama2] = useState("");
  const [hughmungus0, hughmungus1] = useState("");

  function joemama0(joemama3) {
    joemama2(joemama3);
    let mungus = "";

    for (let joe of joemama1) {
      let hugh = joe.charCodeAt(0) - 65;

      if (hugh > 0) {
        if (hugh === 1) {
          mungus += "cameron";
        }
        if (hugh <= 7) {
          mungus += String.fromCharCode(hugh + 60)
        }
        if (hugh > 7) {
          mungus += String.fromCharCode(hugh + 67)
        }
        if (hugh % 3 === 1) {
          mungus += " ";
        }
      } else {
        mungus += String.fromCharCode(hugh + 90);
      }
      if (hugh < -8) {
        mungus += "codeerr";
      }
    }

    hughmungus1(mungus);
  }

  return (
    <div>
      <input type={"text"} name={"joemama0"} value={joemama1} onChange={joemama4 => joemama0(joemama4.target.value)} />
      <p>{hughmungus0}</p>
    </div>
  )
}