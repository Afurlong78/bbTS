import styled from "styled-components";
const accounting = require("../../assets/Images/accounting.jpg");
const accounting1 = require("../../assets/Images/accounting1.jpg");
const image1 = require("../../assets/Images/image1.jpg");

//new
const new1 = require("../../assets/Images/new1.jpg");
const new2 = require("../../assets/Images/new2.jpg");
const new3 = require("../../assets/Images/new3.jpg");
const new4 = require("../../assets/Images/new4.jpg");

type ImageProps = {
  index: number;
};

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
    url(${new1});
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
    url(${new4});
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

  @media all and (max-height: 700px) {
    height: 800px;
  }
`;
