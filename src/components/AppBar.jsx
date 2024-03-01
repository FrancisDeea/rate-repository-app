import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import { ScrollView } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.backgroundPrimary,
    },
    row: {
        flexDirection: "row"
    }
    // ...
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.row} horizontal>
                <AppBarTab link="/">Repositories</AppBarTab>
                <AppBarTab link="/singin">Sing In</AppBarTab>
            </ScrollView>
        </View>
    );
};

export default AppBar;
