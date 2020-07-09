import {maxMobileWidth} from "../config/core";

export const isMobile = (): boolean => window.innerWidth < maxMobileWidth ? true : false;
