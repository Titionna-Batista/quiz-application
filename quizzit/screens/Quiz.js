import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from "react-native";

class Quiz extends React.Component {
    state = {
    //correctCount in the example
    answersCorrect: 0,
    //totalCount
    questionCount: this.props.navigation.getParam("questions",[]).length,
    //activeQuestionIndex
    questionsInPlay: 0,
    //Change answered to attempted
    answered: false,
    // Change to correctAnswer

};

answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };
  nextQuestion = () => {
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        return this.props.navigation.popToTop();
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };

}