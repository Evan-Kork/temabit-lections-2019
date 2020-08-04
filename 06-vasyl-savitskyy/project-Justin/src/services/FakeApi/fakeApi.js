export const branch_types = {
  "status": 1,
  "msg": null,
  "result": [
    {
      "short_name": "MiniOSR",
      "description": "MiniOSR"
    },
    {
      "short_name": "OSR",
      "description": "OSR – відділення, у якому здійснюється приймання/видача відправлень вагою не більше ніж 30 кг, довжиною не більше ніж 90 см"
    },
    {
      "short_name": "SMART",
      "description": "SMART – відділення, у якому здійснюється приймання/видача відправлення вагою не більше ніж 15 кг та з максимальною довжиною однієї зі сторін не більше ніж 90 см."
    }
  ]
};

export const services = {
  "status": 1,
  "msg": null,
  "result": [
    {
      "monobank": {
        "name_ru": "Карта \"Монобанк\"",
        "name_ua": "Картка \"Монобанк\"",
        "name_en": "Monobank Card",
        "description_ru": "Послуга, що передбачає видачу банківської платіжної карти ПАТ «УНІВЕРСАЛ БАНК» з продуктом «Monobank» на відділенні.",
        "description_ua": "Послуга, що передбачає видачу банківської платіжної карти ПАТ «УНІВЕРСАЛ БАНК» з продуктом «Monobank» на відділенні.",
        "description_en": "Послуга, що передбачає видачу банківської платіжної карти ПАТ «УНІВЕРСАЛ БАНК» з продуктом «Monobank» на відділенні.",
        "alias": "monobank",
        "self_service": 0,
        "category_service": 1,
        "send_service": 1
      }
    },
    {
      "cardpay": {
        "name_ru": "Оплата картой",
        "name_ua": "Оплата карткою",
        "name_en": "Card payment",
        "description_ru": "Оплата картой",
        "description_ua": "Оплата карткою",
        "description_en": "Card payment",
        "alias": "cardpay",
        "self_service": 1,
        "category_service": 0,
        "send_service": 1
      }
    },
    {
      "vending": {
        "name_ru": "Вендинг",
        "name_ua": "Вендинг",
        "name_en": "Vending",
        "description_ru": "Вендинг — это продажа товаров и услуг с помощью автоматизированных систем (торговых автоматов).",
        "description_ua": "Вендинг — це продаж товарів і послуг за допомогою автоматизованих систем (торгових автоматів). ",
        "description_en": "A full-line vending business sets up several types of vending machines that sell a wide range of products.",
        "alias": "vending",
        "self_service": 1,
        "category_service": 0,
        "send_service": 1
      }
    },
    {
      "remittance": {
        "name_ru": "Денежный перевод",
        "name_ua": "Грошовий переказ",
        "name_en": "Wire transfer",
        "description_ru": "Послуга, що передбачає виконання доручення Відправника на пересилання та виплату Одержувачу визначеної ним суми коштів лише у національній валюті. Загальна сума, що приймається до пересилання переказами в межах України не повинна перевищувати 100 тис. грн. Послуга надається у відділеннях ТОВ «ДЖАСТ ІН» фінансовою установою-партнером відповідно до договору про спільну діяльність. ",
        "description_ua": "Послуга, що передбачає виконання доручення Відправника на пересилання та виплату Одержувачу визначеної ним суми коштів лише у національній валюті. Загальна сума, що приймається до пересилання переказами в межах України не повинна перевищувати 100 тис. грн. Послуга надається у відділеннях ТОВ «ДЖАСТ ІН» фінансовою установою-партнером відповідно до договору про спільну діяльність. ",
        "description_en": "Послуга, що передбачає виконання доручення Відправника на пересилання та виплату Одержувачу визначеної ним суми коштів лише у національній валюті. Загальна сума, що приймається до пересилання переказами в межах України не повинна перевищувати 100 тис. грн. Послуга надається у відділеннях ТОВ «ДЖАСТ ІН» фінансовою установою-партнером відповідно до договору про спільну діяльність. ",
        "alias": "remittance",
        "self_service": 1,
        "category_service": 0,
        "send_service": 1
      }
    },
    {
      "fitting": {
        "name_ru": "Примерочная",
        "name_ua": "Примірочна",
        "name_en": "fitting room",
        "description_ru": "Сервіс, що надає можливість Одержувачу у відділенні розкрити упаковку з дотриманням певних Умов та провести примірювання його вмісту (одяг, взуття). Даний сервіс надається тільки у відділеннях, на яких розташовані примірочні.",
        "description_ua": "Сервіс, що надає можливість Одержувачу у відділенні розкрити упаковку з дотриманням певних Умов та провести примірювання його вмісту (одяг, взуття). Даний сервіс надається тільки у відділеннях, на яких розташовані примірочні.",
        "description_en": "Сервіс, що надає можливість Одержувачу у відділенні розкрити упаковку з дотриманням певних Умов та провести примірювання його вмісту (одяг, взуття). Даний сервіс надається тільки у відділеннях, на яких розташовані примірочні.",
        "alias": "fitting",
        "self_service": 1,
        "category_service": 0,
        "send_service": 1
      }
    },
    {
      "3mob": {
        "name_ru": "3Mob",
        "name_ua": "3Mob",
        "name_en": "3Mob",
        "description_ru": "",
        "description_ua": "Послуга, що передбачає видачу стартового пакету мобільного оператора 3Mob.",
        "description_en": "",
        "alias": "3mob",
        "self_service": 0,
        "category_service": 1,
        "send_service": 1
      }
    },
    {
      "uplata": {
        "name_ru": "Uplata",
        "name_ua": "Uplata",
        "name_en": "Uplata",
        "description_ru": "",
        "description_ua": "Видача безіменних карток Uplata (ТОВ «ФОРТЕКС-ФІНАНС») у відділеннях.",
        "description_en": "",
        "alias": "uplata",
        "self_service": 0,
        "category_service": 1,
        "send_service": 1
      }
    },
    {
      "joint": {
        "name_ru": "Joint",
        "name_ua": "Joint",
        "name_en": "Joint",
        "description_ru": "",
        "description_ua": "Послуга, що передбачає видачу продукції JOINT у відділенні, як звичайного відправлення з післяплатою.",
        "description_en": "",
        "alias": "joint",
        "self_service": 0,
        "category_service": 1,
        "send_service": 1
      }
    }
  ]
};

