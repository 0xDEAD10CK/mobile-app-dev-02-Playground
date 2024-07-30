import { View, Text, Button } from "react-native";

const HomeScreen = (props) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() =>
                    props.navigation.navigate("Details", {
                        firstName: "John",
                        lastName:"Doe",
                    })
                }
            />
        </View>
    );
};

export default HomeScreen;