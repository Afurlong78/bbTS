import styled, { keyframes, css } from "styled-components";
const accounting = require("../../assets/Images/accounting.jpg");
const calculator = require("../../assets/Images/calculator.jpg");
const accounting1 = require("../../assets/Images/accounting1.jpg");
const piggyBank = require("../../assets/Images/piggyBank.jpg");
const image1 = require("../../assets/Images/image1.jpg");

type ImageProps = {
  index: number;
};

const first = keyframes`
  from {
    transform: scale(1.3);

  }to{
    transform: scale(1.0) ;
  }
`;

const firstAnimation = css`
  animation: ${first} 10000ms ease-in-out infinite;
`;

export const Image1 = styled.div<ImageProps>`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.7)
    ),
    url(${accounting});
  background-size: cover;
  background-position: center;

  transition: ${(props) => {
    if (props.index === 1) {
      return `opacity 800ms ease-in-out`;
    } else {
      return `opacity 350ms ease-in-out`;
    }
  }};

  opacity: ${(props) => {
    if (props.index === 1) {
      return `1`;
    } else {
      return `0`;
    }
  }};

  /* ${firstAnimation}; */

  @media all and (max-height: 700px) {
    height: 800px;
  }
`;

export const Image2 = styled.div<ImageProps>`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.7)
    ),
    url(${calculator});
  background-size: cover;
  background-position: center;

  transition: ${(props) => {
    if (props.index === 2) {
      return `opacity 800ms ease-in-out`;
    } else {
      return `opacity 350ms ease-in-out`;
    }
  }};

  opacity: ${(props) => {
    if (props.index === 2) {
      return `1`;
    } else {
      return `0`;
    }
  }};

  /* ${firstAnimation}; */

  @media all and (max-height: 700px) {
    height: 800px;
  }
`;

export const Image3 = styled.div<ImageProps>`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.7)
    ),
    url(${accounting1});
  background-size: cover;
  background-position: center;

  transition: ${(props) => {
    if (props.index === 3) {
      return `opacity 800ms ease-in-out`;
    } else {
      return `opacity 350ms ease-in-out`;
    }
  }};

  opacity: ${(props) => {
    if (props.index === 3) {
      return `1`;
    } else {
      return `0`;
    }
  }};

  /* ${firstAnimation}; */

  @media all and (max-height: 700px) {
    height: 800px;
  }
`;

export const Image4 = styled.div<ImageProps>`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.7)
    ),
    url(${piggyBank});
  background-size: cover;
  background-position: center;

  transition: ${(props) => {
    if (props.index === 4) {
      return `opacity 800ms ease-in-out`;
    } else {
      return `opacity 350ms ease-in-out`;
    }
  }};

  opacity: ${(props) => {
    if (props.index === 4) {
      return `1`;
    } else {
      return `0`;
    }
  }};

  /* ${firstAnimation}; */

  @media all and (max-height: 700px) {
    height: 800px;
  }
`;

export const Image5 = styled.div<ImageProps>`
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.7)
    ),
    url(${image1});
  background-size: cover;
  background-position: center;

  transition: ${(props) => {
    if (props.index === 5) {
      return `opacity 800ms ease-in-out`;
    } else {
      return `opacity 350ms ease-in-out`;
    }
  }};

  opacity: ${(props) => {
    if (props.index === 5) {
      return `1`;
    } else {
      return `0`;
    }
  }};

  /* ${firstAnimation}; */

  @media all and (max-height: 700px) {
    height: 800px;
  }
`;
