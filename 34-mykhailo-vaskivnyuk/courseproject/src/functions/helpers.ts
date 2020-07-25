import SERVICES from "../data/services";

export function getServices(services: Data.Services): string {
    let array = [];
    let service: Data.ServicesNames;
    for (service in services) {
        if (services[service] && SERVICES[service])
            array.push(SERVICES[service]);
    }
    return array.join("; ");
}

import { ProfilerOnRenderCallback } from "react";

export const profiler: ProfilerOnRenderCallback = (
        id: string,
        phase: "mount" | "update",
        actualDuration: number,
        baseDuration: number,
        startTime: number,
        commitTime: number,
        interactions: Set<any>,
): void => {
    console.log("ELEMENT: ", id, " => ", phase);
}

import request from "../functions/request";
import { validateResponse } from "../functions/validate";
import { RequestProps } from "../components/TableData";

export function getBranches(props: RequestProps): void {
    if (props.branches.data) return;
    const method = "branches";
    const params = "";
    request({ method, params })
    .then(validateResponse)
    .then((res: Data.BranchesData) =>
        props.setResponse(method, res),
    );
}
