import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import iRootState from '~interface/iRootState'
import { actionMessage } from '~action/actionMessage'
import { getClock, getMessage } from '~selectors'
import { FakeDate } from '~publick/index'
import classes from './index.module.scss'

const mapState = (state: iRootState) => ({
    clock: getClock(state),
    message: getMessage(state)
})

const mapDispatch = {
    actionMessage
}

const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const _Date = new FakeDate()
const Panel: React.FC<Props> = (props: Props) => {
    const [time, setTime] = useState(_Date.FormatTime.split(''))
    const [date, setDate] = useState(_Date.FormatDate.split(''))
    const [stop, setStop] = useState(false)

    /* useEffect_1 checks the data entered by the user and sets, 
    if necessary, to be activated only when the data is changed. */
    useEffect(() => {
        try {
            _Date.setFakeDateTime(props.clock)
        } catch (err) {
            props.actionMessage(err)
        }
    }, [props.clock])
    /* useEffect_2 starts when you start the program,
    takes the next step in time, sets the data in the 
    local states, deletes the interval when leaving. */
    useEffect(() => {
        const time = setInterval(() => {
            if (!stop) {
                _Date.now()
                setTime(_Date.FormatTime.split(''))
                setDate(_Date.FormatDate.split(''))
            }
        }, 1000)
        return () => clearInterval(time)
    }, [stop])

    return (
        <div>
            <p className='h3 text-center'>{props.message.text}</p>
            <p className='h5 text-center'>{`Количество милисикунд: ${_Date.countMilseconds()}`}</p>
            <button type="button" className="btn btn-danger w-100" onClick={() => {
                setStop(!stop)
            }}>{!stop ? <p className='h6'>Stop</p> : <p className='h6'>Start</p>}</button>
            <div className="my-5"></div>
            <div className='d-flex mb-1'>
                {time.map((value, index) => <Part key={index}>{value}</Part>)}
            </div>
            <div className='d-flex'>
                {date.map((value, index) => <Part key={index}>{value}</Part>)}
            </div>
        </div>)
}

export default connector(Panel)
const Part: React.FC = (props) => {
    return (
        <div className={classes.part}>
            <div className={classes.labelTop}></div>
            <div className={classes.juncture}></div>
            <div className={classes.labelBottom}></div>
            <p className={classes.number}>{props.children}</p>
        </div>
    )
}