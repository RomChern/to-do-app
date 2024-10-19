import { TTodo } from "../../types";
import { ListItem } from "../list-item/list-item";
import styles from "./list.module.css";

type TProps = {
    todos: Array<TTodo>,
    completeToDo: (itemId: TTodo["id"]) => void,
    deleteToDo: (itemId: TTodo["id"]) => void,
    editTitleToDo: (id: TTodo["id"], title: TTodo["title"]) => void
}

export function List(props: TProps) {
    const { todos, completeToDo, deleteToDo, editTitleToDo } = props

    return (
        <ol className={styles.todo_list}>
            {todos.length > 0 ? (
                todos.map((todo: TTodo, index: number) => <ListItem
                    key={index}
                    item={todo}
                    completeToDo={completeToDo}
                    deleteToDo={deleteToDo}
                    editTitleTodo={editTitleToDo} />)
            ) : (
                <p>Seems lonely in here, what are you up to</p>
            )}
        </ol>
    );
}
