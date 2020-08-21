import React, { useState, useCallback } from 'react';
import { instance, ServiceProps } from '../../source/service';

const setValue = (name: ServiceProps, value: string) => {
    console.log("setValue", name, value);
    instance[name] = value;
};

function Reactive() {
    const [state, setState] = useState({} as any);

    const onChange: React.FormEventHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const elem = event.target;
            setValue(elem.name as ServiceProps, elem.value);
            setState({});
        },
        []
    );

    const { firstName, lastName, email } = instance;
    //console.log(email);
    return (
        <div className="row">
            <form onChange={onChange}>
                <div>
                    <label>First Name
                        <input name='firstName' value={firstName || ''} />
                    </label>
                </div>
                <div>
                    <label>Last Name
                        <input name='lastName' value={lastName || ''} />
                    </label>
                </div>
                <div>
                    <label>Email
                        <input name='email' value={email || ''} />
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Reactive;
