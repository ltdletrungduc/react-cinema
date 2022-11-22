import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
  background: #000;
`
export const HeaderButtonMenu = styled.button`
  width: 75px;
  height: 75px;
  background: #2b2b2b;
  position: relative;
  text-align: center;
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 5px;
  cursor: pointer;
  span {
    width: 35px;
    height: 6px;
    background-color: #ccda2d;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -18px;
    &:first-child {
      margin-top: -25px;
    }
    &:nth-child(2) {
      margin-top: -13px;
    }
    &:last-child {
      margin-top: 10px;
    }
  }
  .button-text {
    color: #ccda2d;
  }
`