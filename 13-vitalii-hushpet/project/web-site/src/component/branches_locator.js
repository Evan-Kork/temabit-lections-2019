import React from "react";
import Head from './header'
import Footer from './footer'
import Search from './searchforfinder'
function LocatorBranches() {
return (
<div className="main row">

    <Head />
    <div className="w-100 row main-locator-branches">
            <div className="col-5"></div>
        <div className="col-2 tracking">Найближче віділення</div>
        <div className="col-5"></div>
        <div className="col-4"></div>
        <div className="col-4">
            <Search text={"branches_locator_id"} />
        </div>
        <div className="col-4"></div>
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
    <Footer />
</div>
)
}
export default LocatorBranches