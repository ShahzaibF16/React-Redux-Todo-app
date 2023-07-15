import React, { useState } from "react";
import { connect } from "react-redux";
import { AddTodos } from "../config/Store/Action/Todos";


const Todos = (props) => {
    let [user, setuser] = useState("")


    const handleSubmit = () => {
        console.log(user)
        props.add_todo(user)
    }

    return (
        <>
            <input type="text" value={user} onChange={(e) => setuser(e.target.value)} />
            <button onClick={() => handleSubmit()}>Add Todos</button>
            {
                props.todo.map((v, i) => {
                    return (
                        <h1 key={i}>{v}</h1>
                    )
                })
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    todo: state.todos
})

const mapdispatchToprops = (dispatch) => ({
    add_todo: (user) => dispatch(AddTodos(user))
})

// export default Todos
export default connect(mapStateToProps, mapdispatchToprops)(Todos)