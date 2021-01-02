import React from "react";
import Typist from "react-typist";
import styled, { AnyStyledComponent } from "styled-components";
import BackButton from "./BackButton";
import { useWindowSize } from "react-use";
interface IPortProps {
	title: string;
	image: string;
	description: string;
}

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
	@media (max-width: 500px) {
		font-size: 15px;
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
	height: auto;
	width: 50%;
`;
const Desc: AnyStyledComponent = styled.div`
	padding-bottom: 4%;
	margin-top: 11%;
`;
const TextGroup: AnyStyledComponent = styled.div`
	display: flex;
	padding-left: 20px;
	width: 100%;
	font-size: 20px;
	flex-direction: column;
	@media (max-width: 500px) {
		font-size: 15px;
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
const Link: AnyStyledComponent = styled.button`
	max-width: 130px;
	height: auto;
	font-size: 20px;
	border: none;
	outline: 1px solid transparent;
	text-decoration: none;
	font-weight: 20px;
	transition: all 0.1s linear;
	margin: 2% 2% 2% 2%;
	color: white;
	background-color: #e9c46a;
	cursor: pointer;
	padding: 2%;
	&:hover {
		transform: scale(1.05);
	}
`;
const Column: AnyStyledComponent = styled.div`
	display: flex;
	flex-direction: column;
`;
const main = (
	<Group>
		<div>
			<BackButton />
		</div>

		<Title>
			{" "}
			<Inline>
				<Console>~$</Console>
			</Inline>
			<Inline>
				<Typist avgTypingDelay={100} cursor={{ show: true, blink: true }}>
					{" "}
					<Command>cd broken_lamp </Command>
				</Typist>
			</Inline>
		</Title>
		<Center>
			<Image src="https://clay.sh/img/about/mrr.png" />
			<Inline>
				<TextGroup>
					<Desc>
						Broken lamp is currently developing a hosting platform to market off
						Microsoft's push to new mincraft editions. Utilizing a bit of magic,
						we can host servers for free, all the while developing modifications
						for our servers to create a unique experience for each user.
					</Desc>
					<Inline>
						<a>
							{" "}
							<Link>GitHub</Link>
						</a>

						<Link>Live</Link>
					</Inline>
					<Tech>Tech: Express.js, React.js, TypeScript</Tech>
				</TextGroup>
			</Inline>
		</Center>
	</Group>
);

export default () => {
	const mobile = (
		<Group>
			<div>
				<BackButton />
			</div>

			<Title>
				{" "}
				<Inline>
					<Console>~$</Console>
				</Inline>
				<Inline>
					<Typist avgTypingDelay={100} cursor={{ show: true, blink: true }}>
						{" "}
						<Command>cd broken_lamp </Command>
					</Typist>
				</Inline>
			</Title>
			<Center>
				<Column>
					<Image src="https://clay.sh/img/about/mrr.png" />

					<TextGroup>
						<Desc>
							Broken lamp is currently developing a hosting platform to market
							off Microsoft's push to new mincraft editions. Utilizing a bit of
							magic, we can host servers for free, all the while developing
							modifications for our servers to create a unique experience for
							each user.
						</Desc>
						<Inline>
							<a>
								{" "}
								<Link>GitHub</Link>
							</a>

							<Link>Live</Link>
						</Inline>
						<Tech>Tech: Express.js, React.js, TypeScript</Tech>
					</TextGroup>
				</Column>
			</Center>
		</Group>
	);
	return mobile;
};
