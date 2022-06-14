import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface CurrencyProps {
    isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #f6f8fa;
`;

export const Header = styled.View`
  background-color: #fff;
  padding: 20px 20px 25px 20px;
  margin-top: ${getStatusBarHeight()}px;
`;
export const ButtonClose = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;
export const ButtonCloseTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: #1b1b1b;
  margin-left: 5px;
`;
export const SearchBox = styled.View`
  margin-top: 30px;
`;

export const SearchIcon = styled.View`
  position: absolute;
  top: 10px;
  left: 14px;
`;

export const InputSearch = styled.TextInput`
  border: 2px solid #cccccc;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  border-radius: 30px;
  padding: 5px 10px 5px 40px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 20px;
`;
export const CurrencieItem = styled.View`
  padding: 25px 0;
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
