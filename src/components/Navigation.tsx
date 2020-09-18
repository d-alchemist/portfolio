import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faBriefcase,
	faComment,
	faEnvelope,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import './styles/navigation.scss';

const Navigation: React.FC = () => {
	return (
		<nav>
			<ul
				className="nav d-flex flex-column position-absolute"
				style={{ top: '50%', transform: 'translate(0, -50%)' }}
			>
				<NavLink exact activeClassName="active" to={'/'}>
					<li className="nav__item">
						<FontAwesomeIcon icon={faHome} className="nav__icon" />
						<span className="nav__link">
							<span className="nav__link--text">Home</span>
						</span>
					</li>
				</NavLink>
				<NavLink activeClassName="active" to={'/about'}>
					<li className="nav__item">
						<FontAwesomeIcon icon={faUser} className="nav__icon" />
						<span className="nav__link">
							<span className="nav__link--text">About</span>
						</span>
					</li>
				</NavLink>
				<NavLink activeClassName="active" to={'/portfolio'}>
					<li className="nav__item">
						<FontAwesomeIcon icon={faBriefcase} className="nav__icon" />
						<span className="nav__link">
							<span className="nav__link--text">Portfolio</span>
						</span>
					</li>
				</NavLink>
				<NavLink activeClassName="active" to={'/contact'}>
					<li className="nav__item">
						<FontAwesomeIcon icon={faEnvelope} className="nav__icon" />
						<span className="nav__link">
							<span className="nav__link--text">Contact</span>
						</span>
					</li>
				</NavLink>
				<NavLink activeClassName="active" to={'/blog'}>
					<li className="nav__item">
						<FontAwesomeIcon icon={faComment} className="nav__icon" />
						<span className="nav__link">
							<span className="nav__link--text">Blog</span>
						</span>
					</li>
				</NavLink>
			</ul>
		</nav>
	);
};

export default Navigation;
