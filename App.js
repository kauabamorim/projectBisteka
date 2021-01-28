import React, { useState } from "react";
import { Button, Text, StyleSheet , View, ImageBackground } from "react-native";

const Bisteka = (props) => {
const image = { uri: "https://logospng.org/download/nubank/logo-nubank-roxo-1536.png" };

  const [isPeidar, setIsPeidar] = useState(true);

  return (
    <View style={styles.container}>    
      <ImageBackground source={image} style={styles.image}></ImageBackground>

      <Text style={styles.text}>
        Oi eu sou a {props.name}, e eu quero... {isPeidar ? "" : "Peidei!"}
      </Text>
1
      <Button
        onPress={() => {
          setIsPeidar(false);
        }}
        disabled={!isPeidar}
        title={"Peidar?"}
        color="#841584"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#8B10AE",
  },

  top: {
    flex: 0.10,
    backgroundColor: "white",
    borderWidth: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  text: {
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#f0f8ff",
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

})

const Cafe = () => {
  return (
    <>
      <Bisteka name="Bisteka" />
    </>
  );
}

export default Cafe;