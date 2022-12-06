import { Text } from "../components/Text";
import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer } from "./styles";

import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { Menu } from "../components/Menu";
import { Button } from "../components/Button";

// 2hrs,09min

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </Container>
      <Footer>
        <FooterContainer >
          <Button onPress={() => alert("novo pedido")}>
            Novo Pedido
          </Button>
        </FooterContainer>
      </Footer>
    </>

  )
}