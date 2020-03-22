import React from "react";
import Search from './searchforfinder'

function PaketTrue(json){
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
				<Search  text={"find"}/>
            </div>
        </div>
        <div className="col-3"></div>
        <div className="w-100 status">{json.json.status}</div>
        <div className="col-12 row">
   			<div className="col-4"></div>     	
   			<div className="col-4"><img className="find-box" src="box1.png" alt=""/></div>     	
   			<div className="col-4"></div>     	
        </div>
        <div className="data w-100">Дата отриманя {json.json.data}</div>
        <div className="data w-100">Відправленя {json.json.status}</div>
        <div className="data w-100 end">Дякуємо, що скористались Justin! </div>
    </div>
</div>
)
}
export default PaketTrue