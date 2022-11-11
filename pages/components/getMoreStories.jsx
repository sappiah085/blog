import React from "react";
import styled from "styled-components";
const Stories = styled.div`
  width: 90%;
  max-width: 800px;
  background-color: black;
  margin: 1em auto;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  flex-direction: column;
  border-radius: 50px;
  padding: 2em;
  gap: 1em;
  h1 {
    font-size: 2rem;
    margin: 0;
  }
  h6 {
    font-weight: 300;
    font-size: 1rem;
    margin: 0;
    font-family: "Gilroy-Light", sans-serif;
  }
  .form {
    border: 1px solid white;
    border-radius: 52px;
    padding: 0.2em 0.2em 0.2em 1em;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    align-items: center;
  }
  .input {
    width: 60%;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    outline: none;
    font-family: "Gilroy-Regular", sans-serif;
    color: white;
  }
  .input::placeholder {
    font-family: "Gilroy-Regular", sans-serif;
    color: white;
    font-size: 1.2rem;
  }
  .button {
    font-family: "Gilroy-Regular", sans-serif;
    color: black;
    background-color: white;
    font-size: 1.2rem;
    border: none;
    outline: none;
    border-radius: 50px;
    padding: 0.7em 1em;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    border-radius: 50px;
    margin: 0 auto;
    .input,
    .input::placeholder,
    .button {
      font-size: 0.8rem;
    }
    h1 {
      font-size: 1.2rem;
    }
    h6 {
      font-size: 0.9rem;
    }
  }
`;
export default function GetStories() {
  return (
    <Stories>
      <h1>Get more stories like this.</h1>
      <h6>Enter your e-mail to stay updated on latest trends and news</h6>
      <form className="form">
        <input className="input" type="text" placeholder="Subscribe to mails" />
        <input className="button" type="submit" value="Subscribe" />
      </form>
    </Stories>
  );
}
