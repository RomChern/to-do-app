import "../../styles.css";
import style from "./form.module.css"
import { TTodo } from "../../types";
import { useState } from "react";

type TProps = { addToDo: (title: TTodo["title"]) => void }

export function Form({ addToDo }: TProps) {
    const [value, setValue] = useState("")

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        // reset Формы
        addToDo(value);
        setValue("");
    };

    return (
        <form className={style.form} onSubmit={handleSubmit} >
            <label htmlFor="todo">
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="write your next task"
                />
            </label>
            <button disabled={value === ""}>
                <span className="visually-hidden">Submit</span>
                <svg>
                    <path d="" />
                </svg>
            </button>
        </form>
    );
}



// Почему-то VSC плохо реагирует на самописный svg,
// всё норм при копировании
