import React from 'react'

export const TodoItem = (props) => {
    return (
        <div className="mx-6 my-3">
            <h5>{props.todo.title}</h5>
            <p>{props.todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>delete</button>
            <hr/>
        </div>
    )
}
