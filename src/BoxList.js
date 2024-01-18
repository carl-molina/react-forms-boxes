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
 * - boxes: {TODO: provide example box} - the list of boxes
 *
 * App -> BoxList -> {Box, NewBoxForm}
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  console.log("BoxList rendered with: ", boxes)

  // FIXME: docstring
  function addBox(box) {
    const newBox = { ...box, id: uuid() };
    setBoxes(curr => [...curr, newBox]);
  }

  // FIXME: docstring
  function removeBox(id) {
    // TODO: could be more descriptive with variable names curr = boxes, x = box
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