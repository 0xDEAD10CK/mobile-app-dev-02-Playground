import { View, Text, Button } from "react-native";

const DetailsScreen = (props) => {
    return(
        <View style= {{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Details Screen</Text>
            <Button title="Go Back" onPress={() => props.navigation.goBack()}></Button>
        </View>
    );
};

export default DetailsScreen