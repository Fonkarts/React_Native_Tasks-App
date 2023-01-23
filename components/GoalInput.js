import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    // Calls the "addGoalHandler" function from App.js with
    // the "enteredGoalText" state.
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
                <TextInput
                    style={styles.text}
                    placeholder="Your course goal !"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <Button
                    title="Add Goal"
                    color="blue"
                    onPress={addGoalHandler}
                />
        </View>
    )
} 

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        // Organizes elements around the main axis
        justifyContent: "space-between",
        // Organizes elements around the cross axis
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    text: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
})