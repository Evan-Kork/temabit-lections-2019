import React from "react";
import { Link } from 'react-router-dom';

function CreateTable(todo) {
	var link = "department_info:" +todo.todo.number
return (
<tr>
    <td>{todo.todo.locality}</td>
    <td><Link to={link}>{todo.todo.adress}</Link></td>
    <td>{todo.todo.format}</td>
</tr>
)
}
export default CreateTable