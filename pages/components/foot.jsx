import React from "react";
import Link from "next/link";
import styled from "styled-components";
const FooterStyle = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  margin-top: 1em;
  display: flex;
  justify-content: space-around;
  padding: 3em 1em;
  gap: 1em;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Gilroy-Light", sans-serif;
  .name {
    font-size: 1.8rem;
  }
  .linksEx {
    display: flex;
    gap: 1em;
  }
`;
export default function Footer() {
  return (
    <FooterStyle>
      <Link className="name" href="/">
        Samuel
      </Link>
      <div className="linksEx">
        <a href="">LinkedIn</a>
        <a href="">Twitter</a>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
      </div>
      <div className="copy">
        © {new Date().getFullYear()} Samuel Appiah. All rights reserved.
      </div>
    </FooterStyle>
  );
}
