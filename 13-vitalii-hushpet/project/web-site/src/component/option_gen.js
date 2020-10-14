import React from 'react';

function OptGen(todo) {
    return (<option value={todo.todo.title_ua}>{todo.todo.title_ua}</option>
    )
}
export default OptGen