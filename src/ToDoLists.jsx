import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const ToDoLists = ({ task, setWorks, setInputList, setButton, setEdit }) => {

    const deleteFunction = (id) => {
        const isConfirm = window.confirm("Did You Want To Delete This Task. 😞");
        if (isConfirm) {
            const filterTasks = task.filter((item) =>
                id != item.id
            )
            setWorks(filterTasks)
            toast.error("Your Task has been Delete. 😭");
        }
    }

    const editfunction = (id) => {
        const findTask = task.find((element) => {
            return id === element.id;
        });
        setInputList(findTask.title);
        setButton(true);
        setEdit(id);
    }

    const taskDone = (id) => {
        setWorks(task.map((completTask) =>
            completTask.id === id ? { ...completTask, complete: !completTask.complete } : completTask
        ))
        toast("Your Task has been Completed. 😎");
    };

    return (
        <ul>
            {task.map((taskList) => (

                <div className="output">
                    <input type="checkbox" className="check" checked={taskList.complete} onClick={() =>
                        taskDone(taskList.id)}
                    />
                    <li style={{ textDecoration: taskList.complete ? 'line-through' : 'none' }}
                        key={taskList.id}>
                        {taskList.title}
                    </li>
                    <div className="options">
                        <i className="gg-edit-markup edit fec"
                            style={{ display: taskList.complete ? 'none' : 'block' }}
                            onClick={() => editfunction(taskList.id)}
                        ></i>
                        <i className="gg-close delete fec"
                            onClick={() => deleteFunction(taskList.id)}
                        ></i>
                    </div>
                </div>

            ))}
        </ul>
    );
};

export default ToDoLists;