import React from 'react'
import styled, { keyframes } from 'styled-components'

const motion = props => keyframes`
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`

const DefaultSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: ${p => `${p.size}${p.sizeUnit}`};
  height: ${p => `${p.size}${p.sizeUnit}`};
  div {
    position: absolute;
    width: 5px;
    height: 5px;
    background: ${p => p.color};
    border-radius: 50%;
    animation: ${p => motion(p)} 1.2s linear infinite;
  }
  div:nth-child(1) {
    animation-delay: 0s;
    top: 89px;
    left: 687px;
  }
  div:nth-child(2) {
    animation-delay: -0.1s;
    top: 78px;
    left: 683px;
  }
  div:nth-child(3) {
    animation-delay: -0.2s;
    top: 69px;
    left: 674px;
  }
  div:nth-child(4) {
    animation-delay: -0.3s;
    top: 66px;
    left: 665px;
  }
  div:nth-child(5) {
    animation-delay: -0.4s;
    top: 69px;
    left: 655px;
  }
  div:nth-child(6) {
    animation-delay: -0.5s;
    top: 78px;
    left: 646px;
  }
  div:nth-child(7) {
    animation-delay: -0.6s;
    top: 89px;
    left: 643px;
  }
  div:nth-child(8) {
    animation-delay: -0.7s;
    top: 101px;
    left: 646px;
  }
  div:nth-child(9) {
    animation-delay: -0.8s;
    top: 110px;
    left: 653px;
  }
  div:nth-child(10) {
    animation-delay: -0.9s;
    top: 113px;
    left: 663px;
  }
  div:nth-child(11) {
    animation-delay: -1s;
    top: 110px;
    left: 675px;
  }
  div:nth-child(12) {
    animation-delay: -1.1s;
    top: 101px;
    left: 683px;
  }
`

const Circle = ({ color, size, sizeUnit }) => (
  <DefaultSpinner color={color} size={size} sizeUnit={sizeUnit}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </DefaultSpinner>
)

Circle.defaultProps = {
  size: 200,
  color: '#2a6662',
  sizeUnit: 'px'
}

export default Circle