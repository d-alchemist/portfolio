import React from 'react';
import Cube from './Cube';
import './styles/movingcube.scss';

const MovingCube: React.FC = () => {
	return (
		<div className="moving__cube">
			<div className="moving__cube-one">
				<Cube />
			</div>
			<div className="moving__cube-two">
				<Cube />
			</div>
			<div className="moving__cube-three">
				<Cube />
			</div>
            <div className="moving__cube-four">
				<Cube />
			</div>
		</div>
	);
};

export default MovingCube;
