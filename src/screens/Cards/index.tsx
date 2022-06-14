import React from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";

import { RectButton, PanGestureHandler } from "react-native-gesture-handler";

import { Entypo } from "@expo/vector-icons";

import BbvaSVG from "../../assets/logo_bbva_blanco-big-size.svg";
import MasterCardSVG from "../../assets/mastercard.svg";
import MasterCard2SVG from "../../assets/mastercard-2.svg";
import VisaSVG from "../../assets/Visa.svg";

import { CardItem } from "../../components/CardItem";

import {
  Container,
  Header,
  GoBackButton,
  Heading,
  HeadingSimple,
  CreditCard,
  CreditCardNumber,
  CreditCardNumberGroupText,
  CreditCardFooter,
  CreditCardFooterAcoountOwnerName,
  CreditCardFooterAccountDate,
  CreditCardFooterAccountSubHeading,
  CreditCardFooterAccountHeading,
  SectionName,
  CardItemWrapper,
} from "./styles";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

const CardData = [
  {
    id: 1,
    svg: <MasterCard2SVG />,
    cardName: "Mastercard",
    cardNumber: "****9889",
  },
  {
    id: 2,
    svg: <VisaSVG />,
    cardName: "Visa black",
    cardNumber: "****8764",
  },
  {
    id: 3,
    svg: <VisaSVG />,
    cardName: "Visa black",
    cardNumber: "****8764",
  },
];

export function Cards() {
  const navigation = useNavigation<any>();
  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  function handleGoBack() {
    navigation.goBack();
  }

  const myCardButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      (positionX.value = ctx.positionX + event.translationX),
        (positionY.value = ctx.positionY + event.translationY);
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0262E9"
        translucent
      />
      <Header colors={["#0262E9", "#0054AE"]}>
        <GoBackButton onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={28} color="#CCCCCC" />
        </GoBackButton>

        <Heading>Cuentas bancarias y tarjetas</Heading>

        <HeadingSimple>
          Mantenemos tus datos financieros protegidos para que nadie vea la
          información confidencial.
        </HeadingSimple>

        <CreditCard colors={["#3E3E3E", "#0B0B0B"]}>
          <BbvaSVG />

          <CreditCardNumber>
            <CreditCardNumberGroupText>4685</CreditCardNumberGroupText>
            <CreditCardNumberGroupText>9212</CreditCardNumberGroupText>
            <CreditCardNumberGroupText>3902</CreditCardNumberGroupText>
            <CreditCardNumberGroupText>7892</CreditCardNumberGroupText>
          </CreditCardNumber>

          <CreditCardFooter>
            <CreditCardFooterAcoountOwnerName>
              Daniel Rosas
            </CreditCardFooterAcoountOwnerName>

            <CreditCardFooterAccountDate>
              <CreditCardFooterAccountSubHeading>
                Expired date
              </CreditCardFooterAccountSubHeading>
              <CreditCardFooterAccountHeading>
                09 / 24
              </CreditCardFooterAccountHeading>
            </CreditCardFooterAccountDate>

            <MasterCardSVG />
          </CreditCardFooter>
        </CreditCard>
      </Header>

      <SectionName>Mis tarjetas</SectionName>

      <FlatList
        style={{ padding: 20 }}
        data={CardData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CardItem data={item} />}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      />

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCardButtonStyle,
            {
              position: "absolute",
              bottom: 13,
              right: 22,
            },
          ]}
        >
          <ButtonAnimated style={[styles.button]}>
            <Entypo name="plus" size={36} color="#FFF" />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 65,
    height: 65,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0262E9",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
