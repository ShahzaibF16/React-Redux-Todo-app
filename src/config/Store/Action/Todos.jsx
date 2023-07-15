
const AddTodos = (user)=>{
    return((dispatch)=>{
        dispatch({
            type:"Add_Todo",
            data:user
        })
    })
}

export {AddTodos}