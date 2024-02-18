import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.backgroundPrimary,
    },
    // ...
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab>Repositories</AppBarTab>
        </View>
    );
};

export default AppBar;
