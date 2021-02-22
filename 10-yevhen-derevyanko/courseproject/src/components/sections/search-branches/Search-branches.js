import React from 'react';
import { connect } from 'react-redux';
import { getBranchesSearch } from '../../../actions/actionBranches';
import './style/style-search-branches.scss';

class SearchBranches extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            disableSubmit: false,
            addressPlaceholder: 'Введіть вашу адресу',
            title: 'Ручний пошук найближчих поштомаркетів',
            description: 'Введіть вашу адресу (місто, вулицю, номер будівлі) розділяючи комою. Для прикладу (Київ,Шевченка,30)'
        }
    }


    handleSubmitSearch = (event) => {
        event.preventDefault();
        if(event.target.children.address.value){
            this.setState({disableSubmit: true});
            this.props.dataBranchesSearch(`/branches_locator/${event.target.children.address.value}`);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.branches.listBranchesSearch !== prevProps.branches.listBranchesSearch) {
            this.setState({disableSubmit: false});
        }
    }

    render(){
        let branches = this.props.branches;
        return (
            <div className="box-search-branches">
                <div className="title-search-branches">{this.state.title}</div>
                <div className="description-search-branches">{this.state.description}</div>
                <form className="form-search-branches" onSubmit={this.handleSubmitSearch}>
                    <input name="address" placeholder={this.state.addressPlaceholder}/>
                    <button name="submitSearchBranches" type="submit" className="btn-submit-search-branches" disabled={this.state.disableSubmit}>Шукати</button>
                </form>

                {branches.listBranchesSearch == null &&
                    <p className="box-res-not-found">За вашим запитом поштомаркетів не знайдено</p>
                }

                {Array.isArray(branches.listBranchesSearch) &&
                    <div className="box-res-search-branches">
                        {branches.listBranchesSearch.map((item, i) => {
                            return <div className="item-branch" key={`branch${i}`}>
                                <div className="title-branch">{item.description}</div>
                                <div className="description">
                                    <p>{item.adress}</p>
                                    <p>{item.shedule_description}</p>
                                </div>
                                {item.photos.length > 0 &&
                                    <div className="photo">
                                        {item.photos.map((itemPhoto, i) => {
                                            return <img key={`branch-photo-${i}`} src={itemPhoto} alt=""/>
                                        })}
                                    </div>
                                }
                                <div className="distance">
                                    Приблизна відстань від Вас - <span>{item.distance}</span> км
                                </div>
                            </div>
                        })}
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    branches: state.branches,
});
const mapDispatchToProps = dispatch => ({
    dataBranchesSearch: url => dispatch(getBranchesSearch(url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBranches);