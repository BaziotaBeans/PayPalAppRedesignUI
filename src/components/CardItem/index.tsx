import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { SvgFromUri } from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import { SvgProps } from "react-native-svg";

import { CardName, CardNumber, CardContentWrapper } from "./styles";

interface Props extends RectButtonProps {
  data: {
    svg: React.FC<SvgProps> | any;
    cardName: string;
    cardNumber: string;
  };
}

export function CardItem({ data, ...rest }: Props) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View style={{ flexDirection: "row" }}>
            <RectButton style={styles.buttonEdit}>
              <MaterialIcons name="mode-edit" size={24} color="#fff" />
            </RectButton>
            <RectButton style={styles.buttonRemove}>
              <Feather name="trash-2" size={24} color="#fff" />
            </RectButton>
            <RectButton style={styles.buttonCancel}>
              <FontAwesome name="times" size={24} color="#fff" />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.container} {...rest}>
        <>{data.svg}</>
        <CardContentWrapper>
          <CardName>{data.cardName}</CardName>
          <CardNumber>{data.cardNumber}</CardNumber>
        </CardContentWrapper>
        <Entypo name="dots-three-vertical" size={24} color="#999999" />
      </RectButton>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginVertical: 5,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    //   fontFamily: fonts.heading,
    fontSize: 17,
    color: "red",
  },
  details: {
    alignItems: "flex-end",
  },
  timeLabel: {
    fontSize: 16,
    //   fontFamily: fonts.text,
    //   color: colors.body_light,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    //   fontFamily: fonts.heading,
    //   color: colors.body_dark,
  },
  buttonRemove: {
    width: 60,
    height: 81,
    backgroundColor: "#025ED7",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    right: 20,
    paddingLeft: 15,
    marginRight: -12,
    marginTop: 5,
    zIndex: 9,
  },
  buttonEdit: {
    width: 60,
    height: 81,
    backgroundColor: "#003087",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    right: 20,
    paddingLeft: 15,
    marginRight: -20,
    zIndex: 10,
    marginTop: 5,
  },
  buttonCancel: {
    width: 60,
    borderRadius: 8,
    height: 81,
    backgroundColor: "#006EFF",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    right: 20,
    paddingLeft: 15,
  },
});
