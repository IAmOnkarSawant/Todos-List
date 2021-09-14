import React from 'react'
import { TodoItem } from '../components/todoItem'

export const Todos = (props) => {
    return (
        <div className="container">
            <h2 className="text-center my-3">MY ALL TODOS</h2>
            { 
                props.allTodos.length === 0? <h5 className="text-center">no todos to display</h5>:
                props.allTodos.map((todo)=>{
                    return <TodoItem todo = {todo} key = {todo.sno} onDelete={props.onDelete}/>
                })
            }
        </div>
    )
}
