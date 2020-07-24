import React, {
    ReactElement, ChangeEvent, EventHandler,
    useState, useCallback } from "react";
import FormCity from "./FormCity";
import TableData from "./TableData";
import ContentHeader from "./ContentHeader";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
type eData = ChangeEvent<HTMLInputElement>;
type eHandler = EventHandler<eData>;

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function PageBranchesInCity(props: {}): ReactElement {
    const [filter, setFilter] = useState({ city: null });

    const handleCity: eHandler = useCallback(
        (event: eData) => setFilter({ city: event.target.value }),
        []
    );
        
    const { city } = filter;

    return (
        <React.Fragment>
            <ContentHeader title="Наші відділення (поштомаркети) у місті" />
            <FormCity city={city} onChange={handleCity}/>
            <TableData filter={filter} />
        </React.Fragment>
    );
}

export default PageBranchesInCity;
