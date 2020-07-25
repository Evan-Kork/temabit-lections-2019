import { LocalState as TableDataState } from "../components/TableData";
import { LocalState as TableState } from "../components/Table";
import { ChangeEvent, EventHandler, MouseEvent } from "react";
import { CommentData } from "../components/Comment";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
type eData =
    ChangeEvent<HTMLElement> &
    MouseEvent<HTMLElement> &
    { relatedTarget?: HTMLElement };

export type eHandler = EventHandler<eData>;

/*----------------------------------------------------------|
|             HANDLERS                                      |
|----------------------------------------------------------*/
export function handleTable (this: TableState, comment_data: CommentData, branchNumber: number): void {

    if (branchNumber) {
        this.props.history.push("/branch/" + branchNumber);
        window.scrollTo(0, 0);
        return;
    }

    this.refComment.current.setState(comment_data);
}

export const handleOnMouseOver: eHandler = function(this: TableState, event: eData) {
    let elem = event.target;
    elem = elem.closest("TR");
    if (!elem || !elem.closest("TBODY")) return;
    const index = +elem.dataset.index;
    const branch = this.props.data[index];
    const firstTD = elem.firstElementChild;
    const position = firstTD.getBoundingClientRect();
    this.handleTable({ branch, position });
}

export const handleOnMouseOut: eHandler = function(this: TableState, event: eData) {
    let elem = event.target;
    elem = elem.closest("TR");
    let rel_elem =	event.relatedTarget;
    rel_elem = rel_elem ? rel_elem.closest("TR") : null;
    if (elem === rel_elem) return;
    this.handleTable(null);
}

export const handleOnClick: eHandler = function(this: TableState, event: eData) {
    let elem = event.target;
    elem = elem.closest("TR");
    if (!elem || !elem.closest("TBODY")) return;
    const number = elem.dataset.number;
    this.handleTable(null, number);
}

export const handlePagination: eHandler = function(this: TableState, event: eData) {
    const elem = event.target;
    const direction = elem.dataset["direction"];
    const { setState, stateData } = this;
    const { page, pages } = stateData;
    if (direction === "next" && page < pages) {
        setState({ ...stateData, page: page + 1 });
    }
    if (direction === "prev" && page > 1) {
        setState({ ...stateData, page: page - 1 });
    }
}

/*----------------------------------------------------------|
|             FUNCTIONS                                     |
|----------------------------------------------------------*/
export function getDerivedStateFromProps(this: TableDataState): void {
    const { filter, branches } = this.props;
    if (!filter || filter === this.filter) return null;
    
    let { data, error } = branches;
    if (!data) return null;

    if (filter.city) {
        data = data.filter(({ locality }) => locality === filter.city);
        if (!data.length) {
            error = { name: "", message: "Місто не знайдено!"};
            data = null;
        }
    }
    this.setState({ ...this, data, error, filter });
}
