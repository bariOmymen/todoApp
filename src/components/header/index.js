
import React from "react";
import "./header.css";
import { swicthForm } from "../../actions/formActions";
import {useDispatch, useSelector} from "react-redux"; 
const Header = ({title, handleAdd, text}) => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state => state.form.isOpen ));
    console.log(isOpen);
    return (   
        <div className='header'>
        <h1> {title} </h1> 
        
       <button onClick={() => dispatch(swicthForm())} className="form_switch">{isOpen ? "Close" : "Add Task"}</button>
        </div>
       
        )
}
Header.defaultProps = {
    title: "default hello"
}

export default Header;