import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

const Root = styled.nav`
    height: 72px;
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: flex-end;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    padding: 0 16px;
    gap: 16px;
`

const Blink = keyframes`  
  0% {opacity: 0};
  50% {opacity: 1};
  100% {opacity: 0};
`

const BrandContainer = styled.div`
  position: relative;
  height: auto;
  display: flex;
  align-items: center;
  user-select: none;
  font-family: 'Roboto Mono', monospace;
  .mark {
    font-size: 20px;
    margin-right: 5px;
    font-weight: bold;
  }
  > .name {
    font-size: 20px;
    font-weight: bold;
  }
  .cursor {
    width: 10px;
    height: 1rem;
    margin-left: 5px;
    border-radius: 1px;
    color: transparent;
    background-color: #00bfbf;
    display: inline-block;
    animation: 1.5s ease 0s infinite normal none running ${Blink};
  }
`

const Header = () => <Root>
    <BrandContainer>
        <span className="mark">{">"}</span>
        <span className="name">edufschmidt</span>
        <span className="cursor">|</span>
    </BrandContainer>
    <div style={{ flex: 1 }} />
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
</Root>

export default Header