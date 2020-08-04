import {compose} from "redux";

/**
 * 
 * @param {object} obj - branche в якому проводимо пошук за str
 * @param {string} str - дані строки пошуку
 * 
 * @returns {boolean} - булевий результат, чи знайдево у
 *                       властивостях branche строку str
 */
export const ifBrancheHasStr = (obj, str) => {
    for (const key in obj) {
        if (String(obj[key]).toLowerCase().indexOf(str.toLowerCase()) !== -1) {
            return true;
        }
    }
    return false;
};

/**
 * 
 * @param {array} arr - масив з кешу branchesMap, що містить усі ітеми над якими і проводиться робота,
 * @param {string} text - дані строки пошуку
 * 
 * @returns {array} - вихідний масив містить об'єкти
 */
export const getBranchesBySearch = (arr = [], text) => {
    const applyFilterByText = (str) => {
        const res = [];
        arr.map(item => {
            if (ifBrancheHasStr(item, str)) {
                res.push(item);
            }
        });
        return res;
    }

    const branches = compose(
        /**compose для подальшого розширення умов відбору відділень */
        applyFilterByText
    )(text);

    return branches;
}

/**
 * 
 * @param {array} arr - масив який потрібно обробитиб
 * @param {number} n - к-ть ітемів в вихідному масиві 
 */
export function* chunks(arr, n) {
    for(let i = 0; i < arr.length; i += n) {
        yield(arr.slice(i, i+n));
    }
}


/**
 * Кешування даних для view по сторінках
 * @param {array} array - масив даних над яким проводимо розподіл на сторінки,
 * @param {number} countOnPage - к-ть ітемів у масивах для мапи
 * 
 * @returns {array} - масив з [закешованим масивом по сторінках,
 *                             та загальною кількістю доступних сторінок]
 */
export const getPageMap = (array = [], сountOnPage = INITIAL_COUNT_ON_PAGE) => {
    const map = new Map();
    if (!array.length) return [map, null];

    const countPages = Math.ceil(array.length/сountOnPage);
    const arr = [...chunks(array, сountOnPage)];
    for (let i = 0; i < arr.length; i++) {
        map.set(i+1, arr[i]);
    }

    return [map, countPages];
}
/**
 * Формуємо масив відділень для view (адаптер)
 * @param {array} data - відповідь отримана з серверу, яка міститься по ключу result,
 * 
 * @returns {array} - вихідний масив містить об'єкти з наступними полями:
 * [{
 *      @param {string} number - номер відділення,
 *      @param {string} adress - адреса відділення ,
 *      @param {string} navigation - навігація місця розташування,
 *      @param {array} services_o - Основні: сервіси які надає відділення,
 *      @param {array} services_d - Додаткові: сервіси які надає відділення,
 *      @param {string} shedule - графік роботи відділення
 *  },
 * ...]
 */
export const getBranchesForView = (data) => {
    const array = [];
    data.map((item) => {
        array.push({
            number: item.number,
            adress: `${item.adress}. ${item.format} (до ${item.max_weight}кг)`,
            navigation: item.public.navigation_ua,
            services_o: spliceSertices(item.services, {
                "fitting": "Грошовий переказ",
                "cardpay": "Оплата карткою",
                "remittance": "Примірочна"
            }),
            services_d: spliceSertices(item.services, {
                "monobank": "Картка \"Монобанк\"",
                "vending": "Вендинг",
                "3mob": "3Mob",
                "uplata": "Uplata",
                "joint": "Joint"
            }),
            shedule: item.shedule_description,
            photos: item.photos
        });
    });
    return array;
}

/**
 * Формує масив констант послуг відділення,
 * оскільки бек чомусь кидає об'єкт з булевим
 * значенням цих послуг, так ми дублюємо костанти
 * на беку та фронті, що в свою чергу ускладнює логіку
 * @param {object} services - об'єкт з булевим значенням
*                                          сервісу 0 || 1,
 * @param {object} CONSTS - об'єкт з стрінговими ключами
 *              (оскільки деякі ключі починаються з цифр)
 * 
 * @returns {array} - вихідний масив стрінгових констант
 *                        доступних сервісів у відділенні 
 */
const spliceSertices = (services = {}, CONSTS = {}) => {
    const array = [];
    for (const key in CONSTS) {
        if (services[key]) {
            array.push(CONSTS[key]);
        }
    }
    return array;
}