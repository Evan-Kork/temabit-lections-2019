import React, { useState, useEffect } from 'react';
import { getChanges, TestService } from '../../source/service';

function ReactiveView(): React.ReactElement {
    const [state, setState] = useState({} as TestService);

    useEffect(
        () => getChanges((args: any) => setState(args)),
        [],
    )
    
    const { firstName, lastName, email } = state;
    return (
        <div className="container">
                <div className="row">
                    <div>First Name</div>
                    <div>{firstName}</div>
                </div>
                <div className="row">
                    <div>Last Name</div>
                    <div>{lastName}</div>
                </div>
                <div className="row">
                    <div>Email</div>
                    <div>{email}</div>
                </div>
        </div>
    )
}

export default ReactiveView;
