import { LocalState as TableState } from "../components/TableData";
import { LocalState } from "../components/Table";
import { ChangeEvent, FocusEvent, EventHandler } from "react";
import { CommentData } from "../components/Comment";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
type eData = ChangeEvent<HTMLElement>
    & FocusEvent<HTMLElement>
    & { relatedTarget?: HTMLElement };

type eHandler = EventHandler<eData>;

/*----------------------------------------------------------|
|             HANDLERS                                      |
|----------------------------------------------------------*/
export function handleTable(this: TableState, comment_data: CommentData, branchNumber: number): void {

    if (branchNumber) {
        this.props.history.push("/branch/" + branchNumber);
        window.scrollTo(0, 0);
        return;
    }

    this.setState({ ...this, comment_data });
}

export const handleOnMouseOver: eHandler = function(this: LocalState, event: eData) {
    let elem = event.target;
    elem = elem.closest("TR");
    if (!elem || !elem.closest("TBODY")) return;
    const index = +elem.dataset.index;
    const branch = this.props.data[index];
    const firstTD = elem.firstElementChild;
    const position = firstTD.getBoundingClientRect();
    this.props.handleTable({ branch, position });
}

export const handleOnMouseOut: eHandler = function(this: LocalState, event: eData) {
    let elem = event.target;
    elem = elem.closest("TR");
    let rel_elem =	event.relatedTarget;
    rel_elem = rel_elem ? rel_elem.closest("TR") : null;
    if (elem === rel_elem) return;
    this.props.handleTable(null);
}

export const handleOnClick: eHandler = function(this: LocalState, event: eData) {
    let elem = event.target;
    elem = elem.closest("TR");
    if (!elem || !elem.closest("TBODY")) return;
    const number = elem.dataset.number;
    this.props.handleTable(null, number);
}

export const handlePagination: eHandler = function(this: LocalState, event: eData) {
    const elem = event.target;
    const direction = elem.dataset["direction"];
    const { page, pages, setState } = this;
    if (direction === "next" && page < pages) {
        setState({ ...this, page: page + 1 });
    }
    if (direction === "prev" && page > 1) {
        setState({ ...this, page: page - 1 });
    }
}

/*----------------------------------------------------------|
|             FUNCTIONS                                     |
|----------------------------------------------------------*/
export function getDerivedStateFromProps(this: TableState): void {
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
