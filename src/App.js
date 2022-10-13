import React from 'react';
import useScript from './useScript';

const App = ({ url }) => {
  useScript(url);

  return (
    <div className='container'>
      <canvas id='canvas' />
    </div>
  );
};

export default App;
