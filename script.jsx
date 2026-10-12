function Card({ children }) {
    return <div className="card">{children}</div>;
}

function UserCard({ name, age }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Возраст: {age}</p>
        </div>
    );
}

function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
}

function App() {
    return (
        <main>
            <h1>Пользователи</h1>

            <Card>
                <UserCard name="Анна" age={20} />
            </Card>

            <Card>
                <UserCard name="Иван" age={25} />
            </Card>

            <Card>
                <UserCard name="Олег" age={30} />
            </Card>

            <Button onClick={() => alert("Привет!")}>Показать сообщение</Button>
            <Button onClick={() => console.log("Кнопка нажата")}>Вывести в консоль</Button>
        </main>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

