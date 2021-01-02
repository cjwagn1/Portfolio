import React from "react";

import styled, { AnyStyledComponent } from "styled-components";

interface IPortProps {
	title: string;
	image: string;
	description: string;
}

const Group: AnyStyledComponent = styled.div`
	display: flex;
	flex-direction: column;
	font-family: "Poppins", sans-serif;
`;

export default ({ title, description, image }: IPortProps) => {
	return (
		<Group>
			<div></div>
		</Group>
	);
};
