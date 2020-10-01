import React, { ReactElement } from 'react';
import './styles/table.scss';

export default function Table(): ReactElement {
    return (
        <div className="table">
            <div className="tableSide1"></div>
            <div className="tableSide2"></div>
            <div className="tableSide3"></div>
        </div>
    )
}
