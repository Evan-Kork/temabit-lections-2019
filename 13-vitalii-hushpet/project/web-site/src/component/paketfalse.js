import React from "react";
import Search from './searchforfinder'
function PaketFalse(){
return (
<div className="row finder w-100">
    <div className="col-4"></div>
    <div className="col-4 tracking">Трекер посилки</div>
    <div className="col-4"></div>
    <div className="row w-100">
        <div className="col-3"></div>
        <div className="col-6 row">
            <div className="col-3 stan">Стан відправлення</div>
            <div className="col-7">
                <Search text={"find"}/>
            </div>
        </div>
        <div className="w-100 find-eror">Вантаж не знайдено. Перевірте номер ТТН </div>
        <div className="col-3"></div>
    </div>
    <div className="w-100 row">
        <div className="col-2"></div>
        <div className="col-2">
            <img src="box1.png" alt="" />
            <div className="bot_line"></div>
        </div>
        <div className="col-2">
            <img src="box2.png" alt="" />
            <div className="bot_line"></div>
        </div>
        <div className="col-2">
            <img src="box2.png" alt="" />
            <div className="bot_line"></div>
        </div>
        <div className="col-2">
            <img src="box3.png" alt="" />
            <div className="bot_line"></div>
        </div>
        <div className="col-2"></div>
    </div>
</div>
)
}
export default PaketFalse