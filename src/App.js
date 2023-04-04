import './App.css';
import Navbar from './Companents/Navbar/Navbar'
import Circle_carousel from './Companents/Circle_carousel/Circle_carousel'
import Big_carousel from './Companents/Big_carousel/Big_carousel';
import Kategoriya from './Companents/Kategoriya/Kategoriya';
import Draw_obuv from './Companents/Draw_Obuv/Draw_obuv';
import Tanlanganlar from './Companents/Tanlanganlar/Tanlanganlar';
import Draw_odejd from './Companents/Draw_odejd/Draw_odejd';
import Draw_accs from './Companents/Draw_accs/Draw_accs';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Circle_carousel />
     <Big_carousel />
     <Kategoriya />
     <Draw_obuv />
     <Draw_odejd />
     {/* <Draw_accs /> */}
     {/* <Tanlanganlar /> */}
    </div>
  );
}

export default App;
