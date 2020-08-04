import React from "react";
import {JustinServiceConsumer} from "../../context/JustinServiceContext";

const withJustinService = () => (Wrapped) => {
    return (props) => {
        return (
            <JustinServiceConsumer>
                {
                    (justinService) => {
                        return (<Wrapped {...props}
                                         justinService={justinService} />);
                    }
                }
            </JustinServiceConsumer>
        );
    }
};

export default withJustinService;

// import React from 'react';
// import { JustinServiceConsumer } from '../../context/JustinServiceContext';
//
// const withJustinService = () => (Wrapped) => {
//     return (props) => {
//         return (
//             <JustinServiceConsumer>
//                 {
//                     (justinService) => {
//                         return (<Wrapped {...props}
//                                          justinService={justinService} />);
//                     }
//                 }
//             </JustinServiceConsumer>
//         );
//     }
// };
//
// export default withJustinService;

