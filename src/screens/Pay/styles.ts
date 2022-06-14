import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  padding: 10px;
  background-color: #f6f8fa;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 20}px;
  margin-bottom: 20px;
`;
export const GoBackButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;
export const GoBackButtonTitle = styled.Text`
  margin-left: 10px;
  color: #1b1b1b;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(16)}px;
`;

export const CardUser = styled.View``;

export const CardUserHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardUserImg = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 56px;
`;

export const CardUserBody = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardUserBodyLeft = styled.View``;

export const CardUserBodyLeftHeading = styled.Text`
  color: #1b1b1b;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
`;

export const CardUserBodyLeftSubHeading = styled.Text`
  color: #999999;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(12)}px;
`;

export const CardUserAmount = styled.Text`
  background-color: #00d090;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 10px 20px;
  border-radius: 20px;
`;

export const CardUserAmountTitle = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
`;

export const CardUserFooter = styled.View`
  margin: 20px 0 5px;
`;
export const CardUserFooterLeft = styled.View``;

export const CardUserFooterLeftSubHeading = styled.Text`
  color: #1b1b1b;
  opacity: 0.5;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(12)}px;
`;

export const CardUserFooterLeftHeading = styled.Text`
  color: #666666;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
`;

export const CardUserPayment = styled.View`
  margin: 20px 0 0;
`;

export const CardUserPaymentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

export const CardUserPaymentHeaderTitle = styled.Text`
  color: #000;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(16)}px;
`;

export const CardUserPaymentHeaderButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const CardUserPaymentHeaderButtonTitle = styled.Text`
  color: #666666;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
`;

export const CardUserPaymentItem = styled.View`
  padding: 10px 0;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 15px 0;
`;

export const CardPaymentItemGroupHeading = styled.View`
  flex-direction: column;
  margin-left: 20px;
  margin-right: auto;
`;

export const CardPaymentItemHeading = styled.Text`
  color: #000;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(16)}px;
`;

export const CardPaymentItemSubHeading = styled.Text`
  color: #999999;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(16)}px;
`;

export const CardUserPaymentItemHeading = styled.Text`
  color: #000;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(16)}px;
`;

export const CardUserPaymentItemAmountLitle = styled.Text`
  margin-left: auto;
  color: #666666;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
`;

export const CardUserPaymentItemAmount = styled.Text`
  margin-left: auto;
  color: #00d090;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
`;

export const ButtonSendNowWrapper = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  border-radius: 40px;
  margin-top: 40px;
`;

export const ButtonSendNow = styled(TouchableOpacity)`
  padding: 25px 20px;
`;

export const ButtonSendNowTitle = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
`;

export const CardLogo = styled.View`
  background-color: #014581;
  border-radius: 40px;
  width: 50px;
  height: 50px;

  align-items: center;
  justify-content: center;
`;
