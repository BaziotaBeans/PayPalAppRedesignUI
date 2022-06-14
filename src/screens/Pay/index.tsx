import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import BbvaSVG from "../../assets/logo_bbva_blanco.svg";

import {
  Container,
  Header,
  GoBackButton,
  GoBackButtonTitle,
  CardUser,
  CardUserHeader,
  CardUserImg,
  CardUserBody,
  CardUserBodyLeft,
  CardUserBodyLeftHeading,
  CardUserBodyLeftSubHeading,
  CardUserAmount,
  CardUserAmountTitle,
  CardUserFooter,
  CardUserFooterLeft,
  CardUserFooterLeftSubHeading,
  CardUserFooterLeftHeading,
  CardUserPayment,
  CardUserPaymentHeader,
  CardUserPaymentHeaderTitle,
  CardUserPaymentHeaderButton,
  CardUserPaymentHeaderButtonTitle,
  CardUserPaymentItem,
  CardPaymentItemGroupHeading,
  CardPaymentItemHeading,
  CardPaymentItemSubHeading,
  CardUserPaymentItemHeading,
  CardUserPaymentItemAmountLitle,
  CardUserPaymentItemAmount,
  ButtonSendNow,
  ButtonSendNowTitle,
  CardLogo,
  ButtonSendNowWrapper,
} from "./styles";

export function Pay() {
  const navigation = useNavigation<any>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F6F8FA"
        translucent
      />
      <Header>
        <GoBackButton onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
          <GoBackButtonTitle>Revisar y enviar</GoBackButtonTitle>
        </GoBackButton>
      </Header>

      <CardUser style={styles.container}>
        <CardUserHeader>
          <CardUserImg source={require("../../assets/User/JohnDoe.png")} />
          <MaterialIcons name="mode-edit" size={24} color="#999999" />
        </CardUserHeader>

        <CardUserBody>
          <CardUserBodyLeft>
            <CardUserBodyLeftHeading>John Doe</CardUserBodyLeftHeading>
            <CardUserBodyLeftSubHeading>
              johndoe@website.com
            </CardUserBodyLeftSubHeading>
          </CardUserBodyLeft>
          <CardUserAmount style={styles.shadow}>
            <CardUserAmountTitle>20,00€</CardUserAmountTitle>
          </CardUserAmount>
        </CardUserBody>

        <CardUserFooter>
          <CardUserFooterLeft>
            <CardUserFooterLeftSubHeading>Mensaje</CardUserFooterLeftSubHeading>
            <CardUserFooterLeftHeading>
              Este es el dinero de la entradas… 🎬
            </CardUserFooterLeftHeading>
          </CardUserFooterLeft>
        </CardUserFooter>
      </CardUser>

      <CardUserPayment style={styles.container}>
        <CardUserPaymentHeader>
          <CardUserPaymentHeaderTitle>Tipo de pago</CardUserPaymentHeaderTitle>
          <CardUserPaymentHeaderButton>
            <CardUserPaymentHeaderButtonTitle>
              Personal
            </CardUserPaymentHeaderButtonTitle>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="#666666"
            />
          </CardUserPaymentHeaderButton>
        </CardUserPaymentHeader>

        <CardUserPaymentItem style={styles.borderDashed}>
          <CardLogo>
            <BbvaSVG />
          </CardLogo>
          <CardPaymentItemGroupHeading>
            <CardPaymentItemHeading>BBVA</CardPaymentItemHeading>
            <CardPaymentItemSubHeading>****9889</CardPaymentItemSubHeading>
          </CardPaymentItemGroupHeading>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="#666666"
          />
        </CardUserPaymentItem>

        <CardUserPaymentItem style={styles.borderDashed}>
          <CardUserPaymentItemHeading>
            Tarifas por transacción{" "}
          </CardUserPaymentItemHeading>
          <CardUserPaymentItemAmountLitle>0,00€</CardUserPaymentItemAmountLitle>
        </CardUserPaymentItem>

        <CardUserPaymentItem style={styles.borderDashed}>
          <CardUserPaymentItemHeading>Tú pagas </CardUserPaymentItemHeading>
          <CardUserPaymentItemAmount>20,00€</CardUserPaymentItemAmount>
        </CardUserPaymentItem>
      </CardUserPayment>

      <ButtonSendNowWrapper colors={["#0262E9", "#0054AE"]} style={styles.shadow}>
        <ButtonSendNow>
          <ButtonSendNowTitle>ENVIAR AHORA</ButtonSendNowTitle>
        </ButtonSendNow>
      </ButtonSendNowWrapper>
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
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderColor: "#999999",
  },
});
