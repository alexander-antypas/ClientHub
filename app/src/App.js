import React from "react";
import TriangleNavbar from "./components-bootstrap/TriangleNavbar";
import styles from './style.module.css';

import BottomBar from "./components-bootstrap/BottomBar";
function App(){
  return(
    <div className="App">
      <div className={styles.mainApp}>
        <TriangleNavbar/>
        <BottomBar/>
      </div>
    </div>
  )
}
export default App;
