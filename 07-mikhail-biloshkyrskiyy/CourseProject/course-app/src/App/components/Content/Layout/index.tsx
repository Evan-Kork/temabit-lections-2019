import React, { useContext } from 'react'
import Box from '@material-ui/core/Box'
import { faMapMarkedAlt, faCalculator } from '@fortawesome/free-solid-svg-icons'

import FourItem from '@/components/Carousel/fourItem'
import Card from '@/components/Utils/Cards'
import Banner from '@/components/Banner'
import Carousel from '@/components/Carousel'
import { HeightLayout } from '@/context'
import classes from './index.module.scss'

const Content: React.FC = () => {
    const heightContext = useContext(HeightLayout)
    return (
        <Box style={{ minHeight: heightContext.height }}>
            <Box display={{ xs: 'none', sm: 'block' }}>
                <Carousel />
            </Box>
            <Box className={classes.marginTop}>
                <Box className='d-flex flex-wrap justify-content-center'>
                    <div className={classes.card}>
                        <Card
                            faIcon={faMapMarkedAlt}
                            title="Our departments"
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, voluptatibus?"
                            button1={{
                                path: 'office',
                                title: "All departments"
                            }}
                            button2={{
                                path: 'office/location',
                                title: "Nearest branch"
                            }}
                        />
                    </div>
                    <div className={classes.card}>
                        <Card
                            faIcon={faCalculator}
                            title="Calculator"
                            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, voluptatibus?"
                            button1={{
                                path: 'calculation',
                                title: "Calculate shipping cost"
                            }}
                        />
                    </div>
                </Box>
                <br />
                <Banner src="https://justin.ua/wp-content/uploads/2019/04/500_pravka.png" />
                <br />
                <FourItem />
            </Box>
        </Box>
    )
}

export default Content