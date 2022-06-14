import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  align-items: center;
  margin-right: 15px;
`;

export const SendNewItemImg = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 40px;
`;

export const Heading = styled.Text`
  color: #666666;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-top: 5px;
`;
