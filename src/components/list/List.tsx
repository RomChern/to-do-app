import { TTodo } from "../../types";
import { ListItem } from "../list-item/list-item";

type TProps = { todos: Array<TTodo> }

export function List(props: TProps) {
    const { todos } = props
    return (
        <ol className="todo_list">
            {todos.length > 0 ? (
                todos.map((todo: TTodo, index: number) => <ListItem key={index} item={todo} />)
            ) : (
                <p>Seems lonely in here, what are you up to</p>
            )}
        </ol>
    );
}
