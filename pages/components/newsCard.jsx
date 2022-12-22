import React from "react";
import Image from "next/image";
import image from "../../public/image.png";
import styled from "styled-components";
const Card = styled.div`
  width: 90%;
  max-width: ${(prop) => (prop.align ? "1000px" : " 360px")};
  min-width: 310px;
  font-family: "Gilroy-Regular", sans-serif;
  display: flex;
  flex-direction: ${(prop) => prop.align || "column"};
  align-items: center;
  justify-content: center;
  gap: ${(prop) => (prop.align ? "1.3em" : " 1em")};
  flex: 1;
  cursor: pointer;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    min-width: 310px;
  }
  img {
    flex: 1;
    width: ${(prop) => (prop.align ? "fit-content" : "100%")};
    height: ${(prop) => (prop.align ? "100%" : "fit-content")};
  }
  div {
    flex: 3;
    flex-basis: 310px;
    width: ${(prop) => (prop.align ? "70%" : "100%")};
    @media (max-width: 900px) {
      width: 100%;
    }
    .labels {
      width: 100%;
      font-weight: 300;
      justify-content: flex-start;
      align-items: center;
      display: flex;
      gap: 1em;
      .tag {
        color: #00d1ff;
      }
    }
    .headline {
      margin: 0;
      font-weight: 500;
      font-size: 1.5rem;
      font-family: "Gilroy-Medium", sans-serif;
    }
    p {
      margin: 0;
      font-size: 1rem;
      font-family: "Gilroy-Light", sans-serif;
    }
  }
`;
export default function NewsCard({ align }) {
  return (
    <Card align={align}>
      <Image src={image} alt="headline pic" height={200} priority />
      <div>
        <span className="labels">
          <span className="tag">Health</span>.
          <span className="date">November 18th, 2022</span>
        </span>
        <h1 className="headline">
          Cybersecurity spotlight on bug bounty researcher @ahacker1
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
          maecenas odio ac diam mollis vitae, turpis adipiscing tempus. Mattis
          in vestibulum nibh sed volutpat at volutpat. Vel consequat diam in
          quisque enim, nunc leo ornare. Vitae ut quis nulla vitae odio nibh ut.
        </p>
      </div>
    </Card>
  );
}
