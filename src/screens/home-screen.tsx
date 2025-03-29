import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StyledText from '../components/ui/styled-text';
import { Button } from 'react-native-paper';
import { useAuth } from '../context/auth';

const HomeScreen = () => {
    const {logout} = useAuth();
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <StyledText>Hello there</StyledText>

        <Button
          mode="contained"
          onPress={() => logout()}
          style={{
            marginVertical: 10,
            backgroundColor: "#6200ee",
            borderRadius: 8,
          }}
          labelStyle={{ fontFamily: "Bold" }}
        >
          Press Me
        </Button>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
