import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/home.scss';
import { Button } from 'react-bootstrap';
// import image from '../assets/images/carbon.png';
import Cube from '../components/Cube';
import Table from '../components/Table';
import MovingCube from '../components/MovingCube';
import Rectangle from '../components/Rectangle';

const tripleCube = (
	<React.Fragment>
		<div className="home__cube-one">
			<Cube />
		</div>
		<div className="home__cube-two">
			<Cube />
		</div>
		<div className="home__cube-three">
			<Cube />
		</div>
	</React.Fragment>
);

const Homepage: React.FC = () => {
	return (
		<Container fluid className="home__container pt-5 pl-5 pr-2">
			<Row style={{ height: '100%' }}>
				<Col md={12} lg={5} className="home__image">
					<MovingCube />
					<div className="home__triplecube-one">{tripleCube}</div>
					<Table />
					<Rectangle />
				</Col>
				<Col xs={12} md={12} lg={6} className="home__introduction position-relative">
					<div
						className="position-absolute pr-4"
						style={{ top: '50%', transform: 'translate(0, -50%)' }}
					>
						<h6 className="home__helloText d-block mb-0 open-sans-font d-sm-none d-lg-block d-xs-none">
							Hello There!
						</h6>
						<h1 className="home__name poppins-font text-primary">
							<span className="text-light">I'm</span> Chilo Nwokolo
						</h1>
						<p className="home__text">
							I'm a Nigerian based web designer & front‑end developer
							focused on crafting clean & user‑friendly experiences, I am
							passionate about building excellent software that improves the
							lives of those around me
						</p>
						<div className="d-flex justify-content-end pr-3 pt-2">
							<Button variant="primary" className="home__button mr-3">
								More About Me
							</Button>
							<Button variant="primary" className="home__button">
								Let's talk
							</Button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Homepage;
