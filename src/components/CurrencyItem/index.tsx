import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  CurrencyFlag,
  CurrencyHeading,
  CurrencyType,
} from "./styles";

interface DataProps {
  currencyName: string;
  currencyType: string;
  svg: any;
  isActive: boolean;
}

interface Props {
  data: DataProps;
}

export function CurrencyItem({ data }: Props) {
  return (
    <Container style={styles.borderDashed}>
      <CurrencyFlag style={styles.shadow}>{data.svg}</CurrencyFlag>

      <CurrencyHeading isActive={data.isActive}>
        {data.currencyName}
      </CurrencyHeading>

      {!data.isActive && <CurrencyType>{data.currencyType}</CurrencyType>}

      {data.isActive && (
        <MaterialCommunityIcons
          name="check-circle-outline"
          size={28}
          color="#00D090"
        />
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },

  borderDashed: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "#999999",
  },
});
