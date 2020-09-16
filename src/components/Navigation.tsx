import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faBriefcase,
	faComment,
	faEnvelope,
	faUser,
} from '@fortawesome/free-solid-svg-icons';


import './styles/navigation.scss';

const Navigation: React.FC = () => {
	return (
		<nav>
			<ul
				className="nav d-flex flex-column position-absolute"
				style={{ top: '50%', transform: 'translate(0, -50%)' }}
			>
				<li className="nav__item">
					<FontAwesomeIcon icon={faHome} className="nav__icon" />
					<a className="nav__link" href="#home">
						<span className="nav__link--text">Home</span>
					</a>
				</li>
				<li className="nav__item">
					<FontAwesomeIcon icon={faUser} className="nav__icon" />
					<a className="nav__link" href="#about">
						<span className="nav__link--text">About</span>
					</a>
				</li>
				<li className="nav__item">
					<FontAwesomeIcon icon={faBriefcase} className="nav__icon" />
					<a className="nav__link" href="#portfolio">
						<span className="nav__link--text">Portfolio</span>
					</a>
				</li>
				<li className="nav__item">
					<FontAwesomeIcon icon={faEnvelope} className="nav__icon" />
					<a className="nav__link" href="#contact">
						<span className="nav__link--text">Contact</span>
					</a>
				</li>
				<li className="nav__item">
					<FontAwesomeIcon icon={faComment} className="nav__icon" />
					<a className="nav__link" href="#blog">
						<span className="nav__link--text">Blog</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
