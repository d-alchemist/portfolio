import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/home.scss';
import { Button } from 'react-bootstrap';

const Homepage: React.FC = () => {
	return (
		<Container fluid className="home__container pt-5 pl-5 pr-2">
			<Row>
				<Col className="flex-grow-0">
					<Card className="home__card shadow-lg bg-transparent"></Card>
				</Col>
				<Col xs={6} className="position-relative">
					<div
						className="position-absolute pr-4"
						style={{ top: '50%', transform: 'translate(0, -50%)' }}
					>
						<h6 className="home__helloText d-block mb-0 open-sans-font d-sm-none d-lg-block">
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
							<Button variant="primary" className="home__button mr-3">More About Me</Button>
							<Button variant="primary" className="home__button">Let's talk</Button>
						</div>
					</div>
				</Col>	
			</Row>
		</Container>
	);
};

export default Homepage;
