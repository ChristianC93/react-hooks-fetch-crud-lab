import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQuestion, onUpdateQuestion}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => {
        return <QuestionItem 
        key={question.id} 
        prompt={question.prompt} 
        question={question}
        correctIndex={question.correctIndex}
        answers={question.answers}
        onDeleteQuestion={onDeleteQuestion}
        onUpdateQuestion={onUpdateQuestion}
        />
      }
    )}</ul>
    </section>
  );
}

export default QuestionList;
