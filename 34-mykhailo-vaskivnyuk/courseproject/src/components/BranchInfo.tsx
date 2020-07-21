import React, { ReactElement } from "react";
import { profiler } from "../functions/helpers";

/*----------------------------------------------------------|
|             TYPES                                         |
|----------------------------------------------------------*/
interface Props {
    branch: Data.BranchClass,
}

/*----------------------------------------------------------|
|             COMPONENT                                     |
|----------------------------------------------------------*/
function BranchInfo(props: Props): ReactElement {
    const { branch } = props;
    const branchMap: Array<[keyof Data.BranchClass, string]> = [
        ['number', 'Номер'],
        ['adress', 'Адреса'],
        ['navigation_ua', 'Навігація'],
        ['shedule_description', 'Графік роботи'],
        ['strServices', 'Сервіси'],
        ['max_weight', 'Максимальна вага'],
        ['lat_lng', 'Координати'],
    ];

    const body = branchMap.map(([ key, title ]) => (
        <tr key={key}>
            <td>{title}</td>
            <td>{branch[key]}</td>
        </tr>
    ));

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
