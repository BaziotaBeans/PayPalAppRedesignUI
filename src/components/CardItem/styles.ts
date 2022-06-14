import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const CardContentWrapper = styled.View`
    margin-left: 15px;
    margin-right: auto;
`;

export const CardName = styled.Text`
  color: #1b1b1b;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
`;

export const CardNumber = styled.Text`
  color: #999999;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
`;
