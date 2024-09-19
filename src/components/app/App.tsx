
import { useState } from "react";
import { Counter } from "../counter/counter";
import {Form} from "../form/Form";
import {Header} from "../header/Header";
import {List} from "../list/List";
import { TTodo } from "../../types";

export function App() {
    const [todos, setTodos] = useState<Array<TTodo>>([])
    return (
        <div>
            <Header />
            <Counter todos_completed={todos.filter((todo) => todo.is_completed).length} total_todos={todos.length} />
            <Form />
            <List todos={todos} />
        </div>
    );
}
