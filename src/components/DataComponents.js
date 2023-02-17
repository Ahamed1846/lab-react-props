import React from 'react';
import elephant from "../images/elephant.jpeg";
// import App from "../App.js";
import AppClass from "../AppClass.js";
/* change the above line - for interchaning between App and AppClass */
function DataComponents() {
  return (
    <div id="root">
      {/* <App img={elephant}/> */}
        <AppClass img={elephant}/>
    </div>
  );
}

export default DataComponents;
