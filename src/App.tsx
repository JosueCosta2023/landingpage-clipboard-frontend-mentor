import Button from "./components/buttons";
import ClipboardComponent from "./components/sectionClipboard";
import CTAComponents from "./components/sectionCTA";
import SnippetsComponent from "./components/sectionSnippets";
import WorkflowComponent from "./components/sectionWorkflow";
import { HeadeStyle } from "./styles/heade";

function App() {
  const ImageLogo = "/images/logo.svg";

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
      <ClipboardComponent/>
      <WorkflowComponent/>
      <CTAComponents/>
    </>
  );
}




export default App;
