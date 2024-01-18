import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

/**
 * A container to manage a list of boxes
 *
 * Props:
 * - None
 *
 * State:
 * - boxes: the list of boxes
 *
 * App -> BoxList -> Box AND NewBoxForm
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  console.log("BoxList rendered with: ", boxes)

  function addBox(box) {
    const newBox = { ...box, id: uuid() };
    setBoxes(curr => [...curr, newBox]);
  }

  function removeBox(id) {
    setBoxes(curr => curr.filter(x => x.id !== id));
  }

  return (
    <div>
      <NewBoxForm add={addBox} />
      {boxes.map(({ id, width, height, backgroundColor }) =>
      (<Box
        key={id}
        id={id}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        remove={removeBox}
      />))}

    </div>
  );
}


export default BoxList;