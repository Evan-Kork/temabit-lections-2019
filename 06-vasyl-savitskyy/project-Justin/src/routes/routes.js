import React from "react";
import {Switch, Route} from "react-router";
import Loadable from "react-loadable";

import {rootHref} from "../config/core";
import {pages as page} from "../pages";

const Loading = ({error}) => {
    if (error) {
        return <page.ErrorLoadedComponent />;
    } else {
        return <page.LoadingComponent />;
    }
};

const BranchesPage = Loadable({
    loader: () => import("../pages/lazy/Branches"),
    loading: Loading
});

const BranchesLocatorPage = Loadable({
    loader: () => import("../pages/lazy/BranchesLocator"),
    loading: Loading
});

const TrackingPage = Loadable({
    loader: () => import("../pages/lazy/Tracking"),
    loading: Loading
});

const TrackingHistoryPage = Loadable({
    loader: () => import("../pages/lazy/TrackingHistory"),
    loading: Loading
});

const LocalitiesPage = Loadable({
    loader: () => import("../pages/lazy/Localities"),
    loading: Loading
});

export default (
    <Switch>
        <Route
            exact
            path={rootHref}
            component={page.Home}
        />
        <Route
            exact
            path={`${rootHref}branches/:number?`}
            component={BranchesPage}
        />
        <Route
            path={`${rootHref}branches_locator/:address?`}
            component={BranchesLocatorPage}
        />
        <Route
            exact
            path={`${rootHref}tracking/:number?`}
            component={TrackingPage}
        />
        <Route
            exact
            path={`${rootHref}localities/:str?`}
            component={LocalitiesPage}
        />
        <Route
            exact
            path={`${rootHref}tracking_history/:number?`}
            component={TrackingHistoryPage}
        />
        
        <Route component={page.Page404} />
    </Switch>
);
