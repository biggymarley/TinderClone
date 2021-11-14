import HomePage from "./content/Home/HomePage";
import { Box } from "@mui/system";
import Feedbacks from "./content/Feedbacks/Feedbacks";
import Footer from "./content/Footer/Footer";
import Motivation from "./content/Footer/Motivation";
function App() {
  return (
    <> 
      <HomePage/>
      <Feedbacks/>
      <Motivation/>
      <Footer/>
    </>
  );
}

export default App;
