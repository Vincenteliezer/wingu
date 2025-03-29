import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

interface StyledTextProps {
  style?: object;
  variant?:
    | "displayLarge"
    | "displayMedium"
    | "displaySmall"
    | "headlineLarge"
    | "headlineMedium"
    | "headlineSmall"
    | "titleLarge"
    | "titleMedium"
    | "titleSmall"
    | "bodyLarge"
    | "bodyMedium"
    | "bodySmall"
    | "labelLarge"
    | "labelMedium"
    | "labelSmall"
    | undefined;
  children: React.ReactNode;
}

const StyledText: React.FC<StyledTextProps> = ({
  style,
  variant,
  children,
}) => {
  const combinedStyles = StyleSheet.compose(styles.default, style);

  return (
    <Text variant={variant} style={combinedStyles}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    lineHeight: 24,
    color: "black",
  },
});

export default StyledText;
