import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/login-screen";
import RegisterScreen from "../screens/auth/register-screen";

const AuthLayout = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AuthLayout.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <AuthLayout.Screen name="Login" component={LoginScreen} />
      <AuthLayout.Screen name="Register" component={RegisterScreen} />
      {/* <AuthLayout.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <AuthLayout.Screen name="ResetPassword" component={ResetPasswordScreen} /> */}
    </AuthLayout.Navigator>
  );
};

export default AuthStack;
