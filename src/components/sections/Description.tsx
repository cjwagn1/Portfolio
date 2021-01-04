import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Group: AnyStyledComponent = styled.div`
	display: flex;
	padding-top: 10%;
	width: 100%;
	justify-content: center;
	color: white;
`;
const Overview: AnyStyledComponent = styled.div`
	display: flex;
`;

const Box: AnyStyledComponent = styled.div`
	height: auto;
	width: auto;
	margin: 10px;
	padding: 6%;
	background-color: #2a9d8f;
	margin-top: 20px;
	margin-bottom: 20px;
	border-radius: 12px;

	padding-bottom: 5px;
	@media (max-width: 900px) {
		margin: 30px;
	}
`;
const Name: AnyStyledComponent = styled.div`
	display: flex;
	padding-top: 2%;
	justify-content: center;
	font-weight: bold;
	padding-bottom: 5%;
	font-size: 20px;
`;
const Picture: AnyStyledComponent = styled.img`
	display: block;
	width: 100%;
	max-width: 150px; /*actual image width*/
	height: auto; /* maintain aspect ratio*/
	margin: auto; /*optional centering of image*/
	border-radius: 50%;
`;
const Description: AnyStyledComponent = styled.div`
	display: flex;
	justify-content: center;
	font-size: 20px;
`;

const ImageBox: AnyStyledComponent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const ImageWrap: AnyStyledComponent = styled.div`
	width: 55%; /*or whatever you choose*/
	margin: auto;
`;
const HelloButton: AnyStyledComponent = styled.a`
	outline: none;
	border: none;
	padding-top: 2px;
	margin-top: 10px;
	padding: 3px;
	margin-bottom: 4%;
	padding-left: 5px;
	color: white;
	border-radius: 10px;
	background: #e76f51;
	cursor: pointer;
	text-decoration: none;
	font-size: 20px;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: #6898fc;
	}
`;
const Inline: AnyStyledComponent = styled.div`
	display: inline-block;
`;
const IconGroup: AnyStyledComponent = styled.div`
	display: flex;
	justify-content: center;
`;
const Icon: AnyStyledComponent = styled.img`
	width: 25px;
	height: auto;
	padding: 5px;
	transition: all 0.1s linear;
	cursor: pointer;
	outline: 1px solid transparent;
	&:hover {
		transform: scale(1.05);
	}
`;
export default () => {
	return (
		<Overview>
			<Group>
				<Box>
					<ImageBox>
						<ImageWrap>
							<Picture src="https://avatars1.githubusercontent.com/u/37089795?s=400&u=cbcd95471dbf4445a88d80345c043b4fa05d48fa&v=4" />
						</ImageWrap>
					</ImageBox>
					<Name>Carter Wagner</Name>
					<Description>
						Hi! I'm a computer engineering major at Missouri S&T. I'm super
						passionate about full stack development and meeting new people!
					</Description>

					<ImageBox>
						<HelloButton href="mailto:cjwagn1@gmail.com">
							Say hello! <span role="img">👋</span>
						</HelloButton>
					</ImageBox>
					<IconGroup>
						<Inline>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://www.linkedin.com/in/carterwagner/"
							>
								<Icon src="https://i.imgur.com/4KTtKcj.png" />
							</a>
						</Inline>
						<Inline>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://github.com/cjwagn1"
							>
								<Icon src="https://i.imgur.com/UJ8XyyC.png" />
							</a>
						</Inline>
						<Inline>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://drive.google.com/file/d/1B95vpei96rWAWLG5zn_x40lOM0PF1z5g/view?usp=sharing"
							>
								<Icon src="https://i.imgur.com/PX3Sc8n.png" />
							</a>
						</Inline>
					</IconGroup>
				</Box>
			</Group>
		</Overview>
	);
};
