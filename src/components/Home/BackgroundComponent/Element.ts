import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ElementProps = {
  icon: IconProp;
  x: number;
  y: number;
  delay: number;
};

const downward = keyframes`  
  0% {
    transform: translateY(0) translateX(0) rotate(0) scale(1.5);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  20% {
    opacity: 0.5;
  }
  80% {
    opacity: 0.5;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(100px) translateX(0px) rotate(720deg) scale(0.9);
    opacity: 0;
  }
`;

export const CustomElement = styled(FontAwesomeIcon)<ElementProps>`
  height: 30px;
  width: 30px;

  position: absolute;

  top: ${(props) => {
    if (props.y) {
      return `${props.y}%`;
    }
  }};

  left: ${(props) => {
    if (props.x) {
      return `${props.x}%`;
    }
  }};

  color: white;
  font-size: 1rem;

  border-radius: 50%;

  opacity: 0;

  animation: ${downward} infinite;
  animation-duration: 5000ms;
  animation-delay: ${(props) => {
    if (props.delay) {
      return `${props.delay}` + "s";
    }
  }};

  @include flexDisplay(row, center, center);
`;
