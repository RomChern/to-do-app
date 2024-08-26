
function TODOHero ({todos_completed, total_todos}:
    {todos_completed: number, total_todos:number }) {
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
export default TODOHero;


//Вопрос по записи типизации, а именно как выглядит типизация
// вне параметров функции