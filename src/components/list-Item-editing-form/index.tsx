import { useContext, useEffect, useRef, useState } from "react";
import { ToDoChangeToolsContext } from "../../contexts";
import { TTodo } from "../../types";
import styles from "./list-item-editing-form.module.css"

type TProps = {
    item: TTodo
    onFinishEditing: () => void,
}

export function ListItemEditingForm({ onFinishEditing, item }: TProps) {
    const toDoChangeTools = useContext(ToDoChangeToolsContext);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState(item.title);

    const finishEditing = () => {
        toDoChangeTools?.editTitleTodo(item.id, inputValue)
        onFinishEditing();
    }

    const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        finishEditing();
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current?.focus();
            inputRef.current?.setSelectionRange(
                inputRef.current?.value.length,
                inputRef.current?.value.length
            );
        }
    }, []);

    return <form className={styles.editForm} onSubmit={handleInputSubmit}>
        <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={finishEditing}
        />
    </form>
}