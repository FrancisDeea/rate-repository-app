import { Image, Text, View, StyleSheet } from "react-native";

const RepositoryItem = ({ item }) => {
    const {
        ownerAvatarUrl: avatar,
        fullName,
        description,
        language,
        stargazersCount: stars,
        forksCount: forks,
        reviewCount: reviews,
        ratingAverage: rating,
    } = item;

    const formatForks = (forks >= 1000 ? (forks / 1000).toFixed(1) + "k" : forks).toString().replace('.0k', 'k')
    const formatStars = (stars >= 1000 ? (stars / 1000).toFixed(1) + "k" : stars).toString().replace('.0k', 'k')

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            backgroundColor: "#ebebeb",
            display: "flex",
            gap: 10
        },
        avatar: {
            width: 40,
            height: 40,
        },
        flexRow: {
            display: 'flex',
            flexDirection: 'row',
            gap: 10
        },
        flexCol: {
            display: 'flex',
            flexDirection: 'column',
            gap: 5
        },
        flexColRev: {
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5
        },
        text: {
            fontWeight: "bold"
        },
        language: {
            padding: 5,
            borderRadius: 5,
            backgroundColor: "#0067e6",
            color: "white",
            width: "max-content"
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <Image style={styles.avatar} source={{ uri: avatar }} />
                <View style={styles.flexCol}>
                    <Text style={styles.text}>{fullName}</Text>
                    <Text>{description}</Text>
                    <Text style={styles.language}>{language}</Text>
                </View>
            </View>
            <View style={styles.flexRow}>
                <View style={styles.flexColRev}>
                    <Text>Stars</Text>
                    <Text style={styles.text}>{formatStars}</Text>
                </View>
                <View style={styles.flexColRev}>
                    <Text>Forks</Text>
                    <Text style={styles.text}>{formatForks}</Text>
                </View>
                <View style={styles.flexColRev}>
                    <Text>Reviews</Text>
                    <Text style={styles.text}>{reviews}</Text>
                </View>
                <View style={styles.flexColRev}>
                    <Text>Rating</Text>
                    <Text style={styles.text}>{rating}</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;
