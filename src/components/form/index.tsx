import { ToDoChangeToolsContext } from "../../contexts";
import "../../styles.css";
import style from "./form.module.css"
import { useContext, useState } from "react";

export function Form() {
    const [value, setValue] = useState("")
    const toDoChangeTools = useContext(ToDoChangeToolsContext);

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        // reset Формы
        toDoChangeTools?.addToDo(value);
        setValue("");
    };

    return (
        <form className={style.form} onSubmit={handleSubmit} >
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="write your next task"
                />
            <button disabled={value === ""}>
                <span className={style.visuallyHidden}>Submit</span>
                <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                >
                    <path
                        d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                        fillRule="nonzero"
                    />
                </svg>
            </button>
        </form>
    );
}
