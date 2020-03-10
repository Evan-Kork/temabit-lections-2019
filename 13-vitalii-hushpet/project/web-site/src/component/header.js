import React from "react";
import { useHistory,Link  } from 'react-router-dom';
import { useForm } from "react-hook-form"
function Head() {
	    const history = useHistory();
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
        history.push("/find:"+values.search);
    };
    function menuOpen() {
        document.getElementById("menu").style.display="block";
    }
	return(
    <div className="header w-100 col-12 row">
        <div className="w-100"></div>
        <div className="col-12 row">
            <div className="col-2"></div>
            <div className="col-6">
                <Link to="/"><img className="logo" src="logo_new.png" /></Link>
                <a href="#"><img className="img-nav" src="samolet.png" /></a>
                <a href="#"><img className="img-nav" src="kabinet.png" /></a>
                <span className="number">0-800-301-661</span>
            </div>
            <div className="col-2">
                <div className="w-100">&nbsp;</div>
                <nav className=" navbar-light bg-light">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mr-sm-2 search-input search-input" name="search" ref={register({required: 'Required',pattern: {value: /^[0-9._%+-]{2,15}$/i,message: "Лише цифри"}})} placeholder="Введіть номер відправле"/>
                        {errors.search && errors.search.message}
                    </form>
                </nav>
            </div>
            <button className="btn-menu" onClick={menuOpen}>&#926;</button>
            <div className="col-1"></div>
        </div>
    </div>
		)
}
export default Head