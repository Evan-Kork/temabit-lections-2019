import React, { ReactElement, useState } from "react";
import FormCity from "./FormCity";
import TableData from "./TableData";
import ContentHeader from "./ContentHeader";

interface Props {}

type FormEventData = React.FormEvent & {
    target?: HTMLInputElement
};

function PageBranchesInCity(props: Props): ReactElement {
    const [filter, setFilter] = useState({ city: null });

    const handleCity: React.FormEventHandler = (event: FormEventData) =>
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
