import React, { useState } from "react";
import { TiPlus} from "react-icons/ti";
import { FiTrash2 } from "react-icons/fi";

import todoImage from "./assets/todo.png";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => setInputData(e.target.value);

  const addItem = () => {
    if (!inputData) return;

    setItems([...items, inputData]);
    setInputData("");
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, ind) => ind !== id);
    setItems(updatedItems);
  };

  const removeAll = () => setItems([]);

  return (
    <div className="parent_div flex justify-center mt-20 ">
      <div className="child_div h-3/5 w-96 py-5 flex flex-col items-center rounded-lg">
        <figure className="flex justify-center flex-col items-center">
          <img className="h-24" src={todoImage} alt="Todo" />
          <figcaption className="mt-1 text-black">
            Add Your List Here ✌
          </figcaption>
        </figure>

        <div className="additem flex justify-end items-center relative w-80 mt-4">
          <input
            className="border border-slate-400 flex-1 px-6 py-2"
            type="text"
            placeholder="✍ Add items..."
            value={inputData}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && addItem()}
          />

          <div
            className="addicon absolute right-0 mr-2 p-2 hover:bg-green-300 cursor-pointer"
            onClick={addItem}
          >
            <TiPlus />
          </div>
        </div>

        <div className="showItems mt-4 h-64 overflow-auto px-1.5">
          {items.map((elem, ind) => {
            return (
              <div
                key={ind}
                className="each_item flex justify-end items-center relative mt-2"
              >
                <span className="border border-slate-400 bg-emerald-300 hover:bg-slate-50 w-80 px-6 py-1">
                  {elem}
                </span>

                <div
                  className="absolute right-0 mr-2 hover:bg-red-300 p-2 cursor-pointer"
                  onClick={() => deleteItem(ind)}
                >
                  <FiTrash2 />
                </div>
              </div>
            );
          })}
        </div>

        {items.length > 0 && (
          <div className="showItems border border-slate-400 hover:bg-emerald-300 w-36 flex justify-center mt-4 py-1">
            <button
              className="btn text-slate-50 hover:text-slate-950"
              onClick={removeAll}
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
