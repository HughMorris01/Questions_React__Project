import { useState } from 'react';
import SingleQuestion from './SingleQuestion';

const Questions = ({ questions }) => {
  const [activeId, setActiveId] = useState(null);

  const changeActiveId = (sentId) => {
    setActiveId(sentId);
  };

  return (
    <section className="container">
      <h1>questions to ChatGPT</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            changeActiveId={changeActiveId}
            activeId={activeId}
          />
        );
      })}
    </section>
  );
};
export default Questions;
