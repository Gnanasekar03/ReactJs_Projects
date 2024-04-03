import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiselect, setEnableMultiselect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  const handleMultiSelection = (getCurrentId) => {
    const copymultiple = [...multiple];
    const findIndexOfCurrentId = copymultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copymultiple.push(getCurrentId);
    else copymultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(copymultiple);
    console.log(findIndexOfCurrentId);
  };
  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiselect(!enableMultiselect)}>
        EnableMultiSelection
      </button>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataitem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiselect
                    ? () => handleMultiSelection(dataitem.id)
                    : () => handleSingleSelection(dataitem.id)
                }
                className="title"
              >
                <h3>{dataitem.question}</h3>
                <span>+</span>
              </div>
              
              {enableMultiselect
                ? multiple.indexOf(dataitem.id) !== -1 && (
                    <div className="content">{dataitem.answer}</div>
                  )
                : selected === dataitem.id && (
                    <div className="content">{dataitem.answer}</div>
                  )}
              {/* {selected === dataitem.id || multiple.indexOf(dataitem.id) !== -1 ? (
                <div className="content">{dataitem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data Found.!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
