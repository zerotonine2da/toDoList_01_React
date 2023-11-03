const Newtodo = function ({ item, BtnDeleteClick, BtnStateChangeClick }) {
    //구조분해할당을 통해 값을 받아줌
    return (
        <div key={item.id} className="toDoComponent-style">
            <div>{item.title}</div>
            <div>{item.content}</div>
            <div className="workingBtn">
                <button className="deletBtn" onClick={(event) => BtnDeleteClick(item.id)}>
                    삭제하기
                </button>
                <button className="changeBtn" onClick={(event) => BtnStateChangeClick(item.id)}>
                    완료
                </button>
            </div>
        </div>
    );
};

export default Newtodo;
