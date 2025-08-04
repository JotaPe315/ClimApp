import { Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

export default function Index() {
  return (
    <LinearGradient
      colors={["#00457D", "#05051F"]}
      style={styles.conteiner}
    >
      <Image source={require('../assets/images/Logo.png')}/>
      <Image source={require('../assets/images/Ilustra1.png')}/>
      <Text style={styles.title}>
        Boas-Vindas!
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Entrar
        </Text>
        <MaterialIcons name="arrow-forward" size={24} color={"#ooo"}/>
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 64,
    paddingVertical: 79,
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 25,
    color: '#fff',
  },
  button: {
    backgroundColor: '#7693FF',
    borderRadius: 32,
    width: 297,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  }

})

