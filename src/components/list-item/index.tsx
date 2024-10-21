import { useState } from "react";
import { TTodo } from "../../types";
import styles from "./list-item.module.css";
import { ListItemEditingForm } from "../list-Item-editing-form";
import { ListItemFacade } from "../list-Item-facade";

type TProps = {
    item: TTodo,
}

export const ListItem = ({ item }: TProps): React.JSX.Element => {
    const [editing, setEditing] = useState(false);

    const finishEditing = () => {
        setEditing(false);
    }
    const startEditing = () => {
        setEditing(true);
    }
    return (
        <li id={item.id} className={styles.listItem} >
            {editing ? (
                <ListItemEditingForm onFinishEditing={finishEditing} item={item} />
            ) : (
                <>
                    <ListItemFacade onStartEditing={startEditing} item={item} />
                </>
            )}
        </li>
    );
}
