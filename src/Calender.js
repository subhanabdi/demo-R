import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calender = () => {
  const [wordCamps, setWordCamps] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://central.wordcamp.org/wp-json/wp/v2/wordcamps/')
      .then(res => {
        const camps = res.data;
        if (Array.isArray(camps)) {
          setWordCamps(camps);
        } else {
          setError(new Error("Received data is not an array"));
        }
      })
      .catch(err => setError(err));
  }, []);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div>
    {wordCamps.map(wordCamp => (
  <div key={wordCamp.id}>
    <h3>{wordCamp.title.rendered}</h3>
    <p>{wordCamp.excerpt ? wordCamp.excerpt.rendered : "No excerpt available"}</p>
  </div>
))}

    </div>
  );
};

export default Calender;
