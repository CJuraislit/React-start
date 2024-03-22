import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach.jsx";
import Button from "./components/Button/Button.jsx";
import { useState } from "react";
import { ways, differences } from "./data.js";

function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>

          <ul>
            {ways.map((way) => (
              <WayToTeach key={way.title} {...way} />
            ))}
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>

          <Button
            isActive={contentType === "way"}
            onClick={() => handleClick("way")}
          >
            Подход
          </Button>
          <Button
            isActive={contentType === "easy"}
            onClick={() => handleClick("easy")}
          >
            Доступность
          </Button>
          <Button
            isActive={contentType === "programm"}
            onClick={() => handleClick("programm")}
          >
            Концентрация
          </Button>

          {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажми на кнопку</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
