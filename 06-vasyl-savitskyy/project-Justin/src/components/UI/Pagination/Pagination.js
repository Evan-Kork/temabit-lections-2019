import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Pagination = (props) => {
    const [pages, setPages] = useState(getPager(props.activePage));

    useEffect(() => {
        setPages(getPager(props.activePage));
    },[props.countPages, props.activePage, props.isMobile]);

    function getPager(activePage) {
        const { countPages, isMobile } = props;
        const maxItem = 10;
        const minItem = countPages < 6 ? countPages === 5 ? 4 : countPages : 6;
        const LIMIT = isMobile ? minItem : (countPages < maxItem) ?  minItem : maxItem;

        let startPage = null,
            endPage = null
        if (countPages <= (LIMIT/2)) {
            // less than LIMIT/2 total pages so show all
            startPage = 1
            endPage = countPages
        } else {
            // more than LIMIT/2 total pages so calculate start and end pages
            if (activePage <= (LIMIT/2)) {
                startPage = 1
                endPage = LIMIT
            } else if (activePage + (LIMIT/2) >= countPages) {
                startPage = countPages - (LIMIT - 1)
                endPage = countPages
            } else {
                startPage = activePage - (LIMIT/2)
                endPage = activePage + (LIMIT/2)
            }
        }

        // create an array of pages to ng-repeat in the pager control
        return [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i)
    }

    return (
        <nav aria-label="Page navigation branches">
            {props.countPages === 1 ? null
                : (<ul className="pt-2 pl-2 pl-md-0 pagination pagination-sm c-pointer">
                    <li className={`page-item ${props.activePage === 1 ? 'disabled' : ''}`}>
                        <div className={`page-link`} onClick={() => props.onChangePage(1)} title={1}><span>Поч.</span></div>
                    </li>
                    <li className={`page-item ${props.activePage === 1 ? 'disabled' : ''}`}>
                        <div className={`page-link`} onClick={() => props.onChangePage(props.activePage - 1)} title={props.activePage - 1}><span>&#8249;</span></div>
                    </li>

                    {pages.map((page, index) => {
                    
                            return (<li key={index} className={`page-item ${props.activePage === page ? 'active' : ''}`}>
                                        <div className={`page-link`} onClick={() => props.onChangePage(page)}>{page}</div>
                                    </li>)
                        }
                    )}

                    <li className={`page-item ${props.activePage === props.countPages ? 'disabled' : ''}`}>
                        <div className={`page-link`} onClick={() => props.onChangePage(props.activePage + 1)} title={props.activePage + 1}><span>&#8250;</span></div>
                    </li>
                    <li className={`page-item ${props.activePage === props.countPages ? 'disabled' : ''}`}>
                        <div className={`page-link btn-sm`} onClick={() => props.onChangePage(props.countPages)} title={props.countPages}><span>Кін.</span></div>
                    </li>
                </ul>)
            }
        </nav>
    );
}

Pagination.defaultProps = {
    isMobile: false,
    activePage: 1,
    countPages: 1,
    onChangePage: () => console.error("wasn't implement function onChangePage")
};

Pagination.propTypes = {
    isMobile: PropTypes.bool,
    activePage: PropTypes.number,
    countPages: PropTypes.number,
    onChangePage: PropTypes.func,
};

const mapStateToProps = ({setting}, ownProps) => {
    const {isMobile} = setting;
    return {
        isMobile
    };
}

export default connect(mapStateToProps)(Pagination);
