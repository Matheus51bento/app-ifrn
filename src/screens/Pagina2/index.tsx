import React from 'react';
import { Container, Title, StyledInput, StyledButton, ButtonText } from './styles';
import { SafeAreaView } from "react-native";

export default function App() {
  return (

    <Container>
      <Title>Cadastro de tarefa</Title>
      <StyledInput placeholder="Título" />
      <StyledInput placeholder="Descrição" />
      <StyledInput placeholder="Categorias" />
      <StyledInput placeholder="Data" />
      <StyledButton onPress={() => {}} >
        <ButtonText>Cadastrar</ButtonText>
      </StyledButton>
    </Container>

  );
}
