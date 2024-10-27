import Question from "./question";
import { useContext } from "react";
import { Context } from "@/context/mainContext";
import useQuizNavigation from "@/hooks/useQuizNavigation";

function QuestionsList({ showPopupAfterDelay }) {
  const { currentQuestions } = useContext(Context);
  const { scrollToNextQuestion, questionRefs } =
    useQuizNavigation(currentQuestions);

  return (
    <ul className="w-10/12 sm:w-8/12 lg:w-6/12 ">
      {currentQuestions.map((question, index) => (
        <Question
          ref={(domElement) => (questionRefs.current[index] = domElement)}
          scrollToNextQuestion={scrollToNextQuestion}
          key={question + index}
          q={question}
          index={index}
          showPopupAfterDelay={showPopupAfterDelay}
        />
      ))}
    </ul>
  );
}
export default QuestionsList;
