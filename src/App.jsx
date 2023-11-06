import { useState } from 'react';
import './App.css';
import InputList from './components/InputList'; //1. 제목+ 내용 : 추가하는 영역
import Contents from './components/Contents'; //2. 해야할 부분 / 할일 영역 나뉜 부분
import Newtodo from './components/Newtodo'; //2-1. (삭제버튼 / 완료-취소 버튼 / 저장된 할일 제목+내용)

function App() {
    const initialState = [{ id: 1, title: '해야할 일', content: '리액트 개인과제', isDone: false }];
    const [toDo, setTodo] = useState(initialState);
    //console.log(toDo);

    return (
        <div className="layout">
            <div className="top">
                <h3>My Todo List📝</h3>
                <h3>React</h3>
            </div>
            <InputList toDo={toDo} setTodo={setTodo} />
            <Contents toDo={toDo} setTodo={setTodo} />
        </div>
    );
}

export default App;
