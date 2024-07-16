import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #1db863; /* Default background color */
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 20px;
  color: #ffffff;
  width: max-content;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 20px;
  color: #ffffff;
  width: max-content;
`;

export const Content = styled.View`
  background-color: #ffffff;
  height: 100%;
`;

export const ItemContainer = styled.TouchableOpacity<{ checked: boolean }>`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  padding: 10px;
  ${({ checked }) =>
    checked
      ? `background-color: linear-gradient(#549894, #091298);`
      : "background-color: linear-gradient(#549894, #091298);"}
  border-radius: 5px;
  border-width: 0;
`;

export const ItemText = styled.Text<{ checked: boolean }>`
  font-size: 18px;
  flex: 1;
  color: ${({ checked }) => (checked ? "#1DB863" : "#333")};
  text-decoration-line: ${({ checked }) => (checked ? "line-through" : "none")};
`;

export const CustomCheckbox = styled.View<{ checked: boolean }>`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${({ checked }) => (checked ? "#1DB863" : "#333")};
  border-radius: 4px;
  background-color: ${({ checked }) => (checked ? "#1DB863" : "transparent")};
`;

export const CheckboxImage = styled.Image`
  width: 6px;
  height: 6px;
`;

export const TrashImage = styled.Image`
  width: 30px;
  height: 30px;
`;
