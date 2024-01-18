import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

/**
 * A controlled form to create new a Box in BoxList
 *
 * Props:
 * - add: function - creates a new Box
 *
 * State:
 * - FIXME: formData: {example of expected form fields}
 *
 * App -> BoxList -> NewBoxForm
 */

function NewBoxForm({ add }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  console.log("NewBoxForm rendered with: ", formData)

  // FIXME: docstring
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  // FIXME: docstring
  function handleSubmit(evt) {
    evt.preventDefault();

    // TODO: pay special attention to formData.height and formData.width
    // coercing into correct type often is done in the handleSubmit to ensure
    // data is in expected type
    add(formData);
    setFormData({ height: "", width: "", backgroundColor: "" });
  }

  return (
    <div className="NewFormBox">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="NewFormBox-height">Height (in px): </label>
          <input
            id="NewBoxForm-height"
            onChange={handleChange}
            name="height"
            value={formData.height}
          />
        </div>
        <div>
          <label htmlFor="NewFormBox-width">Width (in px): </label>
          <input
            id="NewBoxForm-width"
            onChange={handleChange}
            name="width"
            value={formData.width}
          />
        </div>
        <div>
          <label htmlFor="NewFormBox-backgroundColor">Background Color: </label>
          <input
            id="NewBoxForm-backgroundColor"
            onChange={handleChange}
            name="backgroundColor"
            value={formData.backgroundColor}
          />
        </div>
        <button className="NewFormBox-submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default NewBoxForm;