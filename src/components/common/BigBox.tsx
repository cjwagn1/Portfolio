import React from "react";

import styled, { AnyStyledComponent } from "styled-components";
import { useWindowSize } from "react-use";
import { Link } from "react-router-dom";
interface IPortProps {
	title: string;
	image: string;
	description: string;
	link: string;
}

const Group: AnyStyledComponent = styled.div`
	display: flex;
	flex-direction: column;
	font-family: "Poppins", sans-serif;
`;
const Box: AnyStyledComponent = styled.div`
	background-color: #2a9d8f;
	width: auto;
	max-width: 480px;
	display: flex;
	align-items: center;
	border-radius: 5px;
	cursor: pointer;
	padding: 20px;

	transition: all 0.1s linear;
	outline: 1px solid transparent;
	margin-bottom: 4%;

	border: 0.5px solid black;
	&:hover {
		transform: scale(1.05);
	}
`;
const Logo: AnyStyledComponent = styled.img`
	height: 60px;
	@media (max-width: 400px) {
		height: auto;
		width: 60px;
	}
`;
const Title: AnyStyledComponent = styled.div`
	font-weight: bold;
`;

const Desc: AnyStyledComponent = styled.div``;
const TextGroup: AnyStyledComponent = styled.div`
	display: flex;
	padding-left: 20px;
	font-size: 20px;
	flex-direction: column;
`;
const Inline: AnyStyledComponent = styled.div`
	display: inline-block;
`;
const Column: AnyStyledComponent = styled.div`
	display: flex;
	flex-direction: column;
`;
const ImgCenter: AnyStyledComponent = styled.div`
	width: 55%;
	margin: auto;
`;
const ImgBox: AnyStyledComponent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export default ({ title, description, image, link }: IPortProps) => {
	const { width } = useWindowSize();
	const active: any = {
		textDecoration: "none",
		color: "white",
	};
	if (width <= 400) {
		return (
			<Link style={active} to={link}>
				<Group>
					<Box>
						<ImgBox>
							<ImgCenter>
								{" "}
								<Logo src={image} />
							</ImgCenter>
						</ImgBox>
						<Column>
							<TextGroup>
								<Title>{title}</Title>
								<Desc>{description}</Desc>
							</TextGroup>
						</Column>
					</Box>
				</Group>
			</Link>
		);
	} else {
		return (
			<Link style={active} to={link}>
				<Group>
					<Box>
						<Logo src={image} />
						<Inline>
							<TextGroup>
								<Title>{title}</Title>
								<Desc>{description}</Desc>
							</TextGroup>
						</Inline>
					</Box>
				</Group>
			</Link>
		);
	}
};
