import React, { useState } from 'react'

export const AddTodo = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = ()=>{
    }

    return (
        <div className= "container">
            <h2 className="text-center my-3">ADD TODOS</h2>
            <form onSubmit={submit}>
                <div className="form-group my-3">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="title">Todo Desciption</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-success px-3" >ADD</button>
            </form>
        </div>
    )
}
