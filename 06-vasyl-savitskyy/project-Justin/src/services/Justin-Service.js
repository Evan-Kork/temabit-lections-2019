import {
    branch_types,
    services,
    tracking,
    trackingNull,
    trackingError,
    trackingCanceled,
    branches,
    fakeLocalitiesApi,
    tracking_history,
    branches_locator
} from "./FakeApi";

import Service from "./Service";

import {coreApi, cors_anywhere, proxy} from "../config/core";

export default class JustinService extends Service {

    async fetchTrackingHistory(str) {
        // return await this.faceRequest(tracking_history);

        this.loaded = true;
        const url = `${cors_anywhere}tracking_history${str}`;
        const errTxt = `Щось пішло не так з запитом ${url}`;
        return this.getRequest(url, errTxt);
    }

    async fetchLocalities(str) {
        // return await this.faceRequest(fakeLocalitiesApi);

        this.loaded = true;
        const url = `${cors_anywhere}localities${str}`;
        const errTxt = `Щось пішло не так з запитом ${url}`;
        return this.getRequest(url, errTxt);
    }

    async fetchTracking(str) {
        // return await this.faceRequest(trackingError);
        
        this.loaded = true;
        const url = `${cors_anywhere}tracking${str}`;
        const errTxt = `Щось пішло не так з запитом ${url}`;
        return this.getRequest(url, errTxt);
    }

    async fetchBranches(str) {
        // return await this.faceRequest(branches);
        
        this.loaded = true;
        const url = `${cors_anywhere}branches${str}`;
        const errTxt = `Щось пішло не так з запитом ${url}`;
        return this.getRequest(url, errTxt);
    }

    async fetchBranchTypes() {
        // return await this.faceRequest(branch_types);

        this.loaded = true;
        const url = `${cors_anywhere}branch_types`;
        const errTxt = `Щось пішло не так з запитом ${url}`;
        return this.getRequest(url, errTxt);
    }

    async fetchServices() {
        // return await this.faceRequest(services);

        this.loaded = true;
        const url = `${cors_anywhere}services`;
        const errTxt = `Щось пішло не так з запитом ${url}`;
        return this.getRequest(url, errTxt);
    }

    async fetchBranchesLocator(str) {
        // return await this.faceRequest(branches_locator);

        this.loaded = true;
        const url = `${cors_anywhere}branches_locator${str}`;
        const errTxt = `Щось пішло не так з запитом ${url}`;
        return this.getRequest(url, errTxt);
    }

    async faceRequest(data) {
        // if (!this.loaded) return;

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 1000);
        });

        const result = await promise;
        console.log('faceRequest data: ', data);
        return result;
    }
}