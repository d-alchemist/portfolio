import React, { ReactElement } from 'react';
import './styles/cube.scss';

export default function Cube(): ReactElement {
	return (
		<div className="cube">
			<div className="side1"></div>
			<div className="side2"></div>
			<div className="side3"></div>
		</div>
	);
}
