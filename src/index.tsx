import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface AppProps {
  title: string;
  color: string;
}

function App(props: AppProps) {
  return (
    <h1>{props.title}</h1>
  )
}

ReactDOM.render(
  // strict 모드는 리액트 입장에서 문제라고 생각되는 것을 경고한다.
  <React.StrictMode>
    <App title='hello' color='blue' />
  </React.StrictMode>,
  document.getElementById('root')
);

