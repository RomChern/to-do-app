import { useEffect, useState } from "react";
import { Counter } from "../counter/index";
import { Form } from "../form/index";
import { Header } from "../header/index";
import { List } from "../list/index";
import { TTodo } from "../../types";
import "../../styles.css";
import styles from "./app.module.css"
import { ToDoChangeToolsContext } from "../../contexts";
import { getFromLocaleStorage, removeFromLocaleStorage, setToLocaleStorage } from "../../storage";

const LOCAL_STORAGE_KEY = "todos_cache";

export function App() {
    const [todos, setTodos] = useState<Array<TTodo>>(getFromLocaleStorage<Array<TTodo>>(LOCAL_STORAGE_KEY) || [])

    const addToDo = (title: TTodo['title']) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            { title, id: self.crypto.randomUUID(), is_completed: false }
        ]);
    }

    const completeToDo = (id: TTodo['id']) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, is_completed: !todo.is_completed }
                    : todo
            )
        );
    };

    const editTitleTodo = (id: TTodo['id'], title: TTodo['title']) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, title } : todo
            )
        );
    }

    const deleteToDo = (id: TTodo['id']) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const ToDoChangeTools = {
        addToDo,
        editTitleTodo,
        deleteToDo,
        completeToDo
    }

    useEffect(() => {
        todos.length > 0 ? setToLocaleStorage(LOCAL_STORAGE_KEY, todos) : removeFromLocaleStorage(LOCAL_STORAGE_KEY)
    }, [todos])

    return (<ToDoChangeToolsContext.Provider value={ToDoChangeTools}>
        <div className={styles.wrapper}>
            <Header />
            <Counter todos_completed={todos.filter((todo) => todo.is_completed).length} total_todos={todos.length} />
            <Form />
            <List todos={todos}
            />
        </div>
    </ToDoChangeToolsContext.Provider>
    );
}
