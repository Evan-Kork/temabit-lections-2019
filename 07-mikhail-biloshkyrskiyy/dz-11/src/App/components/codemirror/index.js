import React, { Component } from 'react'

import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css';

import { Button } from 'react-bootstrap'

import Execute from 'components/codemirror/execute'

class Codemirror extends Component {

    constructor() {
        super()

        this.state = {
            code: '//Code',
            result: '//Code'
        }

        this.handleUpdateCode = this.handleUpdateCode.bind(this)
        this.handleUpdateResult = this.handleUpdateResult.bind(this)
        this.handleGetValue = this.handleGetValue.bind(this)
        this.handleResetCode = this.handleResetCode.bind(this)
    }

    handleUpdateCode(newCode) {
        this.setState(() => {
            return { code: newCode }
        })
    }

    handleUpdateResult() {
        this.setState(state => {
            return { result: state.code }
        })
    }

    handleGetValue() {
        this.setState((state, props) => {
            if (state.code === '//Code' && props.example) {
                return { code: props.example }
            }
        })
    }

    handleResetCode() {
        this.setState(() => {
            return { result: '//Code' }
        })
    }

    componentWillMount() {
        this.handleGetValue()
    }

    render() {

        const options = {
            lineNumbers: true
        }

        return (
            <>
                <CodeMirror value={this.state.code} onChange={this.handleUpdateCode} options={options} />
                <div className='d-md-flex my-3'>
                    <div className='d-flex justify-content-center flex-column'>
                        <Button variant="outline-danger" onClick={this.handleUpdateResult}>Run ></Button>
                        <div className='my-2'></div>
                        <Button variant="outline-danger" onClick={this.handleResetCode}>Reset></Button>
                    </div>
                    <div className='mx-2'></div>
                    <div className='my-2 my-md-0'></div>
                    <Execute code={this.state.result} />
                </div>
            </>
        )
    }
}

export default Codemirror