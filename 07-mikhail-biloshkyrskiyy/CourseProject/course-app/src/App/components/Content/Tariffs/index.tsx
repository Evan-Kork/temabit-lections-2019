import React, { useContext } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import { HeightLayout } from '@/context'
import classes from './index.module.scss'

const Tarrifs: React.FC = () => {
    const heightContext = useContext(HeightLayout)
    return (
        <Box className={classes.root} style={{ minHeight: heightContext.height }}>
            <Container>
                <Box className='d-flex justify-content-center'>
                    <Box className={classes.title}>Tariffs</Box>
                </Box>
                <Box>
                    Ми будуємо якісну доставку. Якісне не може бути найдешевшим. Однак ми розуміємо специфіку ринку та відслідковуємо купівельну спроможність наших клієнтів. Саме тому наші послуги за ціною на 10-15% доступніші, ніж у головних лідерів ринку.
                    Наша базова цінова пропозиція щодо відправлень між фізичними особами:
                </Box>
                <img className={classes.img} src="https://justin.ua/wp-content/uploads/2020/02/Tarifs_.jpg" alt="" />
                <Box>
                    1Фактична вага визначається шляхом зважування відправлення на вагах:

                    – для Smart, mini OSR – вага на одне місце не перевищує 15 кг, а загальна вага всіх вантажних місць відправлення не перевищує 100 кг.

                    – для OSR – вага на одне місце не перевищує 30 кг, а загальна вага всіх вантажних місць відправлення не перевищує 100 кг

                    *вартість вказана з урахуванням ПДВ, дійсна з 01.03.2019

                    *До 15 кг – сума всіх сторін не більше 120 см. До 30 кг – сума всіх сторін не більше 150 см.
                </Box>
                <Box>
                    У прайсі вказана вартість доставки «поштомаркет-поштомаркет» в межах України.

                    Для спрощення розрахунків за послуги, застосовується заокруглення сум до цілого числа в гривнях (без копійок) в бік збільшення або зменшення у відповідності з пунктом 5.7 Публічного договору про надання послуг з організації перевезення відправлень (https://justin.ua/umovy-nadannya-poslug/.

                    Всі перевезення виконуються згідно умов перевезення компанії Justin.

                    Наша базова цінова пропозиція щодо пакування:
                </Box>
                <img className={classes.img} src="https://justin.ua/wp-content/uploads/2020/01/Tarifs_2020_WEB-768x511.jpg" alt="" />
                <Box>
                    *вартість вказана з урахуванням ПДВ

                    Також, розрахувати вартість послуг Ви можете з допомогою калькулятора на головній сторінці.
                </Box>
            </Container>
        </Box>
    )
}

export default Tarrifs