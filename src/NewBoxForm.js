import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

/**
 * A controlled form to create new a Box in BoxList
 *
 * Props:
 * - add: function - creates a new Box
 *
 * State:
 * - none
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

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    add(formData);
    setFormData({ height: "", width: "", backgroundColor: "" });
  }

  return (
    <div className="NewFormBox">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="NewFormBox-height">Height: </label>
          <input
            id="NewBoxForm-height"
            onChange={handleChange}
            name="height"
            value={formData.height}
          />
        </div>
        <div>
          <label htmlFor="NewFormBox-width">Width: </label>
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