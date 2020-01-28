import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import { fetchMethodArray } from 'actions'
import { getMethodArray } from 'selectors'

import Menu from 'components/menu'
import Article from 'components/article'

class Layout extends Component {

    componentDidMount() {
        this.props.fetchMethodArray()
    }

    render() {
        const { list } = this.props

        return (
            <div className={'container-fluid'}>
                <Row>
                    <Col sm={12} md={4} lg={3}>
                        <Menu list={list}/>
                    </Col>
                    <Col sm={12} md={8}>
                        <Article list={list}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: getMethodArray(state)
})

const mapDispatchToProps = {
    fetchMethodArray
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)