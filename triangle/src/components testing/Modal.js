import { createPortal } from "react-dom";
export default function Modal(){
    return createPortal(
        <div>Portal</div>, document.getElementById('modal')
    )
}