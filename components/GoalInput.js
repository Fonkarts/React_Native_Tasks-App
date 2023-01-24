import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

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
                <Image source={require('../assets/images/target.png')} style={styles.image}/>
                <TextInput
                    style={styles.text}
                    placeholder="What are you going to do today ?"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='#F94144'/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Task" onPress={addGoalHandler} color='#F9844A'/>
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
        padding: 16,
        backgroundColor: '#F9C74F'
    },
    text: {
        marginRight: 8,
        padding: 16,
        width: "100%",
        backgroundColor: '#FCE5B1',
        color: '#120438',
        borderWidth: 1,
        borderColor: "#FCE5B1",
        borderRadius: 6,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: 150,
        height: 150,
        margin: 20,
        color: 'white'
    }
})

