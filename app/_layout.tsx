import { Stack } from "expo-router";
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from "@expo-google-fonts/montserrat"
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {

  const [loaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  })

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="cities" options={{ headerShown: false }} />
        <Stack.Screen name="[cityName]" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>

  );
}
