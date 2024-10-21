
import { TTodo } from "../../types";
import { ListItem } from "../list-item/index";
import styles from "./list.module.css";

type TProps = {
    todos: Array<TTodo>,
}

export function List({ todos }: TProps) {
    return (
        <ol className={styles.list}>
            {todos.length > 0 ? (
                todos.map((todo: TTodo, index: number) => <ListItem
                    key={index}
                    item={todo}
                />)
            ) : (
                <p>Seems lonely in here, what are you up to</p>
            )}
        </ol>
    );
}
