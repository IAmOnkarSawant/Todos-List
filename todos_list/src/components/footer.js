import React from 'react'

export const Footer = () => {
    const myStyle = {
        "padding" : "10px",
        "marginTop" : "60vh"
    }
    return (
        <div className = "bg-dark text-light " style = {myStyle}>
             <p className = "text-center " > 
                Copyright &copy; MytodoList.com
             </p>
        </div>
    )
}
