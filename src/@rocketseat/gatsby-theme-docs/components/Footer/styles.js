import styled from "@emotion/styled";

export const FooterStyled = styled.div`
  background-color: #343a40;
  color: #fafafa;
  padding: 40px;
`;

export const FooterGridStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
