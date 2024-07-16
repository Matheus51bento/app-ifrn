import React from "react";
import { Container, Title, Logo, StyledButton, ButtonText, StyledInput } from "./styles";
import ifrn from "../../assets/ifrn.png";
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    console.log("Button Pressed!");
    navigation.navigate('Details' as never);
  };

  return (
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda IFRN</Title>
      <StyledInput placeholder="Usuário" />
      <StyledInput placeholder="Senha" secureTextEntry />
      <StyledButton onPress={handlePress}>
        <ButtonText>Entrar</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default Home;
