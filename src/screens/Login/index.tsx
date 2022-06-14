import React, { useState } from "react";

import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";

import PayPalSVG from "../../assets/paypal_logo_big_size.svg";

import {
  Container,
  Heading,
  SubHeading,
  Form,
  FormGroup,
  ButtonLogin,
  ButtonLoginText,
  ButtonRegister,
  ButtonRegisterText,
} from "./styles";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<any>();

  function handleAuth() {
    navigation.navigate("AuthRoutes");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="#fff"
            translucent
          />
          <PayPalSVG />

          <Heading>Bienvenido a paypal</Heading>
          <SubHeading>
            PayPal permite utilizar únicamente su dirección de correo
            electrónico para realizar y recibir pagos.
          </SubHeading>

          <Form>
            <FormGroup>
              <Input
                iconName="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
              />

              <PasswordInput
                iconName="lock"
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
              />
            </FormGroup>
          </Form>

          <ButtonLogin onPress={handleAuth}>
            <ButtonLoginText>Inicia sesión ahora</ButtonLoginText>
          </ButtonLogin>

          <ButtonRegister>
            <ButtonRegisterText>Inscribirse</ButtonRegisterText>
          </ButtonRegister>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
