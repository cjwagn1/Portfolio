import React from "react";
import Typist from "react-typist";
import styled, { AnyStyledComponent } from "styled-components";
import BackButton from "../common/BackButton";

const Group: AnyStyledComponent = styled.div`
	display: flex;
	flex-direction: column;
	color: white;
	font-family: "Poppins", sans-serif;
`;

const Title: AnyStyledComponent = styled.div`
	font-size: 30px;
	color: #2a9d8f;
	padding-bottom: 6%;
	padding-top: 6%;
	@media (max-width: 1000px) {
		padding-left: 10px;
	}
`;
const Console: AnyStyledComponent = styled.span`
	color: #2a9d8f;
`;
const Command: AnyStyledComponent = styled.span`
	color: #e76f51;
`;

const Inline: AnyStyledComponent = styled.div`
	display: inline-block;
`;
const Image: AnyStyledComponent = styled.img`
	display: flex;
	width: 90%;
	height: 200px;
	@media (max-width: 611px) {
		height: auto;
	}
`;
const Desc: AnyStyledComponent = styled.div`
	padding-bottom: 4%;
	margin-top: 11%;
`;
const TextGroup: AnyStyledComponent = styled.div`
	display: flex;

	font-size: 20px;
	flex-direction: column;
	@media (max-width: 1000px) {
		padding-left: 10px;
		width: 90%;
	}
`;
const Center: AnyStyledComponent = styled.div`
	display: flex;
	align-items: center;
`;
const Tech: AnyStyledComponent = styled.div`
	font-size: 20px;
	padding-top: 3%;
	padding-botom: 3%;
	font-weight: bold;
`;
const LinkButton: AnyStyledComponent = styled.button`
	width: 100px;
	height: auto;
	font-size: 20px;
	border: none;
	outline: 1px solid transparent;
	text-decoration: none;
	font-weight: 20px;
	transition: all 0.1s linear;
	margin: 2% 2% 2% 2%;
	color: white;
	background-color: #e76f51;
	cursor: pointer;
	padding: 10px;
	&:hover {
		transform: scale(1.05);
	}
	@media (max-width: 1000px) {
		width: 100px;
	}
`;
const Column: AnyStyledComponent = styled.div`
	display: flex;
	flex-direction: column;
`;

const ImageGroup: AnyStyledComponent = styled.div`
	display: grid;

	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	@media (max-width: 1000px) {
		justify-items: center;
	}
`;

export default () => {
	return (
		<Group>
			<BackButton />

			<Title>
				<Inline>
					<Console>~$</Console>
				</Inline>
				<Inline>
					<Typist avgTypingDelay={100} cursor={{ show: true, blink: true }}>
						<Command>cd ACM </Command>
					</Typist>
				</Inline>
			</Title>
			<Center>
				<Column>
					<ImageGroup>
						<Image src="https://i.imgur.com/w3tkitX.png" />
						<Image src="https://i.imgur.com/kTvvyOv.png" />
					</ImageGroup>

					<TextGroup>
						<Desc>
							I'm in charge of leading the web development branch of the
							Association for Computing Machinery organization. I develop
							administration tools to help manage the organization as a whole.
						</Desc>
						<Inline>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://github.com/sigdotcom/mstacm.org"
							>
								<LinkButton>GitHub</LinkButton>
							</a>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://mstacm.org/"
							>
								<LinkButton>Live</LinkButton>
							</a>
						</Inline>
						<Tech>Tech: React.js, TypeScript</Tech>
					</TextGroup>
				</Column>
			</Center>
		</Group>
	);
};
