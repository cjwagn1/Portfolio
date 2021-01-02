import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";
import Home from "./components/sections/Home";
import Brokenlamp from "./components/sections/BrokenLamp";

const Group: AnyStyledComponent = styled.div`
	display: flex;
	flex-direction: column;
	font-family: "Poppins", sans-serif;
	width: 100%;
`;
const Constraint: AnyStyledComponent = styled.div`
	max-width: 60em;
	margin-left: auto;
	margin-right: auto;
`;
const Footer: AnyStyledComponent = styled.div`
	font-size: 20px;
	font-weight: bold;
	padding-top: 10px;
	padding-bottom: 10px;
	justify-content: center;
	display: flex;
`;

const NotFound: React.FC<{}> = (): JSX.Element => {
	return <h1>You are lost!</h1>;
};
const MainContent: React.FC<{}> = (): JSX.Element => {
	return (
		<Switch>
			<Route exact={true} path="/" component={Home} />
			<Route path="/brokenlamp" component={Brokenlamp} />

			<Route component={NotFound} />
		</Switch>
	);
};
export default () => {
	return (
		<BrowserRouter>
			<Group>
				<Constraint>
					<MainContent />
					<Footer>©2021 Carter Wagner</Footer>
				</Constraint>
			</Group>
		</BrowserRouter>
	);
};
