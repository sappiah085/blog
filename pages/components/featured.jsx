import React from "react";
import NewsCard from "./newsCard";
import styled from "styled-components";
const Feature = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  margin: 1em 0;
  margin: 0 auto;
  flex-direction: column;
  padding: 1em;
  align-items: flex-start;
  h4 {
    font-family: "Gilroy-Light", sans-serif;
    font-size: 1.2rem;
  }
  .cards {
    width: 100%;
    display: flex;
    flex-direction: ${(prop) => prop.alignContainer || "row"};
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1.5em;
  }
`;
const Counter = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 0.7em;
  font-family: "Gilroy-Medium", sans-serif;
  font-size: 1.2rem;
  .number {
    border: 0.5px solid lightgrey;
    height: 2em;
    outline: none;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2em;
    border-radius: 5px;
    text-align: center;
    box-shadow: 1px 1px 1px rgba(128, 128, 128, 0.094);
  }
  button {
    border: none;
    outline: none;
    padding: 0.2em 0.5em;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: rgba(128, 128, 128, 0.394);
  }
  button:disabled {
    background-color: rgba(128, 128, 128, 0.094);
  }
`;
export default function Featured({ title, align, alignContainer, counter }) {
  return (
    <Feature alignContainer={alignContainer} className="featured">
      <h4>{title}</h4>
      <div className="cards">
        <NewsCard align={align} />
        <NewsCard align={align} />
        <NewsCard align={align} />
        {counter ? (
          <Counter>
            <span>Page</span>
            <input type="text" className="number" value={1} />
            of 200
            <button disabled={true}>{"<"}</button>
            <button>{">"}</button>
          </Counter>
        ) : (
          ""
        )}
      </div>
    </Feature>
  );
}
