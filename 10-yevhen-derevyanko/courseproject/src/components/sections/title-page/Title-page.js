import React from 'react';
import '../title-page/style/style-title-page.scss';

class TitlePage extends React.Component{
    render(){
        return (<h1 className="title-page">{this.props.title}</h1>);
    }
}
export default TitlePage;