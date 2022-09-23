import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import CommonSvg from "./CommonSvg";
import GithubSvg from "@/assets/svg/github-fill.svg";

const Container = styled.div`
  position: fixed;
  padding: 18px 7.5rem;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  z-index: 1000;
  transition: 0.32s ease-in-out;
  &.sticky {
    padding: 12px 7.5rem;
    background-color: #080808;
  }
`;

const Text = styled.h1`
  font-size: 60px;
`

const Navbar = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavbarItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

const Button = styled.button`
  position: relative;
  border: 1px solid white;
  cursor: pointer;
  font-size: 18px;
  padding: 18px 34px;
  background: transparent;
  font-weight: 700;
  color: white;
  ::before {
    position: absolute;
    width: 0;
    height: 100%;
    content: "";
    top: 0;
    left: 0;
    background-color: white;
    transition: .5s ease-in-out;
  }
  &:hover {
    color: black;
    ::before {
      width: 100%;
      z-index: -1;
    }
  }
`;

const Header = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        ref.current?.classList.add("sticky")
      } else {
        ref.current?.classList.remove("sticky");
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <Container ref={ref}>
      <Text>LOGO</Text>
      <Navbar>
        <NavbarItem>
          <Link to="home" smooth>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="skills" smooth>
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="projects" smooth>
            Projects
          </Link>
        </NavbarItem>
        <CommonSvg link="https://github.com/semonTang">
          <GithubSvg className="common_svg" />
        </CommonSvg>
        <NavbarItem>
          <Link to="connect" smooth>
            <Button>Let's Connect</Button>
          </Link>
        </NavbarItem>
      </Navbar>
    </Container>
  );
}

export default Header;