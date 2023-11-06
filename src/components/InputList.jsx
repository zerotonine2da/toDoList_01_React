import { useState } from 'react';
import Button from './Button';

//제목+ 내용 : 추가하는 영역
const InputList = function ({ toDo, setTodo }) {
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

        if (title.length === 0 || content.length === 0) {
            alert('[알림] 제목과 내용을 입력해주세요.');
            return false;
        }

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

    return (
        <div className="inputList">
            제목 <input className="inputListContent" value={title} onChange={titleHandler}></input>
            내용 <input className="inputListContent" value={content} onChange={contentHandler}></input>
            <Button className="btnAdd" onClick={BtnAddClick}>
                추가하기
            </Button>
        </div>
    );
};

export default InputList;
