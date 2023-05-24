import React from 'react';
import logo from './logo.svg';
import {Button, Input} from 'omenui'

function App() {
  return (
    <div className="app">
      <Input
        label='Custom input'
        placeholder='enter text'
      />
      <Button
        color='primary'
      >
        press me
      </Button>
    </div>
  );
}

export default App;
