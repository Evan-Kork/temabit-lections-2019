import React from "react";
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form"

function Search(text) {
    const history = useHistory();
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
        var i = text.text;
        console.log(i)
        history.push("/"+text.text+":" + values.search);

    };
    return (
        <nav className=" navbar-light bg-light">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control mr-sm-2 " name="search" ref={register({required: 'Required',pattern: {value: /^[A-Z А-Я0-9._%+-.,()ІЇ]{2,99}$/i,message: "Помилка"}})} placeholder="Введіть запит"/>
                 {errors.search && errors.search.message}
            </form>
        </nav>


    )
}
export default Search