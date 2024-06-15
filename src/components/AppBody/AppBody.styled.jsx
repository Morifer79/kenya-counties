import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Container = styled.div`
  padding: ${theme.spacing(10)};
  display: flex;
  justify-content: space-around;
`;

export const FlexBox = styled.div`
  display: flex;
  gap: ${theme.spacing(5)};
`;

export const Logo = styled.img`
  inline-size: 32px;
  block-size: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  svg {
    padding: ${theme.spacing(5)};
  }
`;

export const Card = styled.div`
  h1,
  img {
    margin-block-end: ${theme.spacing(5)};
  }
  p {
    color: ${theme.colors.main};
  }
  span {
    color: ${theme.colors.secondary};
  }
`;
