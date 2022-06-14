import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ActivityItemAmountProps {
    isNegative: boolean;
}


export const Container = styled.View`
  flex-direction: row;
  /* justify-content: space-between; */
  padding: 20px 0;
`;

export const ActivityItemImg = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 48px;
  margin-right: 20px;
`;

export const ActivityItemContent = styled.View`
    margin-right: auto;
`;

export const ActivityItemUserHeading = styled.Text`
  color: #1b1b1b;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const ActivityItemUserSubHeading = styled.Text`
  color: #999999;
  font-size: ${RFValue(12.5)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const ActivityItemAmountContent = styled.View`
  align-items: flex-end;
`;

export const ActivityItemAmount = styled.Text<ActivityItemAmountProps>`
  color: ${({ isNegative }) => (isNegative ? "#666666" : "#00D090")};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const ActivityItemCurrency = styled.Text`
  color: #999999;
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
