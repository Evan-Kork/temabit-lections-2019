import {maxMobileWidth} from "../config/core";

export const isMobile = () => window.innerWidth < maxMobileWidth ? true : false;
