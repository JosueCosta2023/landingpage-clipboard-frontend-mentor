import { StyledDetailSnippets, StyledSection, StyledTitleSnippets } from "./style";

const SnippetsComponent = () => {

    const ImageComputer = "/images/image-computer.png"

  return (
    <StyledSection>
      <StyledTitleSnippets>
        <h3>Keep track fo your snippets</h3>
        <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
      </StyledTitleSnippets>

      <StyledDetailSnippets>
        
        <img src={ImageComputer} alt="Imagem de um computador" />
        

        <div>
          <div>
            <h3>Quick Search</h3>
            <p>Easily search your snippets by content, category, web address, application, and more.</p>
          </div>

          <div>
            <h3>iCloud Sync</h3>
            <p>Instantly saves and syncs snippets across all your devices.</p>
          </div>

          <div>
            <h3>Complete History</h3>
            <p>Retrieve any snippets from the first moment you started using the app.</p>
          </div>
        </div>
      </StyledDetailSnippets>
    </StyledSection>
  );
};

export default SnippetsComponent;
