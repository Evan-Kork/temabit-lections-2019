import React from 'react';
import './style/style-history-traking.scss';

class ListHistoryTraking extends React.Component{

    render(){
        let dataTrakInfo = this.props.dataTrakInfo;
        if(dataTrakInfo.ttn_number === false){
            return <div className="box-error">{dataTrakInfo.trakingInfo}</div> 
        }
        return (
            <div className="box-history-traking">
                <div className="title-box">
                    Ваш номер: {dataTrakInfo.ttn_number}
                    {dataTrakInfo.trakingInfo && <p>{dataTrakInfo.trakingInfo[0].orderDescription}</p>}
                </div>
                <ul>
                    {dataTrakInfo.trakingInfo &&
                        dataTrakInfo.trakingInfo.map(point => {   
                            return (
                                <li key={`point-${point.orderNumber}-${point.time}`} className={point.status === 'Одержано' ? ('last-point') : ('point')}>
                                    <div className="title-point">{point.status}</div>
                                    <div className="data-point">
                                        <div className="info">
                                            <p>{point.departmentNumber}</p>
                                            <p>{point.departmentAdress}</p>
                                            <p>{point.status === 'Одержано' ? 'Відправлення вручено' : ''}</p> 
                                        </div>
                                        <div className="date">
                                            <p>{point.date}</p>
                                            <p>{point.time}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ListHistoryTraking;