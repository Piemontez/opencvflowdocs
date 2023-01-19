/* @jsx jsx */
import { useState, useRef, Fragment } from "react";
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";

import TableOfContents from "@rocketseat/gatsby-theme-docs/src/components/Docs/TOC";
import Sidebar from "../Sidebar";
import Header from "@rocketseat/gatsby-theme-docs/src/components/Header";
import Overlay from "@rocketseat/gatsby-theme-docs/src/components/Overlay";
import {
  ContainerHome,
  Container,
  Main,
  Children,
  NavBar,
  NavHeader,
  Nav,
  NavLink,
} from "./styles";
import Footer from "../Footer";

export default function Layout({
  children,
  disableTableOfContents,
  title,
  headings,
}) {
  const contentRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const disableTOC =
    disableTableOfContents === true || !headings || headings.length === 0;

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  const isBrowser = () => typeof window !== "undefined";
  const pathname = isBrowser() ? window.location.pathname : "";
  const groups = pathname.match(/\/([^/]*)\/{0,1}(.*)/);
  const currLang = groups?.length > 1 ? groups[1] : "pt";
  const isHome =
    pathname.endsWith("/" + currLang) ||
    pathname.endsWith("/" + currLang + "/");

  if (!currLang) {
    if (isBrowser()) {
      window.location.href += "pt";
    }
    return null;
  }

  let content;
  if (isHome) {
    content = <ContainerHome>{children}</ContainerHome>;
  } else {
    content = (
      <Container>
        <Sidebar isMenuOpen={isMenuOpen} />
        <Main>
          <Header handleMenuOpen={handleMenuOpen} />
          {title && (
            <h1
              css={css`
                display: none;

                @media (max-width: 1200px) {
                  display: block;
                }
              `}
            >
              {title}
            </h1>
          )}
          <Children ref={contentRef}>
            {title && (
              <h1
                css={css`
                  @media (max-width: 1200px) {
                    display: none;
                  }
                `}
              >
                {title}
              </h1>
            )}
            {children}
          </Children>
          <TableOfContents
            headings={headings}
            disableTOC={disableTOC}
            contentRef={contentRef}
          />
        </Main>
      </Container>
    );
  }

  return (
    <Fragment>
      <Overlay isMenuOpen={isMenuOpen} onClick={handleMenuOpen} />
      <TopHeader currLang={currLang} />
      {content}
      <Footer />
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  disableTableOfContents: PropTypes.bool,
  title: PropTypes.string,
  headings: PropTypes.array,
};

Layout.defaultProps = {
  disableTableOfContents: false,
  title: "",
  headings: null,
};

const bg = {
  backgroundColor: "#eee",
  fontWeight: "600",
  color: "rgb(0, 156, 130)",
  border: "1px solid rgb(0, 156, 130)",
};
function TopHeader({ currLang }) {
  const replaceUrl = (newLang) => {
    window.location.href = window.location.href.replace(
      `/${currLang}`,
      `/${newLang}`
    );
  };

  return (
    <NavBar>
      <NavHeader>OpenCV-FLow</NavHeader>
      <Nav>
        <NavLink
          style={currLang === "pt" ? bg : null}
          onClick={() => replaceUrl("pt")}
        >
          PT
        </NavLink>
        <NavLink
          style={currLang === "en" ? bg : null}
          onClick={() => replaceUrl("en")}
        >
          EN
        </NavLink>
      </Nav>
    </NavBar>
  );
}
