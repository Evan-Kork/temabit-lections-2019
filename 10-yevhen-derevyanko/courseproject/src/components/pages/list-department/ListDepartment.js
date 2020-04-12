import React from 'react';

import { connect } from 'react-redux';
import { getBranches } from '../../../actions/actionBranches';
import { getServicess } from '../../../actions/actionServices';

import TitlePage from '../../sections/title-page/Title-page';
import Preloader from '../../sections/preloader/Preloader';
import './style/style-list-departmant.scss';


class ListDepartment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titlePage: 'Наші відділення (поштомаркети)',
        };
    }

    componentDidMount() {
        if(!this.props.branches.loaded){
            this.props.getDataBranches('/branches');
        }
        if(!this.props.servicess.loaded){
            this.props.getDataServicess('/services');
        }
    }

    getBranchesService(itemBranche){
        let listServices = this.props.servicess.listServicess;
        let services = {
            mainService:{
                title: 'Основні:',
                data: []
            },
            secondsServices:{
                title: 'Додаткові:',
                data: []
            }
        };
        for (let item in itemBranche.services) {
            if(itemBranche.services[item]){
                listServices.forEach(element => {
                    if(item in element){
                        if(element[item].self_service === '1'){
                            services.mainService.data.push(element[item].name_ua);
                        }else{
                            services.secondsServices.data.push(element[item].name_ua);
                        }
                    }
                });
            }
        }
        return <div className="service">
                {services.mainService.data.length > 0 &&
                    <div className="service-main"><strong>{services.mainService.title}</strong>
                        {services.mainService.data.join(', ')}
                    </div>
                }
                {services.secondsServices.data.length > 0 &&
                    <div className="service-second"><strong>{services.secondsServices.title}</strong>
                        {services.secondsServices.data.join(', ')}
                    </div>
                }
                </div>;
    }

    render(){
        let branches = this.props.branches;
        let servicess = this.props.servicess;

        if (!branches.loaded || !servicess.loaded) {
           return <Preloader/>;
        }

        return (
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <TitlePage title={this.state.titlePage}/>
                            <div className="wrapp-table-branches">
                                <table>
                                    <thead>
                                        <tr key={'branches-head'}>
                                            <th>№</th>
                                            <th>Адреса відділення</th>
                                            <th>Навігація</th>
                                            <th>Сервіси</th>
                                            <th>Графік роботи</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {branches.listBranches.map((item, i) => {
                                        return <tr key={`branches${i}`}>
                                            <td>{item.number}</td>
                                            <td>{item.adress}. {item.format} {`до ${item.max_weight} кг`}</td>
                                            <td>{item.public.navigation_ua}</td>
                                            <td>{this.getBranchesService(item)}</td>
                                            <td>{item.shedule_description}</td>
                                        </tr>
                                    })}
                                    </tbody>
                                </table>    
                            </div>    
                        </div>
                    </div>    
                </div>
            </article>
        );
    }
}

const mapStateToProps = state => ({
    branches: state.branches,
    servicess: state.servicess
});
const mapDispatchToProps = dispatch => ({
    getDataBranches: url => dispatch(getBranches(url)),
    getDataServicess: url => dispatch(getServicess(url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListDepartment);