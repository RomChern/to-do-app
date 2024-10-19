import { useState, useRef, useEffect } from "react";
import { TTodo } from "../../types";
import style from "./list-item.module.css";

type TProps = {
    item: TTodo,
    completeToDo: (itemId: TTodo["id"]) => void,
    deleteToDo: (itemId: TTodo["id"]) => void,
    editTitleTodo: (id: TTodo["id"], title: TTodo["title"]) => void
}

export const ListItem = (props: TProps): React.JSX.Element => {
    const { item, completeToDo, deleteToDo, editTitleTodo } = props
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        completeToDo(item.id)
    }

    const handleDeleteClick = () => {
        deleteToDo(item.id)
    }

    const handleEdit = () => {
        setEditing(true);
    }

    const handleInputBlur = () => {
        setEditing(false);
    }

    const handleInputSubmit = (event: any) => {
        event.preventDefault();
        setEditing(false);
        editTitleTodo(item.id, event.target["edit-todo"].value)
    };

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current?.focus();
            inputRef.current?.setSelectionRange(
                inputRef.current?.value.length,
                inputRef.current?.value.length
            );
        }
    }, [editing]);

    return (
        <li id={item?.id} className={style.todoItem} >
            {editing ? (
                <form className="edit-form" onSubmit={handleInputSubmit}>
                    <label htmlFor="edit-todo">
                        <input
                            ref={inputRef}
                            type="text"
                            name="edit-todo"
                            id="edit-todo"
                            defaultValue={item?.title}
                            onBlur={handleInputBlur}
                        />
                    </label>
                </form>
            ) : (
                <>
                    <button className={style.todoItemsLeft} onClick={handleClick}>
                        <svg fill={item.is_completed ? "#22C55E" : "#0d0d0d"}>
                            <circle
                                cx="11.998"
                                cy="11.998"
                                fillRule="nonzero"
                                r="9.998"
                            />
                        </svg>
                        <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>
                            {item?.title}
                        </p>
                    </button>
                    <div className={style.todoItemsRight}>
                        <button onClick={handleEdit}>
                            <span className={style.visuallyHidden}>Edit</span>
                            <svg>
                                <path d="" />
                            </svg>
                        </button>
                        <button onClick={handleDeleteClick}>
                            <span className={style.visuallyHidden}>Delete</span>
                            <svg>
                                <path d="" />
                            </svg>
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}