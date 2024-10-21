import "../../styles.css";
import styles from "./counter.module.css"

type TProps = { todos_completed: number, total_todos: number }

export function Counter({ todos_completed, total_todos }: TProps) {
    return (
        <section className={styles.section}>
            <div>
                <p className={styles.textLarge}>Task Done</p>
                <p className={styles.textSmall}>Keep it up</p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    );
}
