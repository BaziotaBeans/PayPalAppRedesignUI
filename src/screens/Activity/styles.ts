import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

interface OptionProps {
  active: boolean;
  index: number;
}

interface ActivityItemAmountProps {
    isNegative: boolean;
}

export const Container = styled.View`
  background-color: #f6f8fa;
  flex: 1;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  /* padding: 40px 20px 40px; */
  background-color: #fff;
  margin-bottom: 24px;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 20px 0px;
  margin-bottom: 40px;
`;

export const ButtonClose = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const ButtonCloseTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-left: 5px;
`;

export const Content = styled.View`
  background-color: #f6f8fa;
  flex: 1;
`;

export const Options = styled.View`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-around;

  
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  flex: 1;
  align-items: center;
  ${({ active, index }) =>
    active &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #025ed7;
      padding-bottom: 14px;
    `}
`;

export const OptionTitle = styled.Text<OptionProps>`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme, active }) => theme.fonts.primary_500};
  color: ${({ theme, active, index }) => (active ? "#025ED7" : "#999999")};
`;

export const Section = styled.View`
  padding: 0 20px;
  flex: 1;
`;

export const NumberOfRow = styled.Text`
  color: #666666;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  padding: 0 20px;
`;

