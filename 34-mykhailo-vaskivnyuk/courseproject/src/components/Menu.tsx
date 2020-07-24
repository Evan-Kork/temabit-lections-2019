import React, {
    useState, useCallback, useEffect,
    ReactElement, ChangeEvent, MouseEvent, EventHandler } from "react";
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
import { connect, HandleThunkActionCreator } from "react-redux";
import { setMenu } from "../reducer/actions/actions";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
type Props =
    RouteComponentProps &
    Data.Menu & {
        setMenu: DispatchSetMenu,
    };

type DispatchSetMenu = HandleThunkActionCreator<
    Reducer.SetMenu
>;

type eData = ChangeEvent<HTMLElement> & MouseEvent;
type eHandler = EventHandler<eData>;

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function Menu(props: Props): ReactElement {
    const [isOpened, setOpened] = useState(false);

    const handleMenu: React.FormEventHandler = useCallback(
        (event: React.FormEvent) => setOpened(isOpened => !isOpened), []);

    const handleMenuLink: eHandler = useCallback(
        ({ target }: eData) =>
            target.tagName === "A" && handleMenu(null), []);

    const { list: menuList, selected, match} = props;
    const { url } = match;

    useEffect(() => {
        if ( !selected || ("/" + selected.link) !== url ) {
            props.setMenu(url);
        }
    }, [url]);

    const lis = menuList.map(({ link, id, text }) => (
        <li key={id}>
            <NavLink
                to={"/" + link}
                activeClassName={selected && id === selected.id ? "active" : ""}
                data-id={id}>
                {text}
            </NavLink>
        </li>
    ));

    const showSidebar = isOpened ? "show" : "";

    return (
        <div className="menu">
            <div className="menu_open_button" onClick={handleMenu}>
                <i className="fas fa-bars"></i>
            </div>
            <nav className={`sidebar ${showSidebar}`} onClick={handleMenuLink}>
                <div className="menu_close_button" onClick={handleMenu}>
                    <i className="fas fa-times"></i>
                </div>
                <ul>
                    {lis}
                </ul>
            </nav>
        </div>
    );
}

function mapStateToProps (state: Data.State): Data.Menu {
    return state.menu;
}

export default withRouter(connect(mapStateToProps, { setMenu })(Menu));
