import { faSave } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React, {useState} from "react";
import s from "./TodoList.module.css"

function TodoList ({todo, setTodo}) {

    const[edit, setEdit] = useState(null)
    const[value, setValue] = useState("")

    function deleteTodo (id){
        let newTodo = [...todo].filter(item => item.id!=id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id == id) {
                item.status = !item.status
            }
            return item
        }) 
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id )
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo =[...todo].map(item =>{
            if(item.id  == id) {
                item.title = value
            }
            return item 
        })
        setTodo(newTodo)
        setEdit(null)
    }
    
    return (
    <div>
        {
            todo.map(item => (
                <div key={item.id} className={s.listTodo}>
                    {
                        edit == item.id ? 
                        <div>
                            <input className="form-control " value={value} onChange={(e) =>setValue(e.target.value)} />
                        </div> :
                        <div className={ !item.status ? s.close : ""}>{ item.title }</div>
                    }
                    {
                        edit == item.id ? 
                            <div>
                                <button onClick={ () => saveTodo(item.id)} className="btn btn-primary mt-2"><FontAwesomeIcon icon={faSave} /></button>
                            </div> :
                            <div>
                                <button className="btn btn-primary me-2 mt-2" onClick={ () => deleteTodo(item.id) }><FontAwesomeIcon icon={faTrash} /></button>
                                <button className="btn btn-primary me-2 mt-2" onClick={ () => editTodo(item.id, item.title) }><FontAwesomeIcon icon={faEdit} /></button>
                                <button className="btn btn-primary mt-2" onClick={ () => statusTodo(item.id) }>
                                    {
                                        item.status ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} />
                                    } 
                                    </button>
                            </div>
                    }
                </div>
            ))
        }
    </div>
    );
}

export default TodoList