import React, { ReactElement, ChangeEvent, MouseEvent, useState, EventHandler } from "react";
import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { setMenu } from "../reducer/actions/actions";

type Props = RouteComponentProps & {
    list: Data.Pages,
    selected: Data.Page,
    setMenu: (path: string) => void,
}

type eData = ChangeEvent<HTMLElement> & MouseEvent;
type eHandler = EventHandler<eData>;

function Menu(props: Props): ReactElement {
    const [isOpened, setOpened] = useState(false);

    const handleMenu: React.FormEventHandler =
        (event: React.FormEvent) => setOpened(!isOpened);

    const handleMenuLink: eHandler =
        ({ target }: eData) =>
            target.tagName === "A" && handleMenu(null);

    const { list: menuList, selected, match} = props;
    const { path } = match;

    if ( !selected || ("/" + selected.link) !== path ) {
        props.setMenu(path);
        return null;
    }

    const lis = menuList.map(({ link, id, text }) => (
        <li key={id}>
            <NavLink
                to={"/" + link}
                activeClassName={id === selected.id ? "active" : ""}
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
