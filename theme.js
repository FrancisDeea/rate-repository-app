import { Platform } from "react-native";

const theme = {
    fonts: Platform.select({
        android: 'monospace',
        ios: 'Arial',
        default: 'System'
    }),
    colors: {
        textPrimary: '#fff',
        backgroundPrimary: "#24292e",
    },
};

export default theme;
