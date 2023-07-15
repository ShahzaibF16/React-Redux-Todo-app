import React, { useState } from "react";
import { connect } from "react-redux";
import { AddTodos } from "../config/Store/Action/Todos";

const Todos = (props) => {
    const [user, setuser] = useState("");
    const [todos, setTodos] = useState([]);
    const [editingTodo, setEditingTodo] = useState(null);
    const [editedText, setEditedText] = useState("");

    const handleSubmit = () => {
        const newTodo = {
            id: new Date().getTime(),
            text: user
        };

        setTodos([...todos, newTodo]);
        setuser("");
    };

    const handleEdit = (id) => {
        const todo = todos.find((todo) => todo.id === id);
        if (todo) {
            setEditingTodo(id);
            setEditedText(todo.text);
        }
    };

    const handleUpdate = () => {
        const updatedTodos = todos.map((todo) =>
            todo.id === editingTodo ? { ...todo, text: editedText } : todo
        );
        setTodos(updatedTodos);
        setEditingTodo(null);
        setEditedText("");
    };

    return (
        <>
            <input
                type="text"
                value={user}
                onChange={(e) => setuser(e.target.value)}
            />
            <button onClick={() => handleSubmit()}>Add Todos</button>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {editingTodo === todo.id ? (
                        <>
                            <input
                                type="text"
                                value={editedText}
                                onChange={(e) => setEditedText(e.target.value)}
                            />
                            <button onClick={() => handleUpdate()}>Update</button>
                        </>
                    ) : (
                        <>
                            <h6>{todo.text}
                                <button onClick={() => handleEdit(todo.id)}>Edit</button>
                            </h6>
                        </>
                    )}
                </div>
            ))}
        </>
    );
};

const mapStateToProps = (state) => ({
    todo: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    add_todo: (user) => dispatch(AddTodos(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
