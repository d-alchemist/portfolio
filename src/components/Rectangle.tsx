import React, { ReactElement } from 'react';
import './styles/rectangle.scss';

export default function Rectangle(): ReactElement {
	return (
		<div className="rectangle">
			<div className="rectangle__side1"></div>
			<div className="rectangle__side2"></div>
			<div className="rectangle__side3"></div>
		</div>
	);
}
