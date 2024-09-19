import { StyleCards, StyleCardsLogos, StyleTitles, StyleWorkflow } from "./style";

const WorkflowComponent = () => {
  const ItensBlackList = [
    {
      image: "/images/icon-blacklist.svg",
      title: "Create Blacklists",
      description:
        "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
    },
    {
      image: "/public/images/icon-text.svg",
      title: "Plain text snippets",
      description:
        "Remove unwanted formatting from copied text for a consistent look.",
    },
    {
      image: "/public/images/icon-preview.svg",
      title: "Sneak preview",
      description:
        "Quick preview of all snippets on your Clipboard for easy access.",
    },
  ];

  const EnterpriceLogo = [
    {
      image: "/images/logo-google.png",
      name: "Logo do Google",
    },
    {
      image: "/public/images/logo-ibm.png",
      name: "Logo da IBM",
    },
    {
      image: "/public/images/logo-microsoft.png",
      name: "Logo a Microsoft",
    },
    {
      image: "/public/images/logo-hp.png",
      name: "Logo da HP",
    },
    {
      image: "/public/images/logo-vector-graphics.png",
      name: "Logo da Graphics Vetor",
    },
  ];

  return (
    <StyleWorkflow>
      <StyleTitles>
        <h3>Supercharge your workflow</h3>
        <p>We’ve got the tools to boost your productivity.</p>
      </StyleTitles>

      <StyleCards>
        {ItensBlackList.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <span>{item.description}</span>
          </div>
        ))}
      </StyleCards>

      <StyleCardsLogos>
        {EnterpriceLogo.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </StyleCardsLogos>
    </StyleWorkflow>
  );
};

export default WorkflowComponent;
