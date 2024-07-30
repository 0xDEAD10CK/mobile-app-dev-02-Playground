import { View, Text, Button } from "react-native";

const DetailsScreen = (props) => {
    const { firstName, lastName } = props.route.params; 
    return(
        <View style= {{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Details Screen</Text>
            <Text>Name: {firstName} {lastName}</Text>
            <Button title="Go Back" onPress={() => props.navigation.goBack()}></Button>
        </View>
    );
};

export default DetailsScreen