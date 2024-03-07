import react from "react";
import { StyleSheet, Text, View } from "react-native";

const SettingsPage = () =>{
    
    return(
        <View style={styles.container}>
             <Text>Home Page</Text>
        </View>

    )

}

const styles = StyleSheetheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SettingsPage;