import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import classes from './Todolist.module.css';
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List";
const TodoList = () => {
    const [ isShow, setIsShow ] = useState(false);
    const [ newTitle, setNewTitle ] = useState('');
    const list = [
        {
            id:1 , 
            title: 'coding',
        },
        {
            id:2,
            title: 'eat',
        },
        {
            id:3,
            title: 'sleep',
        }
    ]
          
    const handleShow = () => setIsShow(!isShow);
    const handleChangeText = (text) => {
        setNewTitle(text);
    }

    return (
        <div className={classes.wrapper}>
            <Button onClick={handleShow}>
                Добавить
            </Button>
            <Input/>
            { isShow && <Modal handleShow={handleShow}>
                <p>{newTitle}</p> 
                <Input/>
            <Button>
                Добавить
            </Button>
            <button onClick={handleShow}>Close</button>
            </Modal> }
            <List list={list} />
        </div>
    )
}


export default TodoList;