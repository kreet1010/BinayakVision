import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='backgroundHolder'>
      <div className='welcome-txt'>
        <h1>Welcome to Binayak Vision</h1>
        <p>Capturing moments, telling stories.</p>
        <div className='buttons'>
          <div className='plans'>Check Plans</div>
          <div className='contact'>Contact US</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
