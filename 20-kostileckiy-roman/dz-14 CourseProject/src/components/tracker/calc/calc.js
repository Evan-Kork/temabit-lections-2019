import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styles from '../tracker.module.css'
import FormControl from "react-bootstrap/FormControl";
import {connect} from 'react-redux';
import Col from "react-bootstrap/Col";


// Не закончил :C
const lenght = ['до 40 см','до 60 см','до 90 см']
// const arrToForm = (data) => {
//     data.map(element => <option>{element}</option> )
// }
// console.log(arrToForm())
class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title:''}
    }
        render(){
        return (
            <Container>
                    <form onSubmit={this.submitHandler} className={styles.form}>
                        <Col>
                            <label htmlFor="from">Звідки:</label>
                            <select className="custom-select" id='from'>
                                <option selected disabled="disabled">Оберіть місто</option>
                                <option value="Івано-Франківськ">Івано-Франківськ</option><option value="Ізмаїл">Ізмаїл</option><option value="Ірпінь">Ірпінь</option><option value="Баришівка">Баришівка</option><option value="Бахмач">Бахмач</option><option value="Бахмут">Бахмут</option><option value="Бердичів">Бердичів</option><option value="Бердянськ">Бердянськ</option><option value="Березань">Березань</option><option value="Бобровиця">Бобровиця</option><option value="Богуслав">Богуслав</option><option value="Борислав">Борислав</option><option value="Бориспіль">Бориспіль</option><option value="Бородянка">Бородянка</option><option value="Бровари">Бровари</option><option value="Біла Церква">Біла Церква</option><option value="Білогородка">Білогородка</option><option value="Васильків">Васильків</option><option value="Вишгород">Вишгород</option><option value="Вишневе">Вишневе</option><option value="Ворзель">Ворзель</option><option value="Вінниця">Вінниця</option><option value="Віта-Поштова">Віта-Поштова</option><option value="Гайсин">Гайсин</option><option value="Гатне">Гатне</option><option value="Глеваха">Глеваха</option><option value="Гнідин">Гнідин</option><option value="Гоголів">Гоголів</option><option value="Гора">Гора</option><option value="Городня">Городня</option><option value="Гребінки">Гребінки</option><option value="Дніпро">Дніпро</option><option value="Дніпрорудне">Дніпрорудне</option><option value="Дрогобич">Дрогобич</option><option value="Дружківка">Дружківка</option><option value="Жидачів">Жидачів</option><option value="Житомир">Житомир</option><option value="Жмеринка">Жмеринка</option><option value="Зазимя">Зазимя</option><option value="Запоріжжя">Запоріжжя</option><option value="Золочів">Золочів</option><option value="Калинівка">Калинівка</option><option value="Кам'янець-Подільський">Кам'янець-Подільський</option><option value="Кам'янське">Кам'янське</option><option value="Київ">Київ</option><option value="Княжичі">Княжичі</option><option value="Ковель">Ковель</option><option value="Козелець">Козелець</option><option value="Коломия">Коломия</option><option value="Конотоп">Конотоп</option><option value="Коростень">Коростень</option><option value="Коростишів">Коростишів</option><option value="Костянтинівка">Костянтинівка</option><option value="Коцюбинське">Коцюбинське</option><option value="Кременчук">Кременчук</option><option value="Кривий Ріг">Кривий Ріг</option><option value="Кропивницький">Кропивницький</option><option value="Крюківщина">Крюківщина</option><option value="Куп'янськ">Куп'янськ</option><option value="Ладижин">Ладижин</option><option value="Лисичанськ">Лисичанськ</option><option value="Лозова">Лозова</option><option value="Луцьк">Луцьк</option><option value="Львів">Львів</option><option value="Лютіж">Лютіж</option><option value="Малин">Малин</option><option value="Маріуполь">Маріуполь</option><option value="Мелітополь">Мелітополь</option><option value="Миколаїв">Миколаїв</option><option value="Миргород">Миргород</option><option value="Миронівка">Миронівка</option><option value="Мукачеве">Мукачеве</option><option value="Новий Розділ">Новий Розділ</option><option value="Новоград-Волинський">Новоград-Волинський</option><option value="Новомосковськ">Новомосковськ</option><option value="Новосілки">Новосілки</option><option value="Нові Петрівці">Нові Петрівці</option><option value="Ніжин">Ніжин</option><option value="Нікополь">Нікополь</option><option value="Обухів">Обухів</option><option value="Овідіополь">Овідіополь</option><option value="Одеса">Одеса</option><option value="Олександрія">Олександрія</option><option value="Остер">Остер</option><option value="Охтирка">Охтирка</option><option value="Павлоград">Павлоград</option><option value="Петропавлівська Борщагівка">Петропавлівська Борщагівка</option><option value="Погреби">Погреби</option><option value="Полтава">Полтава</option><option value="Прилуки">Прилуки</option><option value="Проліски">Проліски</option><option value="Рава-Руська">Рава-Руська</option><option value="Рокитне">Рокитне</option><option value="Рівне">Рівне</option><option value="Самбір">Самбір</option><option value="Святопетрівське">Святопетрівське</option><option value="Славутич">Славутич</option><option value="Слов'янськ">Слов'янськ</option><option value="Сміла">Сміла</option><option value="Сокаль">Сокаль</option><option value="Софіївська Борщагівка">Софіївська Борщагівка</option><option value="Ставище">Ставище</option><option value="Старокостянтинів">Старокостянтинів</option><option value="Стоянка">Стоянка</option><option value="Стрий">Стрий</option><option value="Суми">Суми</option><option value="Сєвєродонецьк">Сєвєродонецьк</option><option value="Тараща">Тараща</option><option value="Теплодар">Теплодар</option><option value="Тернопіль">Тернопіль</option><option value="Трускавець">Трускавець</option><option value="Тульчин">Тульчин</option><option value="Ужгород">Ужгород</option><option value="Узин">Узин</option><option value="Умань">Умань</option><option value="Фастів">Фастів</option><option value="Харків">Харків</option><option value="Херсон">Херсон</option><option value="Хмельницький">Хмельницький</option><option value="Хмільник">Хмільник</option><option value="Хотянівка">Хотянівка</option><option value="Христинівка">Христинівка</option><option value="Червоноград">Червоноград</option><option value="Черкаси">Черкаси</option><option value="Чернівці">Чернівці</option><option value="Чернігів">Чернігів</option><option value="Чорноморськ">Чорноморськ</option><option value="Чортків">Чортків</option><option value="Щасливе">Щасливе</option><option value="Южне">Южне</option><option value="Южноукраїнськ">Южноукраїнськ</option><option value="Яготин">Яготин</option>
                            </select>
                            <label htmlFor="weight">Вага:</label>
                            <select className="custom-select" id="weight">
                                <option selected disabled="disabled">Оберіть вагу</option>
                                <option value="0.5">до 0.5 кг (XS)</option>
                                <option value="1">до 1 кг (S)</option>
                                <option value="2">до 2 кг (M)</option>
                                <option value="5">до 5 кг (L)</option>
                                <option value="10">до 10 кг (XL)</option>
                                <option value="15">до 15 кг (XXL)</option>
                                <option value="30">до 30 кг (XXXL)</option>
                            </select>
                        </Col>
                        <Col>
                            <label htmlFor="to">Куди:</label>
                            <select className="custom-select" id="to">
                                <option selected disabled="disabled">Оберіть місто</option>
                                <option value="Івано-Франківськ">Івано-Франківськ</option><option value="Ізмаїл">Ізмаїл</option><option value="Ірпінь">Ірпінь</option><option value="Баришівка">Баришівка</option><option value="Бахмач">Бахмач</option><option value="Бахмут">Бахмут</option><option value="Бердичів">Бердичів</option><option value="Бердянськ">Бердянськ</option><option value="Березань">Березань</option><option value="Бобровиця">Бобровиця</option><option value="Богуслав">Богуслав</option><option value="Борислав">Борислав</option><option value="Бориспіль">Бориспіль</option><option value="Бородянка">Бородянка</option><option value="Бровари">Бровари</option><option value="Біла Церква">Біла Церква</option><option value="Білогородка">Білогородка</option><option value="Васильків">Васильків</option><option value="Вишгород">Вишгород</option><option value="Вишневе">Вишневе</option><option value="Ворзель">Ворзель</option><option value="Вінниця">Вінниця</option><option value="Віта-Поштова">Віта-Поштова</option><option value="Гайсин">Гайсин</option><option value="Гатне">Гатне</option><option value="Глеваха">Глеваха</option><option value="Гнідин">Гнідин</option><option value="Гоголів">Гоголів</option><option value="Гора">Гора</option><option value="Городня">Городня</option><option value="Гребінки">Гребінки</option><option value="Дніпро">Дніпро</option><option value="Дніпрорудне">Дніпрорудне</option><option value="Дрогобич">Дрогобич</option><option value="Дружківка">Дружківка</option><option value="Жидачів">Жидачів</option><option value="Житомир">Житомир</option><option value="Жмеринка">Жмеринка</option><option value="Зазимя">Зазимя</option><option value="Запоріжжя">Запоріжжя</option><option value="Золочів">Золочів</option><option value="Калинівка">Калинівка</option><option value="Кам'янець-Подільський">Кам'янець-Подільський</option><option value="Кам'янське">Кам'янське</option><option value="Київ">Київ</option><option value="Княжичі">Княжичі</option><option value="Ковель">Ковель</option><option value="Козелець">Козелець</option><option value="Коломия">Коломия</option><option value="Конотоп">Конотоп</option><option value="Коростень">Коростень</option><option value="Коростишів">Коростишів</option><option value="Костянтинівка">Костянтинівка</option><option value="Коцюбинське">Коцюбинське</option><option value="Кременчук">Кременчук</option><option value="Кривий Ріг">Кривий Ріг</option><option value="Кропивницький">Кропивницький</option><option value="Крюківщина">Крюківщина</option><option value="Куп'янськ">Куп'янськ</option><option value="Ладижин">Ладижин</option><option value="Лисичанськ">Лисичанськ</option><option value="Лозова">Лозова</option><option value="Луцьк">Луцьк</option><option value="Львів">Львів</option><option value="Лютіж">Лютіж</option><option value="Малин">Малин</option><option value="Маріуполь">Маріуполь</option><option value="Мелітополь">Мелітополь</option><option value="Миколаїв">Миколаїв</option><option value="Миргород">Миргород</option><option value="Миронівка">Миронівка</option><option value="Мукачеве">Мукачеве</option><option value="Новий Розділ">Новий Розділ</option><option value="Новоград-Волинський">Новоград-Волинський</option><option value="Новомосковськ">Новомосковськ</option><option value="Новосілки">Новосілки</option><option value="Нові Петрівці">Нові Петрівці</option><option value="Ніжин">Ніжин</option><option value="Нікополь">Нікополь</option><option value="Обухів">Обухів</option><option value="Овідіополь">Овідіополь</option><option value="Одеса">Одеса</option><option value="Олександрія">Олександрія</option><option value="Остер">Остер</option><option value="Охтирка">Охтирка</option><option value="Павлоград">Павлоград</option><option value="Петропавлівська Борщагівка">Петропавлівська Борщагівка</option><option value="Погреби">Погреби</option><option value="Полтава">Полтава</option><option value="Прилуки">Прилуки</option><option value="Проліски">Проліски</option><option value="Рава-Руська">Рава-Руська</option><option value="Рокитне">Рокитне</option><option value="Рівне">Рівне</option><option value="Самбір">Самбір</option><option value="Святопетрівське">Святопетрівське</option><option value="Славутич">Славутич</option><option value="Слов'янськ">Слов'янськ</option><option value="Сміла">Сміла</option><option value="Сокаль">Сокаль</option><option value="Софіївська Борщагівка">Софіївська Борщагівка</option><option value="Ставище">Ставище</option><option value="Старокостянтинів">Старокостянтинів</option><option value="Стоянка">Стоянка</option><option value="Стрий">Стрий</option><option value="Суми">Суми</option><option value="Сєвєродонецьк">Сєвєродонецьк</option><option value="Тараща">Тараща</option><option value="Теплодар">Теплодар</option><option value="Тернопіль">Тернопіль</option><option value="Трускавець">Трускавець</option><option value="Тульчин">Тульчин</option><option value="Ужгород">Ужгород</option><option value="Узин">Узин</option><option value="Умань">Умань</option><option value="Фастів">Фастів</option><option value="Харків">Харків</option><option value="Херсон">Херсон</option><option value="Хмельницький">Хмельницький</option><option value="Хмільник">Хмільник</option><option value="Хотянівка">Хотянівка</option><option value="Христинівка">Христинівка</option><option value="Червоноград">Червоноград</option><option value="Черкаси">Черкаси</option><option value="Чернівці">Чернівці</option><option value="Чернігів">Чернігів</option><option value="Чорноморськ">Чорноморськ</option><option value="Чортків">Чортків</option><option value="Щасливе">Щасливе</option><option value="Южне">Южне</option><option value="Южноукраїнськ">Южноукраїнськ</option><option value="Яготин">Яготин</option>
                            </select>
                            <label htmlFor="length">Довжина:</label>
                            <select className="custom-select" id="length">
                                <option selected disabled="disabled">Оберіть довжину</option>
                                <option value="40">до 40 см</option>
                                <option value="60">до 60 см</option>
                                <option value="90">до 90 см</option>
                            </select>

                        </Col>
                    </form>
                <button className={styles.btnSucces + " btn btn-success"} type="submit">Розрахувати вартість</button>

            </Container>
        )}
}

const mapStateToProps = state => {

    return {
        sender: state.CalculateCostSending.senderCity,
        recipient: state.CalculateCostSending.recipientCity,
        weight: state.CalculateCostSending.weight,
        length: state.CalculateCostSending.length
    }
}
console.log(mapStateToProps.sender)
export default connect(mapStateToProps, null)(Calc)