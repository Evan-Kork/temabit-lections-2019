import React from "react";
import Head from './header'
import Footer from './footer'
import Search from './searchforfinder'
import CreateTable from './table_create'
import Menu from './menu'
class LocatorBranchesId extends React.Component {
render(){
var search = this.props.match.params.id.replace(":", "");
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:9998/?url=http://openapi.justin.ua/branches_locator/'+search, false);
xhr.send();
var json = JSON.parse(xhr.responseText);
return(
<div className="main row">

    <Head />
    <Menu/>
    <div className="w-100 row main-locator-branches">
        <div className="col-4"></div>
        <div className="col-4">
            <Search text={"branches_locator_id"} />
        </div>
        <div className="col-4"></div>
    </div>
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">Місто</th>
                <th scope="col">Адреса</th>
                <th scope="col">Формат</th>
            </tr>
        </thead>
        <tbody>
        	{
				json.result.map(todo =>{
					return <CreateTable todo={todo} key={todo.number}/>
				})
				
        	}
        </tbody>
    </table>
    <Footer />
</div>
)
}
}
export default LocatorBranchesId