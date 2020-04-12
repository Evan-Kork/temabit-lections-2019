import React from 'react';
import { connect } from 'react-redux';
import { getBranches, setDataBranchesForMap } from '../../../actions/actionBranches';
import { getBranchTypes } from '../../../actions/actionBranchTypes';
import TitlePage from '../../sections/title-page/Title-page';
import MapBox from '../../sections/map-box/Map-box';
import SearchBranches from '../../sections/search-branches/Search-branches';
import Preloader from '../../sections/preloader/Preloader';

class Department extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titlePage: 'Карта поштомаркетів (відділень)',
        };
    }


    componentDidMount() {
        if(!this.props.branches.loaded){
            this.props.getDataBranches('/branches');
        }
        if(!this.props.branchTypes.loaded){
            this.props.getDataBranchTypes('/branch_types');
        }
    }



    componentDidUpdate(prevProps) {
        if (this.props.branches.loaded !== prevProps.branches.loaded) {

            let tempListBranches = [];
            this.props.branches.listBranches.forEach((element, index) => {
                let tempItemBranch = [
                    element.format, 
                    element.description, 
                    element.adress, 
                    element.shedule_description,
                    `Як знайти: ${element.public.navigation_ua}`,
                    element.lat, 
                    element.lng, 
                    index
                ];
                tempListBranches.push(tempItemBranch);
            });
            this.props.dataBranchesForMap(tempListBranches);
        }
    }

    render(){
        let branchTypes = this.props.branchTypes;
        let branches = this.props.branches;

        if (!branchTypes.loaded || !branches.loaded) {
            return <Preloader/>;
        }

        return (
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <TitlePage title={this.state.titlePage}/>
                            
                            <div className="column">
                                {branches.listBranchesForMap.length > 0 &&
                                    <MapBox dataMap={branches.listBranchesForMap}/>
                                }
                                <SearchBranches/>
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
    branchTypes: state.branchTypes,
});
const mapDispatchToProps = dispatch => ({
    getDataBranchTypes: url => dispatch(getBranchTypes(url)),
    getDataBranches: url => dispatch(getBranches(url)),
    dataBranchesForMap: data => dispatch(setDataBranchesForMap(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Department);