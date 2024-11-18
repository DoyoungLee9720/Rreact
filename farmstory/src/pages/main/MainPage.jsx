import Best from "../../components/main/Best";
import Footer from "../../components/main/Footer";
import Header from "../../components/main/Header";
import Slider from "../../components/main/Slider";
import Quick from "../../components/main/Quick";
import Latest from "../../components/main/Latest";
import Info from "../../components/main/Info";
export default function MainPage(){
    return (
      <div id="container">
        <Header/>
        <main>
          <Slider/>
          <Best/>
          <Quick/>
          <Latest/>
          <Info/>
        </main>
        <Footer/>
      </div>
    );};