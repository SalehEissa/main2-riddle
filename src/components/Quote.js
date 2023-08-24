import React, { useState, useEffect } from "react";
import axios from "axios";

function Quote() {
  const [riddle, setRiddle] = useState({});
  const [answerVisible, setAnswerVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchRiddle = async () => {
    try {
      const response = await axios.get(
        "https://api.api-ninjas.com/v1/riddles",
        {
          headers: {
            "X-Api-Key": "FhTHfHx+tuG1aMd3t4aPQg==5M7TFWvrDcHpWjH4" //
          }
        }
      );

      if (response.data && response.data.length > 0) {
        const randomRiddle = response.data[0];
        setRiddle(randomRiddle);
      } else {
        setRiddle({
          question: "No riddle available.",
          answer: ""
        });
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching riddle:", error);
      setRiddle({
        question: "Failed to fetch riddle.",
        answer: ""
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRiddle();
  }, []);

  const handleNewRiddleClick = () => {
    setLoading(true);
    setAnswerVisible(false); // Hide the answer when getting a new riddle.
    fetchRiddle();
  };

  const toggleAnswerVisibility = () => {
    setAnswerVisible(!answerVisible);
  };

  return (
    <div className="riddle-container">
      <h2>Random Riddle:</h2>
      {loading ? (
        <p>Loading riddle...</p>
      ) : (
        <>
          <p>{riddle.question}</p>
          <button onClick={toggleAnswerVisibility}>Toggle Answer</button>
          {answerVisible && <p>Answer: {riddle.answer}</p>}
          <button onClick={handleNewRiddleClick}>Get Another Riddle</button>
        </>
      )}
    </div>
  );
}

export default Quote;
