import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CityName = () => {
    const router = useRouter()
    const searchParams = useLocalSearchParams()
    const [cityDetails, setCityDetails] = useState(null)

    const handleData = async () => {
        try {
            const response = await fetch("https://climapp-api.vercel.app/api")
            const responseJSON = await response.json()

            const city = responseJSON.find(
                (cityData) => cityData.city === searchParams.cityName
            )
            console.log(city)
            setCityDetails(city)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        handleData()
    }, [])

    return (
        <LinearGradient
            colors={["#00457D", "#05051F"]}
            style={styles.conteiner}
        >
            <SafeAreaView style={{ flex: 1, gap: 40 }}>
                <View>
                    <TouchableOpacity onPress={() => { router.back() }} style={styles.headerIcon}>
                        <MaterialCommunityIcons name="chevron-left" size={24} color={"#fff"} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{cityDetails?.city}</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.cardHeaderTitle}>Hoje</Text>
                        <Text style={styles.cardHeaderTitle}>{cityDetails?.date}</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Image source={require("../assets/images/nuvens.png")}/>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.cardTemp}>{cityDetails?.temp}°</Text>
                            <Text style={styles.cardDescription}>{cityDetails?.description}</Text>
                        </View>
                    </View>
                    <View style={{ gap: 8 }}>
                        <View style={styles.MinMaxHumidity}>
                            <Image source={require("../assets/images/iconeUmidade.png")}/>
                            <Text style={styles.rowTitle}>Umidade:</Text>
                            <Text style={styles.rowValue}>{cityDetails?.humidity}%</Text>
                        </View>
                        <View style={styles.MinMaxHumidity}>
                            <Image source={require("../assets/images/iconeTemperatura.png")}/>
                            <Text style={styles.rowTitle}>Min/Max:</Text>
                            <Text style={styles.rowValue}>{cityDetails?.forecast[0].min}°/{cityDetails?.forecast[0].max}°</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.nextDays}>
                    <View style={styles.boxDay}>
                        <Text style={styles.daysName}>
                            Amanhã{"\n"}
                            {cityDetails?.forecast[1].date}
                        </Text>
                        <Image source={require("../assets/images/solPequeno.png")}/>
                        <Text style={styles.day}>{cityDetails?.forecast[1].min}°/{cityDetails?.forecast[1].max}°</Text>
                    </View>
                    <View style={styles.boxDay}>
                        <Text style={styles.daysName}>
                            Quarta{"\n"}
                            {cityDetails?.forecast[2].date}
                        </Text>
                        <Image source={require("../assets/images/solPequeno.png")}/>
                        <Text style={styles.day}>{cityDetails?.forecast[2].min}°/{cityDetails?.forecast[2].max}°</Text>
                    </View>
                    <View style={styles.boxDay}>
                        <Text style={styles.daysName}>
                            Quinta{"\n"}
                            {cityDetails?.forecast[3].date}
                        </Text>
                        <Image source={require("../assets/images/solPequeno.png")}/>
                        <Text style={styles.day}>{cityDetails?.forecast[3].min}°/{cityDetails?.forecast[3].max}°</Text>
                    </View>
                </View>
            </SafeAreaView>


        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 40,
    },
    headerConteiner: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    headerTitle: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Montserrat_600SemiBold",
        textAlign: "center"
    },
    card: {
        width: "100%",
        borderRadius: 24,
        backgroundColor: "#4463D5",
        padding: 16,
        gap: 10,
        
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
    },
    cardHeaderTitle: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Montserrat_600SemiBold"
    },
    headerIcon: {
        position: "absolute",
        left: 0,
        zIndex: 1
    },
    cardTemp: {
        fontSize: 43,
        color: "#fff",
        fontFamily: "Montserrat_700Bold"
    },
    cardDescription: {
        color: "#fff",
        fontSize: 13,
        fontFamily: "Monserrat_400Regular"
    },
    MinMaxHumidity: {
        flexDirection: "row",
        gap: 8
    },
    rowTitle: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Montserrat_600SemiBold"
    },
    rowValue: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Montserrat_400Regular",
        marginLeft: "auto"
    },
    nextDays: {
        flexDirection: "row",
        gap: 8,
        justifyContent: "space-around"
    },
    boxDay: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 8,
        alignItems: "center",
        gap: 16,
        width: "auto"

    },
    daysName: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Montserrat_500Medium"
    },
    day: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Montserrat_600SemiBold"
    }
})

export default CityName