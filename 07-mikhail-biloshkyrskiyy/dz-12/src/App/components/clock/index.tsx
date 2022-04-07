import React from 'react'

import Panel from '~component/clock/panel'
import Form from '~component/clock/form'

const Clock: React.FC = () => {
    return (
        <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <Panel />
            <div className='my-2'></div>
            <Form />
        </div>
    )
}

export default Clock/*  */