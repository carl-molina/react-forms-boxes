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
 * - boxes: Box[] - [{ id, width, height, backgroundColor }]
 *
 * App -> BoxList -> {Box, NewBoxForm}
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  console.log("BoxList rendered with: ", boxes);

  /** Add a box to state - { id, width, height, backgroundColor } */
  function addBox(box) {
    const newBox = { ...box, id: uuid() };
    setBoxes(curr => [...curr, newBox]);
  }

  /** Remove a box that matches an ID */
  function removeBox(id) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
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