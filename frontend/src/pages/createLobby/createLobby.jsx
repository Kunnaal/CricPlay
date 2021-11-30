import React from "react";

function Create() {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button type="submit" value="Create">
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
