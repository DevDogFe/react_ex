import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// JSX 문법
// class => className으로 변경
// 변수사용 {}
// 인라인 스타일 사용 => style = {{ ... }}
// return() 괄호 안에는 두가지 이상태그 병렬사용 x
function App() {
  /**
   * - state
   * 1. import {useState}
   * 2. useState(보관할 변수)
   * 3. let [이름1, 이름2] <-에 담기 (이름1: state에 보관한 변수, 이름2: state 변경 도와주는 함수)
   */
  let post = '전포 카페거리 양고기 무한리필 맛집';
  let [title, bb] = useState(['올해의 아이템 쿨니트', '무신사에서 아이템 찾는 법', '서면 중국집 맛집 추천']);
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>MyBlog</h4>
      </div>
      <div className='list'>
        <h4>{post}</h4>
        <p>2023-06-29</p>
      </div>
      <div className='list'>
        <h4>{title[0]}</h4>
        <p>2023-06-29</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2023-06-29</p>
      </div>
      <div className='list'>
        <h4>{title[2]}</h4>
        <p>2023-06-29</p>
      </div>
    </div>
  );
}

export default App;
