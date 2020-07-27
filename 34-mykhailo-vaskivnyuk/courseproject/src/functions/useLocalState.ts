import { useState, Dispatch } from "react";

export class BaseLocalState<TProps extends {} = {}, TStateData extends {} = {}> {

    [key: string]: any;

    constructor(props: TProps) {
        this.props = props;
        this.stateData = {} as TStateData;
    }
    
    props: TProps;
    stateData: TStateData;
    setStateData: Dispatch<TStateData>;
    getStateData = (): TStateData => this.stateData;

    set bindStateData(
        [stateData, setStateData]: [TStateData, Dispatch<TStateData>]) {
        this.stateData = stateData;
        this.setStateData = setStateData;
    }

    bind(methodName: string, method: Function): void {
        const hiddenName = '_' + methodName;
        this[hiddenName] = method;
        this[methodName] = (...args: any[]) => this[hiddenName](...args);
    }

    // bind(methodName: string, method: Function): void;
    // bind(methodName: keyof BaseLocalState): BaseLocalState[keyof BaseLocalState] | undefined 
    // bind(methodName: keyof BaseLocalState | string, method?: Function): BaseLocalState[keyof BaseLocalState] | undefined {

    //     if (!this[methodName] && method) {
    //         const hiddenName = '_' + methodName;
    //         this[hiddenName] = method;
    //         this[methodName] = () => this[hiddenName]();     
    //     }

    //     if (!this[methodName] || typeof this[methodName] !== 'function')
    //         return undefined;
    //     const bindMethod = ('_' + methodName);
    //     if (!this[bindMethod] || typeof this[bindMethod] !== 'function') {
    //         this[bindMethod] = (...args: any[]) => (this[methodName] as Function)(...args);
    //     }
    //     return this[bindMethod];
    // }
}

//-----------------------------------------------------------

export function useLocalState<TProps, TLocalState extends BaseLocalState>(
    props: TProps,
    initLocalState: (props: TProps) => TLocalState)
: TLocalState {
    const [state] = useState(() => initLocalState(props));
    state.bindStateData = useState(state.getStateData());
    state.props = props;
    return state;
}

//-----------------------------------------------------------

/*----------------------------------------------------------|
|             TYPES                                         |
|-----------------------------------------------------------|
export interface Props extends RouteComponentProps {
    data: Data.Branches,
}

export interface LocalState {
    props: Props,
    stateData: StateData;
    refComment: RefObject<RefComment>;
    setState: Dispatch<StateData>;
    handlePagination: (direction: string) => void;
    handleTable: HandleTable;
}

interface StateData{
    page: number,
    pages: number,
}
*/

/*----------------------------------------------------------|
|             HOOKS                                         |
|-----------------------------------------------------------|
function useLocalState(props: Props) {

    const [state] = useState((): LocalState => {
        const state = {} as LocalState;
        Object.assign(state, {
            refComment: React.createRef(),
            handleTable: (...args: HandleTablePars) => handleTable(state, ...args),
            handlePagination: (direction: string) => state.handleTable({ direction }),
        });
        return state;
    });

    [state.stateData, state.setState] = useState({
        page: 1,
        pages: Math.floor(props.data.length / PAGINATION) + 1,
    });

    state.props = props;
    
    return state;
}
*/

/*
type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type HandlersNames = FunctionPropertyNames<Handlers>;

type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;
*/

/*
interface Props {
    [key: string]: string;
}

class CreateProps {
    [key: string]: any;
    method: number = 10;

    constructor(props: Props) {
        this.method = 5;
        for (const prop in props)
            this[prop] = props[prop];
    }
}
*/

/*
interface Handlers {
    [key: string]: Function;
}

type HandlersNames = keyof Handlers;
*/
