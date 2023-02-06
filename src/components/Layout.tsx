import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  max-width: 800px;
`

const Layout = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  )
};

export default Layout;
