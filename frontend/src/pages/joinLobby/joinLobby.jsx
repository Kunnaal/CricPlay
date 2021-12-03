import React from "react";
import Background from "./Resources/Images/BG_Image.jpg";

var sectionStyle = {
  backgroundRepeat: "no-repeat",
  backgroundColor: "#200049",
  backgroundSize: "120vh 100vh",
  height: "100vh",
  backgroundImage: `url(${Background})`,
};

function Join() {
  console.log("Kaam 25");
  return (
    <div style={sectionStyle}>
      <form
        style={{
          color: "white",
          position: "absolute",
          left: "70%",
          top: "50%",
        }}
      >
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
