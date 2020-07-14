import React, {
    ReactElement, ChangeEvent, EventHandler,
    useState } from "react";
import FormCity from "./FormCity";
import TableData from "./TableData";
import ContentHeader from "./ContentHeader";

type eData = ChangeEvent<HTMLInputElement>;
type eHandler = EventHandler<eData>;

function PageBranchesInCity(props: {}): ReactElement {
    const [filter, setFilter] = useState({ city: null });

    const handleCity: eHandler = (event: eData) =>
        setFilter({ city: event.target.value });
        
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
