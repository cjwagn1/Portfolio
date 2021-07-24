import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import BigBox from "../common/BigBox";

const Box: AnyStyledComponent = styled.div`
  height: auto;
  color: white;
  width: auto;

  margin: 10px;
  padding: 3%;
  background-color: #2a9d8f;
  border-radius: 12px;
  font-size: 20px;
  box-shadow: 0px 4px 30px rgba(26, 26, 29 0.5);
  @media (max-width: 900px) {
    margin: 30px;
  }
`;

const ProjectBox: AnyStyledComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Title: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;

  padding-bottom: 15px;
`;
const Project: AnyStyledComponent = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;
const ProjectCenter: AnyStyledComponent = styled.div`
  justify-content: center;
`;
export default () => {
  return (
    <div>
      <Box>
        {/* <Typist cursor={{ show: false }}> */}
        <Title>Portfolio</Title>
        {/* </Typist> */}
        <ProjectCenter>
          <ProjectBox>
            <Project>
              <BigBox
                title="Broken Lamp"
                description="Lead developer"
                image="https://avatars2.githubusercontent.com/u/56781177?s=200&v=4"
                link="/brokenlamp"
              />
              <BigBox
                title="ACM"
                description="Web chair"
                image="https://cdn.mstacm.org/static/acm-logo.png"
                link="/acm"
              />
              <BigBox
                title="PickHacks"
                description="Frontend developer"
                image="https://pickhacks.io/images/pickhacks-logo.png"
                link="/pickhacks"
              />
              <BigBox
                title="Chihuahua Rescue Midwest"
                description="Frontend developer"
                image="https://www.chihuahuarescuemidwest.org/static/dogLogo-b78630d0ba87dfdd792f62feede14129.png"
                link="/chihuahua"
              />
            </Project>
          </ProjectBox>
        </ProjectCenter>
      </Box>
    </div>
  );
};
