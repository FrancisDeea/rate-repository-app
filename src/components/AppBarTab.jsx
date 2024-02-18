import { Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import theme from "../../theme";
import { View } from "react-native-web";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary
    },
    container: {
        padding: 3
    }
});

const AppBarTab = ({ children }) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AppBarTab;