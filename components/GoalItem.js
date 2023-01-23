import { StyleSheet, Text, View } from "react-native";


function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalItemText}>
                {props.value}
            </Text>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalItemText: {
        color: "white",
    }
})