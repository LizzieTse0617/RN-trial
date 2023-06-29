
import React, {useState} from 'react';
import { StyleSheet,  View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
const [courseGoal,setCourseGoal] = useState([]);

const addGoalHandler= goalTitle =>{
  //call setCourseGoal時(現時收到既type input 會成為enteredGoal, 而且連埋之前打既野，一齊加落currentGoals(aka: courseGoal), 產生array(courseGoal): ... +'typeInput') 
  // ... < spread operator, that means any changes made before will keep going
  //setCourseGoal(currentGoals =>[...currentGoals, enteredGoal])
//enteredGoal = { id:Math.random().toString(), value:enteredGoal}
   setCourseGoal(currentGoals =>[...currentGoals, { id:Math.random().toString(), value:goalTitle}])
}

const removeGoalHandler = goalId =>{
  setCourseGoal(currentGoals => {
    /* return an array - which is currentGoal without the id of the item i currently clicked */
    return currentGoals.filter((goal) => goal.id !== goalId)
  })
}
  return (
    <View style={styles.screen}>
      {/* goalInput 被拆開做第二個file, 但又有個function係呢到，所以佢用一個customize名既盒(onAddGoal)裝住，把function既variable(goalTitle)帶番去goalInput.js Xfile入面 */}
      <GoalInput onAddGoal={addGoalHandler}/>
  
            {/* flatlist */}
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoal} 
      renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{padding:50},

});
