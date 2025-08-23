import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from "react-native"

import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import citiesData from "../data/cities.json"
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

const Cities = () => {
    const router = useRouter()
    const [search, setSearch] = useState("")
    const [filteredCities, setFilteredCities] = useState(citiesData)

    useEffect(() => {
        
        const newFilteredCities = citiesData.filter((city) => 
            city.city.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

        setFilteredCities(newFilteredCities)

    }, [search])

    return (

        <LinearGradient
            colors={["#00457D", "#05051F"]}
            style={styles.conteiner}
        >
            <SafeAreaView style={{ flex: 1, gap: 10 }}>

                <View style={styles.searchInput}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Digite a cidade" placeholderTextColor={"#fff"}
                        value={search}
                        onChangeText={(value) => setSearch(value)}

                    />
                    <MaterialIcons name="search" size={24} color={"#fff"} />
                </View>

                <ScrollView>
                    <View style={styles.List}>
                        {
                            filteredCities.map(city => (
                                <TouchableOpacity onPress={() => {
                                    router.push(`/${city.city}`)
                                }} key={city.city} style={styles.listItem}>
                                    <Image style={styles.cityImage} source={require("../assets/images/Sol.png")} />
                                    <Text style={styles.cityName}>{city.city.replace(", ", " - ")}</Text>
                                    <Text style={styles.tempText}>{city.temp}°</Text>
                                </TouchableOpacity>

                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>



        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    List: {
        gap: 16
    },
    listItem: {
        height: 63,
        width: "100%",
        backgroundColor: "rgba(255,255,255, 0.15)",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 16,
        flexDirection: "row",
        paddingHorizontal: 16
    },
    cityName: {
        color: '#fff',
        fontSize: 16,
        fontFamily: "Montserrat_500Medium"
    },
    tempText: {
        color: "#fff",
        fontSize: 25,
        fontFamily: "Montserrat_700Bold"
    },
    cityImage: {
        height: 24,
        width: 27
    },
    searchInput: {
        height: 36,
        width: "100%",
        backgroundColor: "rgba(255,255,255, 0.15)",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 24,
        flexDirection: "row",
        paddingHorizontal: 16
    },
    inputText: {
        flex: 1,
        height: 36, // igual à searchInput
        color: "#fff",
        fontSize: 16,
        fontFamily: "Montserrat_500Medium",
        textAlignVertical: "center",
        paddingVertical: 0 // garante centralização
    }
})

export default Cities;