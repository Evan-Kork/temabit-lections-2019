import { LocalState as TableDataState } from "../components/TableData";
import { LocalState as TableComponentsState } from "../components/TableComponents";
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

export type HandleTable = (
    action: { comment_data?: CommentData, branchNumber?: string, direction?: string }) => void;

export type HandleTablePars = Parameters<HandleTable>;

export function handleTable (
    state: TableComponentsState,
    action: { comment_data?: CommentData, branchNumber?: string, direction?: string }): void {

    if (action.branchNumber) {
        state.props.history.push("/branch/" + action.branchNumber);
        window.scrollTo(0, 0);
        return;
    }

    if (action.direction) {
        const { setState, stateData } = state;
        const { page, pages } = stateData;
        if (action.direction === "next" && page < pages) {
            setState({ ...stateData, page: page + 1 });
        }
        if (action.direction === "prev" && page > 1) {
            setState({ ...stateData, page: page - 1 });
        }
    }

    state.refComment.current.setState(action.comment_data);
}

export const handleOnMouseOver: eHandler = function(this: TableState, event: eData) {
    let elem = event.target;
    elem = elem.closest("TR");
    if (!elem || !elem.closest("TBODY")) return;
    const index = +elem.dataset.index;
    const branch = this.props.data[index];
    const firstTD = elem.firstElementChild;
    const position = firstTD.getBoundingClientRect();
    this.props.handleTable({ comment_data: { branch, position } });
}

export const handleOnMouseOut: eHandler = function(this: TableState, event: eData) {
    let elem = event.target;
    elem = elem.closest("TR");
    let rel_elem =	event.relatedTarget;
    rel_elem = rel_elem ? rel_elem.closest("TR") : null;
    if (elem === rel_elem) return;
    this.props.handleTable({ comment_data: null });
}

export const handleOnClick: eHandler = function(this: TableState, event: eData) {
    let elem = event.target;
    elem = elem.closest("TR");
    if (!elem || !elem.closest("TBODY")) return;
    const number = elem.dataset.number;
    this.props.handleTable({ branchNumber: number });
}

export const handlePagination = (callback: (direction: string) => void): eHandler =>
    (event: eData): void => {
        const elem = event.target;
        const direction = elem.dataset && elem.dataset["direction"];
        direction && callback(direction);
};

/*----------------------------------------------------------|
|             FUNCTIONS                                     |
|----------------------------------------------------------*/
export function getDerivedStateFromProps(this: TableDataState): void {
    let { data, error, filter } = this.props;
    if (!filter || filter.city === this.filter.city) return;

    if (error || !data || !filter.city) {
        this.data = null;
        this.filter = { city: null };
        //this.setState({ ...this, data, error, filter });
        return;
    }

    this.data = data.filter(({ locality }) => locality === filter.city);
    if (!data.length) {
        this.data = null;
        this.error = new Error("Відділення у місті відсутні!");
    }

    //this.setState({ ...this, data, error, filter });
}
