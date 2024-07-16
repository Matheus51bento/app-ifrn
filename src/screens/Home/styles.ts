import styled from "styled-components/native";
import React, { FC } from "react";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #fefefe;
  font-weight: bold;
`;

export const Logo = styled.Image`
  margin-top: 100px;
  margin-bottom: 70px;
  width: 120px;
  height: 160px;
`;

const commonWidth = '80%';

export const StyledInput = styled.TextInput`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  width: ${commonWidth};
  margin-top: 10px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #666666;
  padding: 10px 20px;
  border-radius: 0px;
  margin-top: 20px;
  width: ${commonWidth};
`;

export const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
