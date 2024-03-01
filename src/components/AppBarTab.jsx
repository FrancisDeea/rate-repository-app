import { Text, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import theme from "../../theme";

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary
    },
    container: {
        padding: 3
    }
});

const AppBarTab = ({ children, link }) => {
    return (
        <Link to={link}>
            <View style={styles.container}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Link>
    );
};

export default AppBarTab;