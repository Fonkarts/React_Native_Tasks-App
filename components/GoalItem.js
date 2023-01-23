import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
                // Setting style when pressed on Android
                android_ripple={{ color: '#210644' }}
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
        backgroundColor: "#5e0acc",
    },
    goalItemText: {
        padding: 8,
        color: "white",
    },
    pressedItem: {
        opacity: 0.5,
    }
})