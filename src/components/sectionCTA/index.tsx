import Button from "../buttons";
import { StyleCtaSection } from "./style";

const CTAComponents = () => {
    return ( 
        <StyleCtaSection>
            <h2>Clipboard for IOS and Mac OS</h2>
            <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
            <div>
                <Button children="Download for IOS"/>
                <Button children="Download for Mac"/>
            </div>
        </StyleCtaSection>
     );
}
 
export default CTAComponents;