import Newtodo from './Newtodo';

const Contents = function ({ toDo, setTodo }) {
    //working.. > 삭제하기 버튼

    return (
        <div className="contents-group">
            <div className="working-style">
                <h2>✍️Working</h2>
                <div className="working-todo">
                    {' '}
                    {toDo
                        .filter((item) => item.isDone === false)
                        .map(function (item) {
                            return <Newtodo key={item.id} item={item} setTodo={setTodo} toDo={toDo} />;
                        })}
                </div>
            </div>
            <div className="working-style">
                <h2>✌️Done✌️</h2>
                <div className="working-todo">
                    {toDo
                        .filter((item) => item.isDone === true)
                        .map(function (item) {
                            return <Newtodo key={item.id} item={item} setTodo={setTodo} toDo={toDo} />;
                        })}
                </div>
            </div>
        </div>
    );
};

export default Contents;
