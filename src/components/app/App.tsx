
import { useState } from "react";
import { Counter } from "../counter/counter";
import { Form } from "../form/Form";
import { Header } from "../header/Header";
import { List } from "../list/List";
import { TTodo } from "../../types";
import "../../styles.css";

export function App() {
    const [todos, setTodos] = useState<Array<TTodo>>([])

    const completeToDo = (id: TTodo['id']) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, is_completed: !todo.is_completed }
                    : todo
            )
        );
    };

    const addToDo = (title: TTodo['title']) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            { title, id: self.crypto.randomUUID(), is_completed: false }
        ]);
    }

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

    return (
        <div className="wrapper">
            <Header />
            <Counter todos_completed={todos.filter((todo) => todo.is_completed).length} total_todos={todos.length} />
            <Form addToDo={addToDo} />
            <List todos={todos}
                completeToDo={completeToDo}
                deleteToDo={deleteToDo}
                editTitleToDo={editTitleTodo} />
        </div>
    );
}
