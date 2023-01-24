import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
                // Setting style when pressed on Android
                android_ripple={{ color: '#F9844A' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                // Setting style when pressed on Ios
                style={({pressed}) => pressed && styles.pressedItem}
                >
                <Text style={styles.goalItemText}>
                    {props.value}
                </Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#E14D2A",
        
    },
    goalItemText: {
        padding: 8,
        color: "white",
        fontSize: 17
    },
    pressedItem: {
        opacity: 0.5,
    }
})