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

  margin-right:0;

  background-color: #fff;

  border-bottom-color: #E2E1E1;
  border-bottom-width: 2px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #005BB9;
    `};
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;

  background-color: #fff;
  color: #1B1B1B;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 23px;

  border-bottom-color: #E2E1E1;
  border-bottom-width: 2px;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #005BB9;
    `};
`;
