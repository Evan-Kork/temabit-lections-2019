import * as React from 'react';
import MyForm from './form';
import ShowDataForm from './show-data-form';
import { EventEmitter } from 'events';

const NewTest: React.FC = () => {
    const emitter = new EventEmitter()
    React.useEffect (()=>{
        (window as any).dataForm ={
            // name:'',
            // sourname:'',
            // email:'',
            // phone:'',
            emitter 
        }
    },[])
    
    console.log("wndow", window)
    return (
        <div className="d-flex flex-row justify-content-md-center">
            <MyForm />
            <ShowDataForm />
        </div>
    )
}

export default NewTest