import React from 'react'

export const TodoItem = (props) => {
    const mystyle = {
        paddingLeft:"2%"
    }
    return (
        <>
        <div className=" my-3" style = {mystyle}>
            <h5>{props.todo.title}</h5>
            <p>{props.todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>delete</button>
        </div>
        <hr/>
        </>
    )
}
