import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css'



export const Status = () => {
  const [newAnswers, setNewAnswers] = useState('');
  const [answers, setAnswers] = useState([
    'Corcondo...',
    'Olha faz, sentido!',
    'Parabéns pelo progresso!',
  ])
  const createNewAnswers = (event: FormEvent) =>{
    event.preventDefault();
    
    setAnswers([newAnswers, ...answers]);
    setNewAnswers('');
  }
  return(
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos aliquam inventore qui voluptatibus. Id rerum facere facilis saepe dolor nemo tempora eos vero, quibusdam distinctio laboriosam deserunt mollitia expedita." />
      
      <Separator />
      
      <form onSubmit={createNewAnswers} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/LukinhaGabriel.png"
            alt="Lucas Gabriel Moya"
          />
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            value={newAnswers}
            onChange={ (event) => {
              setNewAnswers(event.target.value);
            }}
            required
          />
        </label>
        <button type="submit">Answer</button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}