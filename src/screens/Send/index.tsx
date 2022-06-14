import React from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import { SendNewItem } from "../../components/SendNewItem";

import PayPalSVG from "../../assets/paypal_logo.svg";

import {
  Container,
  Header,
  UserLogged,
  UserLoggedImg,
  UserLoggedActiveIndicator,
  PayPalCard,
  PayPalCardHeader,
  PayPalCardHeaderUserImg,
  PayPalCardHoy,
  PayPalCardHoyHeading,
  PayPalCardHeadingSendWrapper,
  PayPalCardHeadingSend,
  PayPalCardHeadingSendAmount,
  PayPalCardFooter,
  PayPalCardSeeDetailButton,
  PayPalCardSeDetailButtonText,
  PayPalCardMessage,
  PayPalCardMessageSubHeading,
  PayPalCardMessageHeading,
  SectionTitle,
  SectionWrapper,
  SectionButton,
  SectionButtonTitle,
  CardActivityItem,
  CardActivityItemLeft,
  CardActivityItemRight,
  CardActivityItemLeftHeading,
  CardActivityItemLeftSubHeading,
  CardActivityItemRightHeading,
} from "./styles";

export const SendUserData = [
  {
    id: 1,
    name: "Carlos Roca",
    img: require("../../assets/User/CarlosRoca.png"),
  },
  {
    id: 2,
    name: "Ruby Sanz",
    img: require("../../assets/User/RubySanz.png"),
  },
  {
    id: 3,
    name: "Mary Rich",
    img: require("../../assets/User/MaryRich.png"),
  },
  {
    id: 4,
    name: "John doe",
    img: require("../../assets/User/JohnDoe.png"),
  },
  {
    id: 5,
    name: "Lucas Santo",
    img: require("../../assets/User/CarlosRoca.png"),
  },
  {
    id: 6,
    name: "Carlos Roca",
    img: require("../../assets/User/CarlosRoca.png"),
  },
];

export function Send() {
  const renderSendUserItem = ({ item }) => (
    <SendNewItem data={item} onPress={handlePay} />
  );

  const navigation = useNavigation<any>();

  function handlePay() {
    navigation.navigate("Pay");
  }

  function handleActivity() {
    navigation.navigate("Activity");
  }

  function handleCurrencies() {
    navigation.navigate("Currencies");
  }

  return (
    <Container
      contentContainerStyle={{ paddingBottom: 130 }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f6f8fa"
        translucent
      />

      <Header>
        <UserLogged>
          <UserLoggedImg source={require("../../assets/Beans.jpeg")} />
          <UserLoggedActiveIndicator />
        </UserLogged>

        <PayPalSVG />

        <TouchableOpacity onPress={handleCurrencies}>
          <Ionicons name="settings-sharp" size={24} color="#666666" />
        </TouchableOpacity>
      </Header>

      <PayPalCard
        colors={["#0262E9", "#0054AE"]}
        style={styles.shadow}
        start={{ y: 0.0, x: 0.0 }}
        end={{ y: 0.0, x: 1.0 }}
      >
        <PayPalCardHeader>
          <PayPalCardHeaderUserImg
            style={{ resizeMode: "cover" }}
            source={require("../../assets/User/Nina.png")}
          />
          <PayPalCardHoy>
            <PayPalCardHoyHeading>Hoy</PayPalCardHoyHeading>
          </PayPalCardHoy>
        </PayPalCardHeader>

        <PayPalCardHeadingSendWrapper>
          <PayPalCardHeadingSend>Nina te ha enviado</PayPalCardHeadingSend>
          <PayPalCardHeadingSendAmount>20,00€</PayPalCardHeadingSendAmount>
        </PayPalCardHeadingSendWrapper>

        <PayPalCardFooter>
          <PayPalCardSeeDetailButton>
            <PayPalCardSeDetailButtonText>
              VER DETALLES
            </PayPalCardSeDetailButtonText>
          </PayPalCardSeeDetailButton>

          <PayPalCardMessage>
            <PayPalCardMessageSubHeading>Mensaje</PayPalCardMessageSubHeading>
            <PayPalCardMessageHeading>
              Por la cena...🍕
            </PayPalCardMessageHeading>
          </PayPalCardMessage>
        </PayPalCardFooter>
      </PayPalCard>

      <SectionTitle>Enviar de nuevo</SectionTitle>

      <FlatList
        data={SendUserData}
        keyExtractor={(item) => item.id}
        renderItem={renderSendUserItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <SectionWrapper>
        <SectionTitle>Actividad</SectionTitle>
        <SectionButton onPress={handleActivity}>
          <SectionButtonTitle>Ver más movimientos</SectionButtonTitle>
        </SectionButton>
      </SectionWrapper>

      <View style={styles.cardActivity}>
        <CardActivityItem style={styles.borderDashed}>
          <CardActivityItemLeft>
            <CardActivityItemLeftHeading>
              El corte inglés
            </CardActivityItemLeftHeading>
            <CardActivityItemLeftSubHeading>
              Pago aceptado
            </CardActivityItemLeftSubHeading>
          </CardActivityItemLeft>

          <CardActivityItemRight>
            <CardActivityItemRightHeading isNegative>
              -50€
            </CardActivityItemRightHeading>
          </CardActivityItemRight>
        </CardActivityItem>

        <CardActivityItem style={styles.borderDashed}>
          <CardActivityItemLeft>
            <CardActivityItemLeftHeading>
              El corte inglés
            </CardActivityItemLeftHeading>
            <CardActivityItemLeftSubHeading>
              Pago aceptado
            </CardActivityItemLeftSubHeading>
          </CardActivityItemLeft>

          <CardActivityItemRight>
            <CardActivityItemRightHeading isNegative={false}>
              650€
            </CardActivityItemRightHeading>
          </CardActivityItemRight>
        </CardActivityItem>

        <CardActivityItem>
          <CardActivityItemLeft>
            <CardActivityItemLeftHeading>
              El corte inglés
            </CardActivityItemLeftHeading>
            <CardActivityItemLeftSubHeading>
              Pago aceptado
            </CardActivityItemLeftSubHeading>
          </CardActivityItemLeft>

          <CardActivityItemRight>
            <CardActivityItemRightHeading isNegative={false}>
              250€
            </CardActivityItemRightHeading>
          </CardActivityItemRight>
        </CardActivityItem>
      </View>
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
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 5,
  },

  cardActivity: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
  },

  borderDashed: {
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    borderStyle: "dashed",
    borderColor: "#999999",
  },
});
