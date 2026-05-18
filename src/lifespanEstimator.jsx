import React, { useState } from 'react';

const LifespanEstimator = () => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [results, setResults] = useState(null);
  const [feedback, setFeedback] = useState('');

  const calculateTimeLeft = (e) => {
    e.preventDefault();
    const age = Number(userAge);
    
    if (isNaN(age) || age < 0) {
      alert("Please enter a valid age.");
      return;
    }

    const yearsLeft = 100 - age;
    
    const stats = {
      days: (yearsLeft * 365).toLocaleString('en-US'),
      weeks: (yearsLeft * 52).toLocaleString('en-US'),
      months: (yearsLeft * 12).toLocaleString('en-US'),
      years: yearsLeft.toLocaleString('en-US'),
    };

    setResults(stats);
  };
     const inputStyle = { borderRadius: '0.5rem', height: '2.5rem', textAlign: 'left', padding: '0.2rem 1rem', boxSizing: 'border-box'};

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px' }}>
      <h1>Lifespan Estimator</h1>
      <p>
        This is an application that estimates the amount of time you have left on this earth. 
It assumes that the likely maximum lifespan of most humans is 100 years or highest of all, about 120 years, as proven by well studied statistics and human history, and as stated by the bible.
However, we work with 100 years as being the maximum lifespan of humans because "100" is a maximum number and even in human history, that has been so for most people.
      </p>
      <br/>

      <hr/>

      {!results ? (
        <form onSubmit={calculateTimeLeft}>
          <div style={{ marginBottom: '10px', marginTop: '10px' }}>
            <label>What's your name? </label>
            <input 
              type="text" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)}
              style={inputStyle} 
              required 
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label>Enter your age (digits only): </label>
            <input 
              type="number" 
              value={userAge} 
              onChange={(e) => setUserAge(e.target.value)}
              style={inputStyle}  
              required 
            />
          </div>
          
          <button type="submit">Calculate Time Left</button>
        </form>
      ) : (
        <div>
        <div style={{margin: '1rem 0'}}>
          <h3>Welcome, {userName}.</h3>
          <p>
            You may have about <strong>{results.days}</strong> days, i.e., 
            <strong> {results.weeks}</strong> weeks, i.e., 
            <strong> {results.months}</strong> months, i.e., 
            <strong> {results.years}</strong> years left to live and prosper and thrive.
          </p>
          <p><em>It may not be more. It may even be much less. Use your time wisely.</em></p>
          </div>
          <hr />
          
          <label>How did we do on a scale of 1 to 10? </label>
          <input 
            type="number" 
            min="1" 
            max="10" 
            value={feedback} 
            onChange={(e) => setFeedback(e.target.value)}
            style={inputStyle}  
          />
          <button onClick={() => console.log("User Feedback:", feedback)}>
            Submit Feedback
          </button>
          
          <br />
          <button 
            onClick={() => setResults(null)} 
            style={{ marginTop: '20px' }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default LifespanEstimator;