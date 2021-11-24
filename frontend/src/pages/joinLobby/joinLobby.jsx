import React from "react";

function Join(){
    return <div>
    <form>
            <label>
                Name:
                <input type="text" name = "name1" />
                <input type = "text" name = "name2"/>
            </label>
            <button type = "submit" value = "Join"/>
    </form>
        
    </div>
}

export default Join;