export const tracking = {
  "status": 1,
  "msg": null,
  "result": [
      {
          "orderNumber": "201810165",
          "orderDescription": "Замовлення клієнта 201810165 від 7/25/2018",
          "date": "2019-02-27",
          "time": "10:20:51",
          "status": "Одержано",
          "departmentNumber": "",
          "departmentAdress": ""
      }
  ]
};

export const trackingNull = {
  "status": 1,
  "msg": null,
  "result": [
      {
          "orderNumber": null,
          "orderDescription": null,
          "date": "",
          "time": null,
          "status": null,
          "departmentNumber": "",
          "departmentAdress": null
      }
  ]
};

export const trackingError = {
  "status": 0,
  "msg": {
      "code": 10304,
      "ru": "Не удалось найти отправление",
      "ua": "Не вдалося знайти відправлення",
      "en": "Could not find the shipment"
  },
  "result": null
};

export const trackingCanceled = {
  "status": 1,
  "msg": null,
  "result": [
      {
          "orderNumber": "201930235",
          "orderDescription": "Замовлення клієнта 201930235 від 2/11/2019",
          "date": "2019-02-22",
          "time": "01:00:16",
          "status": "Відміна відправки",
          "departmentNumber": "",
          "departmentAdress": ""
      }
  ]
};
