import { LocalState as TableDataState } from "../components/TableData";
import { LocalState as TableComponentsState } from "../components/TableComponents";
import { LocalState as TableState } from "../components/Table";
import { DIRECTION } from "../components/Pagination";
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
    action: { comment_data?: CommentData, branchNumber?: string, direction?: DIRECTION }) => void;

export type HandleTablePars = Parameters<HandleTable>;

export function handleTable (
    this: TableComponentsState,
    action: { comment_data?: CommentData, branchNumber?: string, direction?: DIRECTION }): void {

    if (action.branchNumber) {
        this.props.history.push("/branch/" + action.branchNumber);
        window.scrollTo(0, 0);
        return;
    }

    if (action.direction) {
        const { setStateData, stateData } = this;
        const { page, pages } = stateData;
        if (action.direction === DIRECTION.NEXT && page < pages) {
            setStateData({ ...stateData, page: page + 1 });
        }
        if (action.direction === DIRECTION.PREV && page > 1) {
            setStateData({ ...stateData, page: page - 1 });
        }
        return;
    }


    this.refComment.current.setState(action.comment_data);
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

export const handlePagination = (callback: (direction: DIRECTION) => void): eHandler =>
    (event: eData): void => {
        const elem = event.target;
        const direction: DIRECTION = elem.dataset && +elem.dataset["direction"];
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
