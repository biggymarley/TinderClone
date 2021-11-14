import HomePage from "./content/Home/HomePage";
import { Box } from "@mui/system";
import Feedbacks from "./content/Feedbacks/Feedbacks";
import Footer from "./content/Footer/Footer";
import Motivation from "./content/Footer/Motivation";
function App() {
  return (
    <div style={{position:"relative"}}> 
    <div style={{zIndex:2}}>
      <HomePage/>
      <Feedbacks/>
      <Motivation/>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
