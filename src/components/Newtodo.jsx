const Newtodo = function ({ item, setTodo, toDo }) {
    //구조분해할당을 통해 값을 받아줌

    const BtnDeleteClick = (clickedId) => {
        if (window.confirm('삭제하시겠습니까?')) {
            const filterd = toDo.filter((todoId) => todoId.id !== clickedId);
            setTodo(filterd);
            alert('삭제되었습니다.');
        } else {
            return false;
        }
    };
    //[상태값] isDone : false > true 변경
    const BtnStateChangeClick = (clickedId) => {
        //선택된 id값을 filter찾아서 isDone : false > true 변경
        toDo.filter((todoData) => todoData.id === clickedId).map(function (item) {
            if (item.isDone === false) {
                let newObj = [...toDo, (item.isDone = true)];
                return [...toDo, newObj];
            } else {
                let newObj = [...toDo, (item.isDone = false)];
                return [...toDo, newObj];
            }
        });

        setTodo([...toDo]);
    };

    return (
        <div key={item.id} className="toDoComponent-style">
            <div className="toDoTitle">{item.title}</div>
            <div>{item.content}</div>
            <div className="workingBtn"></div>
            <div className="workingBtn">
                <button className="deletBtn" onClick={(event) => BtnDeleteClick(item.id)}>
                    삭제하기
                </button>
                <button className="changeBtn" onClick={(event) => BtnStateChangeClick(item.id)}>
                    {item.isDone ? '취소' : '완료'}
                </button>
            </div>
        </div>
    );
};

export default Newtodo;
