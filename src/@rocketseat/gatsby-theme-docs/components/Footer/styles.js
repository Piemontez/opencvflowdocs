import styled from "@emotion/styled";

export const FooterStyled = styled.div`
  background-color: rgb(33, 37, 41);
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

export const P = styled.p`
  color: rgba(255, 255, 255, 0.65);
`;

export const A = styled.a`
  color: rgba(255, 255, 255, 0.65);
`;
