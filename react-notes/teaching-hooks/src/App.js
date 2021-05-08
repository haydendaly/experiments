import { useState } from "react";
// list
// add to the  list
// check off what you have done

const list = [
  { done: false, task: "wash sheets" },
  { done: false, task: "learn hooks" },
];

function App() {
  const [toDo, updateToDo] = useState(list);
  const [value, updateValue] = useState("");

  const removeToDo = (item) => {
    const temp = toDo.filter(o => o.task !== item.task)
    updateToDo(temp)
  };

  const updateDone = (item) => {
    const temp = toDo.map(o => {
      if (o.task === item.task) {
        return {
          task: o.task,
          done: !o.done
        }
      } else {
        return o;
      }
    })
    updateToDo(temp)
  }

  return (
    <div>
      {toDo.map((item) => (
        <div
          style={{
            height: 50,
            backgroundColor: "purple",
            marginBottom: 10,
            color: "white",
            display: "flex"
          }}
        >
          <input type="checkbox" checked={item.done} onChange={() => updateDone(item)}/>
          <p>{item.task}</p>
          <button
            onClick={() => removeToDo(item)}
          >
            delete item!
          </button>
        </div>
      ))}
      <input
        type="text"
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
      <button
        onClick={() => updateToDo([...toDo, { done: false, task: value }])}
      >
        submit here!
      </button>
    </div>
  );
}

export default App;
