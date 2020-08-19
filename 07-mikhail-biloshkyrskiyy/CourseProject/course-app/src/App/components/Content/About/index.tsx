import React, { useContext, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Row, Col } from 'react-bootstrap'

import iRootState from '@/interfaces/iRootState'
import {
    actionAdvantages,
    actionCommand,
    actionQuote,
    actionSponsor
} from '@/actions/actionAbout'

import { iQuote, iCommand, iSponsor, iAdvantages } from '@/interfaces/iAbout'
import { AboutInvertoryData, GET_DATA_INVERTORY } from './Query'

import { HeightLayout } from '@/context'
import classes from './index.module.scss'

const GetColAdvantages = (item: iAdvantages, key: number) => {
    return (
        <Col key={key} xs={12} className={classes.advantages}>
            <Box className={classes.advantagesTitle}>
                <i className={item.icon} />
                <div>{item.title}</div>
            </Box>
            <Box className={classes.advantagesText}>{item.text}</Box>
        </Col>
    )
}
const GetRowAdvantages = (items: iAdvantages[]) => {
    return (
        <Row>
            <Col>
                <Row>
                    {items && items.map((value: iAdvantages, index: number) => index < items.length / 2 && GetColAdvantages(value, index))}
                </Row>
            </Col>
            <Col>
                <Row>
                    {items && items.map((value: iAdvantages, index: number) => index >= items.length / 2 && GetColAdvantages(value, index))}
                </Row>
            </Col>
        </Row>
    )
}
const GetColSponsor = (item: iSponsor, key: number) => {
    return (
        <Col key={key}>
            <Box className={classes.subTitle}>{item.title}</Box>
            <img className='d-block m-auto py-4' src={item.logotype} alt="" />
        </Col>
    )
}
const GetRowSponsor = (items: iSponsor[]) => {
    return (
        <Row>
            {items && items.map((value: iSponsor, index: number) => GetColSponsor(value, index))}
        </Row>
    )
}
const GetColCommand = (item: iCommand, key: number) => {
    return (
        <Col key={key} xs={12} className={classes.command}>
            <img className='d-block' src={item.img} alt="" />
            <Box className='pl-sm-4'>
                <Box className={classes.commandTitle}>{item.title}</Box>
                <Box className={classes.commandText}>{item.position}</Box>
            </Box>
        </Col>
    )
}
const GetRowCommand = (items: iCommand[]) => {
    return (
        <Row>
            <Col>
                <Row>
                    {items && items.map((value: iCommand, index: number) => index < items.length / 2 && GetColCommand(value, index))}
                </Row>
            </Col>
            <Col>
                <Row>
                    {items && items.map((value: iCommand, index: number) => index >= items.length / 2 && GetColCommand(value, index))}
                </Row>
            </Col>
        </Row>
    )
}
const GetColQuote = (item: iQuote, key: number) => {
    return (
        <Col key={key}>
            <Box className={classes.title}>{item.title}</Box>
            <Box className={classes.text}>{item.text}</Box>
        </Col>
    )
}
const GetRowQuote = (items: iQuote[]) => {
    return (
        <Row>
            {items && items.map((value: iQuote, index: number) => GetColQuote(value, index))}
        </Row>
    )
}

const mapState = (state: iRootState) => ({})
const mapDispatch = {
    actionAdvantages,
    actionCommand,
    actionQuote,
    actionSponsor
}

const connector = connect(
    mapState,
    mapDispatch
)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const About: React.FC<Props> = (props: Props) => {
    const heightContext = useContext(HeightLayout)
    const { loading, data } = useQuery<AboutInvertoryData>(GET_DATA_INVERTORY)

    useEffect(() => {
        data?.advantages && props.actionAdvantages(data?.advantages)
        data?.sponsor && props.actionSponsor(data?.sponsor)
        data?.command && props.actionCommand(data?.command)
        data?.quote && props.actionQuote(data?.quote)
    }, [loading])

    return (
        <Box style={{ minHeight: heightContext.height }} className={classes.root}>
            <Box className={classes.header}>
                <Container>
                    <div className={classes.title}>My parcel is in my supermarket</div>
                    <Row className='w-100'>
                        <Col>
                            <Box>
                                <img className='d-block m-auto py-3' src="https://justin.ua/wp-content/uploads/2018/05/ico-a1.png" alt="" />
                                <div className={classes.text}>Minimum delivery time</div>
                            </Box>
                        </Col>
                        <Col>
                            <Box>
                                <img className='d-block m-auto py-3' src="https://justin.ua/wp-content/uploads/2018/05/ico-a2.png" alt="" />
                                <div className={classes.text}>Efficiency in design</div>
                            </Box>
                        </Col>
                        <Col>
                            <Box>
                                <img className='d-block m-auto py-3' src="https://justin.ua/wp-content/uploads/2018/05/ico-a3.png" alt="" />
                                <div className={classes.text}>Plenty of postcards</div>
                            </Box>
                        </Col>
                        <Col>
                            <Box>
                                <img className='d-block m-auto py-3' src="https://justin.ua/wp-content/uploads/2018/05/ico-a4.png" alt="" />
                                <div className={classes.text}>Product safety concerns</div>
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </Box>
            <Box className={classes.body}>
                <Container>
                    <Box className={classes.title}>Our advantages</Box>
                    {GetRowAdvantages(data?.advantages as iAdvantages[])}
                </Container>
                <hr />
                <Container>
                    {GetRowSponsor(data?.sponsor as iSponsor[])}
                </Container>
                <hr />
                <Container>
                    <Box className={classes.title}>Command</Box>
                    {GetRowCommand(data?.command as iCommand[])}
                </Container>
                <hr />
                <Container>
                    {GetRowQuote(data?.quote as iQuote[])}
                </Container>
            </Box>
        </Box>
    )
}

export default connector(About)