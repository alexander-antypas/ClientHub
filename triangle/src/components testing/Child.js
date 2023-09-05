import React from "react"
function Child({count}){
    return(
        <div>
            This is child
            <h1>Child count is: {count}</h1>
        </div>
    )
}
export default React.memo(Child)