import { UIEvent, useEffect, useState } from "react";
import AnkiList from "./components/commons/AnkiList";
import Lenguaje from "./components/commons/Lenguaje";
import MenuBar from "./components/commons/MenuBar";

function App() {
  const [data1, setData1] = useState<string>("");
  const [data2, setData2] = useState<string>("");
  const [smallHeader, setSmallHeader] = useState<boolean>(false);
  const handleScroll = (e: UIEvent<HTMLDivElement>) =>
    setSmallHeader(e.currentTarget.scrollTop >= 5);

  return (
    <div className="Traductor" onScroll={handleScroll}>
      <header data-small={smallHeader}>
        <nav>Traductor API</nav>
      </header>
      <main>
        <section>
          <Lenguaje lenguaje="english" setData={setData1} data={data1} />
          <MenuBar
            data={{ original: data1, translate: data2 }}
            setResultTranslate={setData2}
          />
          <Lenguaje lenguaje="spanish" setData={setData2} data={data2} />
        </section>
        <hr />
        <section>
          <AnkiList />
        </section>
      </main>
      <footer>
        Copyright&nbsp;
        <a href="https://github.com/Juandi-DT/Juandi-DT.github.io">
          ©Juandi_DT
        </a>
        , todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
