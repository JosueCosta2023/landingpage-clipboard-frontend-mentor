
import Button from "./components/buttons";
import { HeaderStyle } from "./components/styles/header";

function App() {
  
  const ImageLogo = "/public/images/logo.svg"

  return (
    <>
      <HeaderStyle>
          <img src={ImageLogo} alt="Imagem logo"/>

          <h3>A history of everything you copy</h3>

          <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
      </HeaderStyle>
      <div>
        <Button children="donwload for ios" color={"lightBlue"} />
        <Button children="donwload for mac" color={"strongCyan"} />
      </div>
    </>
  );
}

export default App;
