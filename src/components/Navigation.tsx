import React, { useState } from 'react';
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
	let [openNavigation, setOpenNavigation] = useState(false);

	const handleNavigation = () => {
		setOpenNavigation(!openNavigation);
	};

	return (
		<React.Fragment>
			<nav className="desktop">
				<ul className="nav">
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

			<nav className="tablet">
				<div className="navigation">
					<div onClick={handleNavigation} className="navigation__button">
						<span
							className={
								openNavigation
									? 'navigation__button-hide'
									: 'navigation__button-control'
							}
						></span>
					</div>

					<div
						className={
							openNavigation
								? 'navigation__background-show'
								: 'navigation__background-hide'
						}
					></div>
					{openNavigation ? (
						<ul className="navigation__list">
							<NavLink exact activeClassName="active" to={'/'}>
								<li className="navigation__item">
									<FontAwesomeIcon
										icon={faHome}
										className="navigation__icon"
									/>
									<span className="navigation__link">
										<span className="navigation__link--text">
											Home
										</span>
									</span>
								</li>
							</NavLink>
							<NavLink activeClassName="active" to={'/about'}>
								<li className="navigation__item">
									<FontAwesomeIcon
										icon={faUser}
										className="navigation__icon"
									/>
									<span className="navigation__link">
										<span className="navigation__link--text">
											About
										</span>
									</span>
								</li>
							</NavLink>
							<NavLink activeClassName="active" to={'/portfolio'}>
								<li className="navigation__item">
									<FontAwesomeIcon
										icon={faBriefcase}
										className="navigation__icon"
									/>
									<span className="navigation__link">
										<span className="navigation__link--text">
											Portfolio
										</span>
									</span>
								</li>
							</NavLink>
							<NavLink exact activeClassName="active" to={'/contact'}>
								<li className="navigation__item">
									<FontAwesomeIcon
										icon={faEnvelope}
										className="navigation__icon"
									/>
									<span className="navigation__link">
										<span className="navigation__link--text">
											Contact
										</span>
									</span>
								</li>
							</NavLink>
							<NavLink exact activeClassName="active" to={'/blog'}>
								<li className="navigation__item">
									<FontAwesomeIcon
										icon={faComment}
										className="navigation__icon"
									/>
									<span className="navigation__link">
										<span className="navigation__link--text">
											Blog
										</span>
									</span>
								</li>
							</NavLink>
						</ul>
					) : (
						''
					)}
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navigation;
