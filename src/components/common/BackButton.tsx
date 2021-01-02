import React from "react";
import { Link } from "react-router-dom";

import styled, { AnyStyledComponent } from "styled-components";

const BackButton: AnyStyledComponent = styled.button`
	background-color: inherit;
	cursor: pointer;
	font-size: 20px;
	outline: none;
	transition: all 0.1s linear;
	border: 1px solid black;
	padding: 5px;
	margin: 10px;
	width: 120px;
	&:hover {
		transform: scale(1.05);
	}
	@media (max-width: 500px) {
		font-size: 15px;
		max-width: 120px;
	}
`;

export default () => {
	return (
		<div>
			<Link to="/">
				<BackButton>Back</BackButton>
			</Link>
		</div>
	);
};
