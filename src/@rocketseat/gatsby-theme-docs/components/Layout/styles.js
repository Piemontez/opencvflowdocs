import styled from '@emotion/styled';

export const ContainerHome = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (max-width: 780px) {
    padding: 24px;
    grid-template-columns: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;

  display: grid;
  grid-template-columns: 280px calc(100% - 320px);
  grid-auto-flow: row;
  grid-gap: 40px;

  @media (max-width: 780px) {
    padding: 24px;
    grid-template-columns: 100%;
  }
`;

export const Main = styled.main`
  height: 100%;
  padding-top: 36px;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 780px) {
    padding-top: 0;
  }
`;

export const Children = styled.div`
  width: 100%;
  max-width: calc(75% - 64px);
  padding-right: 64px;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding-right: 0;
    order: 3;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;


export const NavBar = styled.div`
  width: 100%;
  line-height: 30px;
  padding: 10px 30px;
  display: flex;
  flex-wrap: inherit;
  flex-basis: auto;
  align-items: center;
  justify-content: space-between;
  background-color: #343a40;
  color: #fafafa;
  border-bottom: 1px solid #dddddd;
`;

export const NavHeader = styled.div`
`;

export const Nav = styled.div`
  display: flex; 
  flex-direction: row
`;

export const NavLink = styled.div`
  cursor: pointer;
  padding: 2px 7px;
  border-radius: 8px;
`;
