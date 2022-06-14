import React from "react";
import { StyleSheet } from "react-native";

import {
  Container,
  ActivityItemImg,
  ActivityItemContent,
  ActivityItemUserHeading,
  ActivityItemUserSubHeading,
  ActivityItemAmountContent,
  ActivityItemAmount,
  ActivityItemCurrency,
} from "./styles";

interface PropsData {
  id?: number;
  name: string;
  message: string;
  amount: string;
  currency: string;
  img: any;
  isNegative: boolean;
}

interface Props {
  data: PropsData;
}

export function ActivityItem({ data }: Props) {
  return (
    <Container style={styles.borderDashed}>
      <ActivityItemImg source={data.img} />
      <ActivityItemContent>
        <ActivityItemUserHeading>{data.name}</ActivityItemUserHeading>
        <ActivityItemUserSubHeading>{data.message}</ActivityItemUserSubHeading>
      </ActivityItemContent>

      <ActivityItemAmountContent>
        <ActivityItemAmount isNegative={data.isNegative}>
          {data.amount}
        </ActivityItemAmount>
        <ActivityItemCurrency>{data.currency}</ActivityItemCurrency>
      </ActivityItemAmountContent>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },

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
