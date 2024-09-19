import Button from "./components/buttons";
import SnippetsComponent from "./components/sectionSnippets";
import { HeadeStyle } from "./styles/heade";

function App() {
  const ImageLogo = "/public/images/logo.svg";

  return (
    <>
      <HeadeStyle>
        <img src={ImageLogo} alt="Imagem logo" />

        <h3>A history of everything you copy</h3>

        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div>
          <Button children="donwload for ios"/>
          <Button children="donwload for mac"/>
        </div>
      </HeadeStyle>
      <SnippetsComponent/>
    </>
  );
}




export default App;
