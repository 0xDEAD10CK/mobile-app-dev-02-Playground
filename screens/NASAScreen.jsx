import { View, Text, Button } from "react-native";

const NasaScreen = (props) => {
    return(
        <View style= {{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Image of the Day</Text>
            <Button title="Go Back" onPress={() => props.navigation.goBack()}></Button>
        </View>
    );
};

export default NasaScreen