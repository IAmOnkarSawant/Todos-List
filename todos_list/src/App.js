import "./App.css";
import Navbar from "./components/Navbar";
import { Todos } from "./components/todos";
import { Footer } from "./components/footer";
import { AddTodo } from "./components/addTodo";
import { About } from "./components/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("allTodos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("allTodos"));
  }

  const onDelete = (todo) => {
    setallTodos(
      allTodos.filter((e) => {
        return todo !== e;
      })
    );
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  };

  const addTodo = (title, desc) => {
    let snoo;
    if (allTodos.length === 0) {
      snoo = 0;
    } else {
      snoo = allTodos[allTodos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: snoo,
      title: title,
      desc: desc,
    }
    setallTodos([...allTodos, mytodo]);

  };
  const [allTodos, setallTodos] = useState(initTodo);
  
  useEffect(() => {
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <>
    
    <Router>
      <Switch>
        <Route exact path="/" render={()=>{
            return(
              <>
                <Navbar title="Onkar's List" searchbar={true} />
                <AddTodo addTodo={addTodo} />
                <Todos allTodos={allTodos} onDelete={onDelete} />
                <Footer />
              </>)
        }}> 
        </Route>
        <Route exact path="/About">
            <Navbar title="Onkar's List" searchbar={true} />
            <About/>
            <Footer />
        </Route>
      </Switch>
    </Router>
    
    </>
  );
}

export default App;
