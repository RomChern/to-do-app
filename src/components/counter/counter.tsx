type TProps = { todos_completed: number, total_todos: number }

export function Counter({ todos_completed, total_todos }: TProps) {
    return (
        <section>
            <div>
                <p>Task Done</p>
                <p>Keep it up</p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    );
}


//Вопрос по записи типизации, а именно как выглядит типизация
// вне параметров функции