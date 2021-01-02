import React from "react";
import Video from "../sections/Portfolio";
import Description from "../sections/Description";
import styled, { AnyStyledComponent } from "styled-components";
interface IPortProps {
	title: string;
	image: string;
	description: string;
}
const Constraint: AnyStyledComponent = styled.div`
	max-width: 40em;
	margin-left: auto;
	margin-right: auto;
`;
export default ({ title, description, image }: IPortProps) => {
	return (
		<Constraint>
			{" "}
			<Description />
			<Video />
		</Constraint>
	);
};
