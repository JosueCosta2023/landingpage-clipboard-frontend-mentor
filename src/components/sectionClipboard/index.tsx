import { StyleClipboard } from "./style";

const ClipboardComponent = () => {

    const ImageDevices = "/images/image-devices.png"

    return ( 
        <StyleClipboard>
            <div>
                <h3>Access Clipboard anywhere</h3>
                <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
            </div>

            <img src={ImageDevices} alt="Imagem de Dispositivos" />
        </StyleClipboard>
     );
}
 
export default ClipboardComponent;