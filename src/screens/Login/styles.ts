import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  margin-top: ${getStatusBarHeight() + 20}px;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px 20px 20px;
`;

export const Heading = styled.Text`
  color: #003087;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  margin: 40px 0 20px;
`;

export const SubHeading = styled.Text`
  color: #999999;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-align: center;
`;

export const Form = styled.View`
  width: 100%;
  margin: 30px 0 40px;
  padding: 0 20px;
`;

export const FormGroup = styled.View`
  margin: 10px 0;
`;

export const ButtonLogin = styled(TouchableOpacity)`
  background-color: #005bb9;
  width: 100%;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
`;

export const ButtonLoginText = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  padding: 10px 0;
`;

export const ButtonRegister = styled(TouchableOpacity)`
  background-color: #999999;
  width: 100%;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ButtonRegisterText = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  padding: 10px 0;
`;
