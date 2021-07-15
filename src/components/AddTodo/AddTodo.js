import React, {useState} from "react";
import "./AddTodo.css"
import { faSave } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function AddTodo ({todo, setTodo}) {

    const [value, setValue] = useState("")

    function saveTodo() {
        setTodo(
            [...todo, {
                id: 22,
                title: value,
                status: true
            }]
        )
        setValue("")
    }
    return (
        <div className="row">
            <div className="col addTodo mt-3">
                <input className="form-control w-100" placeholder="Введите задачу" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={saveTodo} className="btn btn-primary ms-2"><FontAwesomeIcon icon={faSave} /></button>
            </div>
            
        </div>
    );
}

export default AddTodo