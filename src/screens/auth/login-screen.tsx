import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import * as Yup from "yup";
import { Formik } from "formik";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../types/navigation";
import { useAuth } from "../../context/auth";
import StyledText from "../../components/ui/styled-text";
import { LoginCredentials } from "../../types/auth";
import { device_name } from "../../config/app-config";

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, "Login">;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const { login, isLoading, error } = useAuth();

  const [visible, setVisible] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);

  useEffect(() => {
    if (error) {
      setVisible(true);
    }
  }, [error]);

  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <SafeAreaView style={styles.base}>
      <View style={styles.logoWrapper}>
        <Image
          resizeMode="cover"
          style={styles.logo}
          source={require("../../../assets/icons/baridi-logo.png")}
        />
      </View>
      <View style={styles.welcomeTxtWrapper}>
        <StyledText
          variant="titleLarge"
          style={{
            fontFamily: "Bold",
            fontSize: 20,
          }}
        >
          Welcome back!
        </StyledText>
        <StyledText
          variant="titleLarge"
          style={{
            fontFamily: "Regular",
            fontSize: 16,
          }}
        >
          Please, Log In.
        </StyledText>
      </View>
      <Formik
        initialValues={{
          email: "",
          password: "",
          device_name: device_name,
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Email is required!"),
          password: Yup.string().required("Password is required!"),
        })}
        onSubmit={async (values: LoginCredentials) => {
          await login(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          values,
          touched,
        }) => (
          <View style={styles.cardWrapper}>
            <TextInput
              id="email"
              style={styles.input}
              label={
                <StyledText style={styles.label}>
                  {errors.email ? errors.email : "Email"}
                </StyledText>
              }
              mode="outlined"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={!!(errors.email && touched.email)}
              contentStyle={{
                fontFamily: "Regular",
              }}
              textContentType="emailAddress"
              inputMode="email"
            />

            <TextInput
              id="password"
              style={styles.input}
              label={
                <StyledText style={styles.label}>
                  {errors.password ? errors.password : "Password"}
                </StyledText>
              }
              mode="outlined"
              secureTextEntry={!passwordShow}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={!!(errors.password && touched.password)}
              right={
                <TextInput.Icon
                  onPress={handlePasswordShow}
                  icon={passwordShow ? "eye-off" : "eye"}
                />
              }
              contentStyle={{
                fontFamily: "Regular",
              }}
            />

            <Button
              loading={isLoading}
              onPress={() => handleSubmit()}
              mode="contained"
              uppercase
              style={styles.loginBtn}
              contentStyle={{
                height: 50,
              }}
              labelStyle={{ fontFamily: "Bold" }}
            >
              Login
            </Button>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20,
  },
  cardWrapper: {
    padding: 8,
    marginTop: 20,
  },
  input: {
    marginBottom: 20,
    fontFamily: "Regular",
  },
  welcomeTxtWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  logoWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 60,
    objectFit: "contain",
  },
  signUpTxtWrapper: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginBtn: {
    borderRadius: 10,
  },
  label: {
    fontFamily: "Regular",
  }
});

export default LoginScreen;
