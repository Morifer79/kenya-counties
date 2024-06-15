import { AppBody } from "./components/AppBody/AppBody";
import styled from "styled-components";

const Container = styled.div`
  block-size: 100vh;
  background: center / cover no-repeat
    url("https://www.more-turiv.com.ua/wp-content/uploads/2023/11/1618104275_23-p-safari-v-afrike-zhivotnie-krasivo-foto-25-scaled.jpg");
`;

export const App = () => {
  return (
    <Container>
      <AppBody />
    </Container>
  );
};
