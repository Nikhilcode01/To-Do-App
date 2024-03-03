import React, { useState } from "react";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ToDoLists from "./ToDoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [works, setWorks] = useState([]);

  const [button,setButton] = useState(false);
  const [edit, setEdit] = useState(null);

  //Features Section :

  const addWork = () => {
    if(button){
      setWorks(works.map((newElement) => {
        if(newElement.id === edit){
          return{...newElement,title:inputList}
        }
        return newElement;
      }))
      toast.info("Your Task has been Updated. 🥰");
      setButton(false);
      setInputList("");
      setEdit(null);
    }else{
      if (inputList.trim() !== ""){
        setWorks([...works, {id:Date.now(),title:inputList,complete:false}]);
        setInputList("");
        toast.success("Your Task is added in your To-Do List 🥳");
      }
    }
  };

  return (
    <>
      <div className="main_box">
        <div className="center_box">
          <div className="heading_box">
            <h1>To-Do List 📝</h1>
          </div>
          <div className="input_box">
            <input
              type="text"
              value={inputList}
              placeholder="Add your task"
              className="input"
              onChange={(event) => setInputList(event.target.value)}
            />
            {
              button?<button className="add_btn" onClick={addWork}> Update </button>:
              <button className="add_btn" onClick={addWork}> Add </button>
            }
          </div>
          <div className="output_section">
            <ToDoLists task={works} setWorks={setWorks} 
            setInputList={setInputList} setButton={setButton}
            setEdit={setEdit}/>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default App;
