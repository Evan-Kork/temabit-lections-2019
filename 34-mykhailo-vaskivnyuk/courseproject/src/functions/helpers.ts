import SERVICES from "../data/services";
import { ProfilerOnRenderCallback } from "react";

export function getServices(services: Data.Services): string {
    let array = [];
    let service: Data.ServicesNames;
    for (service in services) {
        if (services[service] && SERVICES[service])
            array.push(SERVICES[service]);
    }
    return array.join("; ");
}

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
