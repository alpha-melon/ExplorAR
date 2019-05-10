import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import LinearGradient from "react-native-linear-gradient";

export default class Splash extends Component {
  async componentDidMount() {
    setTimeout(() => {
      this.props.goToLogin();
    }, 3000);
  }

  render() {
    return (
      <LinearGradient
        colors={["#3232A0", "#05058C", "#050573"]}
        style={styles.container}
      >
        <Text style={styles.welcome}>
          Expl
          <Icon name="globe-americas" size={30} />r
          <Text style={{ fontStyle: "italic" }}>AR</Text>
        </Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "#8090be"
  },
  welcome: {
    fontSize: 50,
    color: "#ffffff",
    textAlign: "center",
    margin: 10
  }
});
