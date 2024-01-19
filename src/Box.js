import React from 'react';

/**
 * An individual box with styling from NewBoxForm
 *
 * Props:
 * - id: UUID
 * - width: number - in px
 * - height: number - in px
 * - backgroundColor: string - color string
 * - remove: function - remove function from parent component
 *
 * State:
 * - None
 *
 * App -> BoxList -> Box
 */

function Box({ id, width, height, backgroundColor, remove }) {

  console.log("Box rendered with id: ", id);

  /** Remove a box */

  function handleRemove() {
    remove(id);
  }

  return (
    <div className="Box">
      <div
        className="Box-box"
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: backgroundColor
        }}
        id={id}
      />
      <button className="Box-removeBtn" onClick={handleRemove}> X </button>
    </div>
  );
}

export default Box;