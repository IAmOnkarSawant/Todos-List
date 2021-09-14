import './App.css';
import Navbar from "./components/Navbar"
import {Todos} from "./components/todos"
import {Footer} from "./components/footer"
import {AddTodo} from "./components/addTodo"
import React, { useState } from 'react';


function App() {

  const onDelete = (todo)=>{

    setallTodos(allTodos.filter((e)=>{
      return todo !== e;
    }))
  }

  const [allTodos, setallTodos] = useState([
      {
        sno:1,
        title: "Do cp",
        desc : "goto codeforces and compete in contest"
      },
      {
        sno:2,
        title: "Do DSA",
        desc : "goto gfg and solve questions"
      },
      {
        sno:3,
        title: "Do gate",
        desc : "goto rbr and watch lectures"
      }
  ]);
  return (
     <>
      <Navbar title="Onkar's List" searchbar={true}/>
      <AddTodo/>
      <Todos allTodos = {allTodos} onDelete = {onDelete}/>
      <Footer/>
     </>
  );
}

export default App;
