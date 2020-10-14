import React from "react";
import Head from './header'
import Footer from './footer'
import Menu from './menu'
import PaketFalse from './paketfalse'

class DepInfo extends React.Component {
render() {
return (
<div className="main row">

    <Head />
    <Menu />
    <div className="main row">
        <PaketFalse />
    </div>
    <Footer />
</div>
)
}
}
export default DepInfo