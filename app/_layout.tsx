import { createTheme, ThemeProvider as RNThemeProvider } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot } from "expo-router";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(app)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
const theme = createTheme();

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <RNThemeProvider theme={theme}>
        <Slot />
      </RNThemeProvider>
    </SafeAreaProvider>
  );
}
