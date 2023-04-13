import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ id, title, info, activeId, changeActiveId }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    changeActiveId(id);
  };

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button type="button" className="question-btn" onClick={toggleAnswer}>
          {showAnswer && activeId === id ? (
            <AiOutlineMinus />
          ) : (
            <AiOutlinePlus />
          )}
        </button>
      </header>
      {showAnswer && activeId === id && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
