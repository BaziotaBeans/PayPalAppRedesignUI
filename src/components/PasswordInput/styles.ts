import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;

  border-bottom-color: #e2e1e1;
  border-bottom-width: 2px;

  background-color: #fff;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #005bb9;
    `};
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;

  background-color: #fff;
  color: #1b1b1b;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 23px;

  border-bottom-color: #e2e1e1;
  border-bottom-width: 2px;
  

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #005bb9;
    `};
`;
