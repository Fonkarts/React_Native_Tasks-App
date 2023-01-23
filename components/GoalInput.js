import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.text}
                    placeholder="Your course goal !"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel}/>
                    </View>
                </View>
                
            </View>
        </Modal>
    )
} 

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // Organizes elements around the main axis
        justifyContent: "center",
        // Organizes elements around the cross axis
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        padding: 16
    },
    text: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "100%",
        marginRight: 8,
        padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
})