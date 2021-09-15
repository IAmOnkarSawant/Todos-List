import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Description can not be blank");
        }
        else
        props.addTodo(title, desc);

        setTitle("");
        setDesc("");
    }

    return (
        <div className= "container">
            <h2 className="text-center my-3">ADD TODOS</h2>
            <form onSubmit={submit}>
                <div className="form-group my-3">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} className="form-control" onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp" />
                </div>
                <div className="form-group my-3 ">
                    <label htmlFor="desc">Todo Desciption</label>
                    <input type="text" value={desc} className="form-control " onChange={(e)=>{setDesc(e.target.value)}} id="desc" />
                </div>
                <button type="submit" className="btn btn-success px-3" >ADD</button>
            </form>
        </div>
    )
}
