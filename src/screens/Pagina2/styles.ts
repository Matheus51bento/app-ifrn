import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff; /* Default background color */
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #1db863;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const StyledInput = styled.TextInput`
    background-color: #FFFFFF;
    border: 1px solid #B2B2B2;
    color: #B2B2B2;
    padding: 10px;
    border-radius: 5px;
    width: 80%;
    margin-top: 10px;
    `;

export const StyledButton = styled.TouchableOpacity`
    background-color: #1db863;
    padding: 10px 20px;
    border-radius: 0px;
    margin-top: 20px;
    width: 80%;
    border-radius: 5px;
    `;

export const ButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    `;
