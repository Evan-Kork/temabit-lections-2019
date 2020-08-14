import * as React from 'react';


const ShowDataForm: React.FC = () => {
    const [state, setState]=React.useState({name:'', surname:'', email:'', phone:''})
    React.useEffect(()=>{
        (window as any).dataForm.emitter.on('emitName', (value)=>{
            setState(value);
        })
    },[])
    return (
    //    () 
        <div>
            {/* <div>{`Name ${state.name}`}</div> */}
            {/* <div>{`Surname ${state.surname}`}</div> */}
            {/* <div>{`Email ${state.email}`}</div> */}
            {/* <div>{`Phone ${state.phone}`}</div> */}
        </div>
    )
};

export default ShowDataForm