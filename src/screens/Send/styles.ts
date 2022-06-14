import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";

interface ActivityAmountProps {
    isNegative: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #f6f8fa;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 20}px;
`;

export const UserLogged = styled.View`
  width: 38px;
  height: 38px;
  border-radius: 50px;
`;

export const UserLoggedImg = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 50px;
`;

export const UserLoggedActiveIndicator = styled.View`
  background-color: #dd0164;
  width: 8px;
  height: 8px;
  border-radius: 10px;
  position: absolute;
  right: -5px;
`;

export const PayPalCard = styled(LinearGradient)`
  width: 100%;
  border-radius: 20px;
  margin: 40px 0 20px;
  padding: 15px;
`;

export const PayPalCardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PayPalCardHeaderUserImg = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
`;

export const PayPalCardHoy = styled.View`
  background-color: #fff0b4;
  border: 2px solid #ffd202;
  padding: 5px 20px;
  border-radius: 30px;
`;

export const PayPalCardHoyHeading = styled.Text`
  color: #3a2424;
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const PayPalCardHeadingSendWrapper = styled.View`
  margin: 10px 0;
`;

export const PayPalCardHeadingSend = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const PayPalCardHeadingSendAmount = styled.Text`
  color: #fff;
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const PayPalCardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;

export const PayPalCardSeeDetailButton = styled(TouchableOpacity)`
  border: 2px solid #fff;
  padding: 10px 20px;
  border-radius: 25px;
`;

export const PayPalCardSeDetailButtonText = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const PayPalCardMessage = styled.View``;

export const PayPalCardMessageSubHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  opacity: 0.6;
`;

export const PayPalCardMessageHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;

export const SectionTitle = styled.Text`
  color: #003087;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  margin-bottom: 20px;
`;

export const SectionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SectionButton = styled(TouchableOpacity)``;

export const SectionButtonTitle = styled.Text`
  color: #025ed7;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  margin-bottom: 20px;
`;

export const ListSendNew = styled.View`
  flex-direction: row;
`;

export const CardActivity = styled.View`
  padding: 10px;
`;

export const CardActivityItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

export const CardActivityItemLeft = styled.View``;

export const CardActivityItemRight = styled.View``;

export const CardActivityItemLeftHeading = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const CardActivityItemLeftSubHeading = styled.Text`
  color: #979797;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const CardActivityItemRightHeading = styled.Text<ActivityAmountProps>`
    font-size: ${RFValue(18)}px;
    color: ${({ isNegative }) => isNegative ? '#1B1B1B' : '#00C55B'};
`;
