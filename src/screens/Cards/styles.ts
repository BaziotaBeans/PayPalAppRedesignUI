import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  background-color: #f6f8fa;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  margin-top: ${getStatusBarHeight()}px;
  margin-bottom: 20px;
  padding: 20px;
`;
export const GoBackButton = styled(TouchableOpacity)``;

export const Heading = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(20)}px;
  margin-top: 10px;
`;

export const HeadingSimple = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;
  margin-top: 10px;
  text-align: left;
  margin-bottom: 20px;
`;

export const CreditCard = styled(LinearGradient)`
  padding: 20px;
  border-radius: 20px;
  margin-bottom: -110px;
`;

export const CreditCardNumber = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

export const CreditCardNumberGroupText = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(20)}px;
  margin-right: 20px;
  margin-top: 20px;
`;

export const CreditCardFooter = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CreditCardFooterAcoountOwnerName = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(16)}px;
  text-transform: uppercase;
`;

export const CreditCardFooterAccountDate = styled.View``;

export const CreditCardFooterAccountSubHeading = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(10)}px;
  opacity: 0.6;
`;

export const CreditCardFooterAccountHeading = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
`;

export const SectionName = styled.Text`
  margin-top: 100px;
  padding: 0 20px;
  color: #001d50;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
`;


export const CardItemWrapper = styled.View`
    padding: 20px;
`;