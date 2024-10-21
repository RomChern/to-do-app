import { createContext } from "react";
import { TTodo } from "../types";

export const ToDoChangeToolsContext = createContext<{
    addToDo: (title: TTodo["title"]) => void,
    editTitleTodo: (id: TTodo["id"], title: TTodo["title"]) => void,
    deleteToDo: (id: TTodo["id"]) => void,
    completeToDo: (id: TTodo["id"]) => void,
} | null>(null);