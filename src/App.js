import React from 'react';
import './App.css';
import Form from './components/LoginForm';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <div className="container-fluid d-flex App flex-column flex-grow-1 justify-content-center">
        <div className="d-flex flex-row justify-content-center align-items-center ">
          <Form />
        </div>
      </div>
    </div>

  );
}

export default App;
