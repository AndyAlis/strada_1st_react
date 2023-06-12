import React from "react"
import "./modal.css"

export default function Modal({isActive, showActive, children}) {

    // console.log(active)

    return (
        <div className={isActive ? "modal_window modal_active" : "modal_window"} onClick={()=>showActive(false)}>
            <div className="modal_container" onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
            
        </div>
    )
}