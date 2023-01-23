import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            {text: enteredGoalText, id: Math.random().toString()},
        ]);
    }

    function deleteItemHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id)
        })
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList 
                    data={courseGoals} 
                    renderItem={itemData => {
                        return (
                            <GoalItem 
                                value={itemData.item.text} 
                                onDeleteItem={deleteItemHandler}
                                id={itemData.item.id}
                            />
                        )
                    }} 
                    overScrollMode="auto"
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 6,
    },
});

/* ABOUT VIEWS & TEXT
// NOTE : By default, VIEWs are not scrollable !!
Don't forget to wrap TEXT in VIEW to make borderRadius work on TEXT on IOS !!
Moreover, as styles are not CSS in RN, there's no styling inheritance.
Each element have to have its own styling
That's why we had to add another styling object to TEXT, to set the color
(If color is only set in VIEW, TEXT won't get it...) */


/* ABOUT SCROLLVIEWs 

Make sure to wrap SCROLLVIEW in a VIEW to set the display !
Otherwise it won't work as the allocated space is determined by the
SCROLLVIEW'S PARENT ! 

SCROLLVIEW should only be used for short list of items as it always 
renders its children, even if they are not yet visible. If it has a lot of children, that may cause some
PERFORMANCE issues.
For large lists use FLATLIST, as it will render items lazily.  

OVERSCROLLMODE allows the user to scroll only if the content is 
larger than the allocated space. 
Instead of SCROLLVIEW, FLATLIST render objects tha give us access
to some metadata, such as the INDEX property */


/* ABOUT FLATLISTS
FLATLIST & KEYS :
There are two ways to assign keys to the rendered children.

The first one consists in passing an object to the FLATLIST, which contains
a KEY property. 
{text: myText, key: Math.random().toString} for example.

And the second one should be used in case we can't define keys because there are already one.
Like if we're consuming API for example.
In this case we can add another prop to FLATLIST, whiwh is KEYEXTRACTOR

keyExtractor={(item, index) => {
    return item.id (assuming that the item we receive has an id property)
}}
*/
