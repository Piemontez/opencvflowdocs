import React from "react";
import PropTypes from "prop-types";
//import { useStaticQuery, graphql } from "gatsby";
import { useSidebar } from "@rocketseat/gatsby-theme-docs-core";

import {
  Container,
  List,
  Heading,
  Item,
  SubItem,
} from "@rocketseat/gatsby-theme-docs/src/components/Sidebar/styles";
import { isExternalUrl } from "@rocketseat/gatsby-theme-docs/src/util/url";
import ExternalLink from "@rocketseat/gatsby-theme-docs/src/components/Sidebar/ExternalLink";
import InternalLink from "@rocketseat/gatsby-theme-docs/src/components/Sidebar/InternalLink";

function ListWithSubItems({ children, text }) {
  return (
    <>
      <Heading>{text}</Heading>
      <SubItem>{children}</SubItem>
    </>
  );
}

export default function Sidebar({ isMenuOpen }) {
  /*const {
    site: {
      siteMetadata: { basePath },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          basePath
        }
      }
    }
  `);*/
  const data = useSidebar();

  const isBrowser = () => typeof window !== "undefined";
  const pathname = isBrowser() ? window.location.pathname : "";
  const groups = pathname.match(/\/([^/]*)\/{0,1}(.*)/);
  const currLang = "/" + (groups?.length > 1 ? groups[1] : "pt");
  const isHome =
    pathname.endsWith("/" + currLang) ||
    pathname.endsWith("/" + currLang + "/");

  if (isHome) {
    return null;
  }

  function renderLink(link, label) {
    return isExternalUrl(link) ? (
      <ExternalLink link={link} label={label} />
    ) : (
      <InternalLink link={link} label={label} />
    );
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      {/*<LogoContainer>
        <Link to={basePath} aria-label="Go to home page">
          <Logo aria-hidden="true" />
        </Link>
  </LogoContainer>*/}
      <nav>
        <List>
          {data
            .filter(({ node }) => (node.link || "").startsWith(currLang))
            .map(({ node: { label, link, items, id } }) => {
              if (Array.isArray(items)) {
                const subitems = items.map((item) => (
                  <Item key={item.link}>
                    {renderLink(item.link, item.label)}
                  </Item>
                ));

                return (
                  <ListWithSubItems key={id} text={label}>
                    {subitems}
                  </ListWithSubItems>
                );
              }

              return <Item key={id}>{renderLink(link, label)}</Item>;
            })}
        </List>
      </nav>
    </Container>
  );
}

ListWithSubItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
