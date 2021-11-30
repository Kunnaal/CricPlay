import React from "react";

function Join() {
  console.log("Kaam 25");
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" name="name1" />
          <input type="text" name="name2" />
        </label>
        <button type="submit" value="Join">
          Join
        </button>
      </form>
    </div>
  );
}

export default Join;
