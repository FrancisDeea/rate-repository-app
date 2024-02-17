import { Text, View } from "react-native";

const RepositoryItem = ({ item }) => {
    const { fullName, description, language, stargazersCount: stars, forksCount: forks, reviewCount: reviews, ratingAverage: rating } = item;
    return (
        <View>
            <Text>Fullname: {fullName}</Text>
            <Text>Description: {description}</Text>
            <Text>Language: {language}</Text>
            <Text>Stars: {stars}</Text>
            <Text>Forks: {forks}</Text>
            <Text>Reviews: {reviews}</Text>
            <Text>Rating: {rating}</Text>
        </View>
    );
};

export default RepositoryItem;