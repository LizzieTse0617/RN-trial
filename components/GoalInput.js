import {View,Button,Text,TextInput,StyleSheet} from 'react-native'
import React, {useState} from 'react';

const GoalInput = props => {
    const [enteredGoal,setEnteredGoal] = useState('');
    function goalInputHandler(enterText){
        setEnteredGoal(enterText);}
  return  (
      <View style={
        styles.inputContainer
        }>
      <TextInput placeholder="course goal" style={styles.input} onChangeText={goalInputHandler}
      value={enteredGoal}/>
      {/* in here, this page contains all happen related to GoalInput, hence the linkage is broken between APP.js & component <GoalInput>. To solve that, we use props(with customize box name:onAddGoal) to pass the only variable (i.e. enteredGoal, not goalTitle) back to page APP.js */}
      {/* onPress event:係onAddGoal既props盒到，把enteredGoal 內容加入去onAddGoal */}
     <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
      </View>
  )
}

const styles = StyleSheet.create({ 
    inputContainer:{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'},
    input:{width:'80%',borderColor:'black',borderWidth:1, padding:10},})


export default GoalInput