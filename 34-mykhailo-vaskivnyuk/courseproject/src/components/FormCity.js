import React from "react";
import { connect } from "react-redux";
import { setResponse } from "../reducer/actions/actions";
import request from "../functions/request";

class FormCity extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
		if (this.props.localities.data) return;
        const method = "localities";
        const params = "";
		request(
            { method, params },
			(data, error) => {
				this.props.setResponse(
                    method,
                    {data, error}
                );
			}
		);
    }
    
    render() {

        dev_log.render(this);
        //dev_log(this.props.localities);
        const city = this.props.city ? this.props.city : "";

        //const cities = ["first", "second", "third"];
        const { data, error } = this.props.localities;
        if (!data) return null;

        const options = data.map((item, index) => {
            return <option key={item.SCOATOU} value={item.title_ua}> {item.title_ua} </option>
        });

        return (
            <div className="row justify-content-center">
                <div className="locality">
                    <form>
                        <select defaultValue={city} name="city" onChange={this.props.onChange}>
                        <option disabled key={0} value="">Виберіть місто</option>
                        {options}
                        </select>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        localities: state.responses.localities
    }
}

export default FormCity = connect(mapStateToProps, { setResponse })(FormCity);

// uuid: "82362067-dc04-11e7-80c6-00155dfbfb00"
// SCOATOU: "3510300000"
// parent_uuid: "17bc2896-dbfe-11e7-80c6-00155dfbfb00"
// title_ua: "Олександрія"
// parent_title_ua: "Кіровоградська"
// title_ru: "Александрия"
// parent_title_ru: "Кировоградская"
// title_en: ""
// parent_title_en: ""

{/* <form>
<label>City 
    <select defaultValue={city} name="city" onChange={this.props.onChange}>
        <option disabled key={0} value="">select a city</option>
        {options}
    </select>
</label>
</form> */}