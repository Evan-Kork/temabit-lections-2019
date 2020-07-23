import React, { ReactElement, useMemo } from "react";
import { profiler } from "../functions/helpers";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props {
    branch: Data.BranchClass,
}

/*----------------------------------------------------------|
|             FUNCTIONS                                     |
|----------------------------------------------------------*/
const BRANCH_MAP: Array<[keyof Data.BranchClass, string]> = [
    ['number', 'Номер'],
    ['adress', 'Адреса'],
    ['navigation_ua', 'Навігація'],
    ['shedule_description', 'Графік роботи'],
    ['strServices', 'Сервіси'],
    ['max_weight', 'Максимальна вага'],
    ['lat_lng', 'Координати'],
];

const getBody = (branch: NonNullable<Data.BranchClass>): ReactElement[] => (
    BRANCH_MAP.map(([ key, title ]) => (
        <tr key={key}>
            <td>{title}</td>
            <td>{branch[key]}</td>
        </tr>
)));

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function BranchInfo({ branch }: Props): ReactElement {
    
    if (!branch) return null;
    
    const body = useMemo(
        () => getBody(branch),
        [branch],
    );

    return(
        <div className="row justify-content-center">
            <div className="tbl_branch">
                <React.Profiler id="BranchInfo" onRender={profiler}>
                    <table>
                        <tbody>
                            {body}
                        </tbody>
                    </table>
                </React.Profiler>
            </div>
        </div>
    );
}

export default BranchInfo;
