import React, { ReactElement, FormEventHandler, useEffect } from "react";
import { connect, HandleThunkActionCreator } from "react-redux";
import { setResponse } from "../reducer/actions/actions";
import request from "../functions/request";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props {
    localities: Data.LocalitiesData,
    city: string,
    onChange: FormEventHandler,
    setResponse: DispatchSetResponse,
};

type DispatchSetResponse = HandleThunkActionCreator<
    Reducer.SetResponse<Data.LocalitiesData>
>;

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function FormCity(props: Props): ReactElement{

    useEffect(() => {
        if (props.localities.data) return;
        const method = "localities";
        const params = "";
        request({ method, params })
        .then((res: Data.LocalitiesData) =>
            props.setResponse(method, res)
        );
    }, []);

    const { data, error } = props.localities;
    if (!data) return null;

    const options = data.map((item, index) => {
        return <option key={item.SCOATOU} value={item.title_ua}> {item.title_ua} </option>
    });

    const city = props.city ? props.city : "";

    return (
        <div className="row justify-content-center">
            <div className="locality">
                <form>
                    <select defaultValue={city} name="city" onChange={props.onChange}>
                    <option disabled key={0} value="">Виберіть місто</option>
                    {options}
                    </select>
                </form>
            </div>
        </div>
    );
}

function mapStateToProps(state: Data.State): Pick<Props, 'localities'> {
    return {
        localities: state.responses.localities,
    };
}

const cntFormCity = connect(mapStateToProps, { setResponse })(FormCity);

export default cntFormCity;
