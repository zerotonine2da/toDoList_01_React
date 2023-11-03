import { useState } from 'react';
import './App.css';
import Newtodo from './components/Newtodo';
import Donetodo from './components/Donetodo';

function App() {
    const initialState = [{ id: 1, title: '해야할 일', content: '리액트 개인과제', isDone: false }];
    const [toDo, setTodo] = useState(initialState);
    console.log('toDo', toDo);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const titleHandler = (event) => {
        let titleData = event.target.value;
        setTitle(titleData);
    };

    const contentHandler = (event) => {
        let contentData = event.target.value;
        setContent(contentData);
    };

    //추가하기 버튼
    const BtnAddClick = () => {
        //1. 새로운 형태의 todolist (initialState:객체) 생성
        //   todolist: { id: 0, title: '', content: '', isDone: false }
        //2. todolist를 배열에 더한다.

        const newTodo = {
            id: toDo.length + 1,
            title: title,
            content: content,
            isDone: false,
        };

        //불변성을 유지하기 위해서 스프레드 문법을 사용
        //React에게 state가 변경됨을 알려줌
        setTodo([...toDo, newTodo]); //비동기->
        setTitle(''); // 아이디 검색 구간 초기화
        setContent(''); //내용 검색 구간 초기화
    };

    //working.. > 삭제하기 버튼
    const BtnDeleteClick = (clickedId) => {
        const filterd = toDo.filter((todoId) => todoId.id !== clickedId);
        setTodo(filterd);
    };

    //[상태값] isDone : false > true 변경
    const BtnStateChangeClick = (clickedId) => {
        //선택된 id값을 filter찾아서 isDone : false > true 변경
        const ChangeToDone = toDo
            .filter((todoData) => todoData.id === clickedId)
            .map(function (item) {
                let newObj = [...toDo, (item.isDone = true)];
                return [...toDo, newObj];
            });

        //다시 한번 isDone= true인것만 filter로 추출
        const filteredDone = toDo.filter((todoData) => todoData.isDone === true);
        setTodo([...toDo, filteredDone]);
    };

    const BtnCancelChangeClick = (clickedId) => {
        //선택된 id값을 filter찾아서 isDone : true > false 변경
        const ChangeToDone = toDo
            .filter((todoData) => todoData.id === clickedId)
            .map(function (item) {
                let newObj = [...toDo, (item.isDone = false)];
                return [...toDo, newObj];
            });

        //다시 한번 isDone= true인것만 filter로 추출
        const filteredDone = toDo.filter((todoData) => todoData.isDone === false);
        setTodo(filteredDone);
        setTodo([...toDo, filteredDone]);
    };

    return (
        <div className="layout">
            <div className="top">
                <p>My Todo List</p>
                <p>React</p>
            </div>
            <div className="inputList">
                제목 <input value={title} onChange={titleHandler}></input>
                내용 <input value={content} onChange={contentHandler}></input>
                <button className="btnAdd" onClick={BtnAddClick}>
                    추가하기
                </button>
            </div>
            <div className="working-style">
                <h2>Working..</h2>
                <div className="working-todo">
                    {' '}
                    {toDo
                        .filter((item) => item.isDone === false)
                        .map(function (item) {
                            return (
                                <Newtodo
                                    key={item.id}
                                    item={item}
                                    BtnDeleteClick={BtnDeleteClick}
                                    BtnStateChangeClick={BtnStateChangeClick}
                                />
                            );
                        })}
                </div>
            </div>
            <div className="working-style">
                <h2>Done..!</h2>
                <div clasName="working-todo">
                    {toDo
                        .filter((item) => item.isDone === true)
                        .map(function (item) {
                            return (
                                <Donetodo
                                    key={item.id}
                                    item={item}
                                    BtnDeleteClick={BtnDeleteClick}
                                    BtnCancelChangeClick={BtnCancelChangeClick}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default App;
