import { FormEvent, useState } from 'react';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';
import { Tweet } from '../components/Tweet';

import './Home.css';



export const Home = () => {
  const [newTweet, setNewTweet] = useState('');
  const [Tweets, setTweets] = useState([
    'Primeiro Tweet',
    'Deu certo o Tweet',
    'Hello Wourld',
  ])
  const createNewTweet = (event: FormEvent) =>{
    event.preventDefault();
    
    setTweets([newTweet, ...Tweets]);
    setNewTweet('');
  }

  return(
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/LukinhaGabriel.png"
            alt="Lucas Gabriel Moya"
          />
          <textarea id="tweet" 
            placeholder="What's happening?" 
            value={newTweet}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}  
            required 
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />
      {Tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
};
