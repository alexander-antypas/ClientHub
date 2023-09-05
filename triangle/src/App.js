import React from "react";
import TriangleNavbar from "./components-bootstrap/TriangleNavbar";
import styles from './style.module.css';
function App(){
  return(
    <div className="App">
      <div className={styles.mainApp}>
        <TriangleNavbar></TriangleNavbar>
      </div>
    </div>
  )
}
export default App;
