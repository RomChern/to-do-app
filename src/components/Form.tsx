function Form() {
    const handleSubmit = (event: any) =>{
        event.preventDefault();
        // reset Формы
        event.target.reset();
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input 
                type="text"
                name="todo"
                id="todo"
                placeholder="write your next task"
                />
            </label>
            <button>
                <span className="visually-hidden">Submit</span>
                <svg>
                    <path d="" />
                </svg>
            </button>
        </form>
    );
}

export default Form;


// Почему-то VSC плохо реагирует на самописный svg, 
// всё норм при копировании