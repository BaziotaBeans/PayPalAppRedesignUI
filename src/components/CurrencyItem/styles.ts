import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface CurrencyProps {
    isActive: boolean;
}

export const Container = styled.View`
  padding: 20px 0;
  flex-direction: row;
  align-items: center;
`;

export const CurrencyFlag = styled.View`
  background-color: #fff;
  padding: 12px;
  border-radius: 3px;
  margin-right: 15px;
`;

export const CurrencyHeading = styled.Text<CurrencyProps>`
  color: ${({ isActive }) => (isActive ? "#1B1B1B" : "#999999")};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-right: auto;
`;

export const CurrencyType = styled.Text`
  color: #999999;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

