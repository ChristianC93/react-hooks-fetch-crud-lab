import React, {useState} from "react";

function QuestionItem({question, onDeleteQuestion, onUpdateQuestion}) {
  const [newCorrectIndex, setNewCorrectIndex] = useState("")

  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
 

  function handleDeleteClick(e) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method:"DELETE",
    })
    .then((resp) => resp.json())
    .then(() => onDeleteQuestion(question))
  }

  function handleSelectChange(e) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method:"PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        correctIndex: setNewCorrectIndex(e.target.value)
      })
    })
    .then((resp) => resp.json())
    .then((updatedQuestion) => onUpdateQuestion(updatedQuestion))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={newCorrectIndex} onChange={handleSelectChange}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
