import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonComponent: React.FC<{ variant: string }> = (props) => {
	return <Button variant={props.variant}>{props.children}</Button>;
};

export default ButtonComponent;
