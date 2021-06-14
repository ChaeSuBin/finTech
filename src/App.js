import logo from './logo.svg';
import './App.css';
import Welcome from "./component/Welcome"
import {ListComponent} from "./component/ListComponent"
import {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosComponent from "./component/AxiosComponent";
import NewsPage from "./pages/NewsPage";
import {MainPage} from "./finBank/MainPage";
import {AuthResultPage} from "./finBank/AuthResultPage";
import {ListPage} from "./finBank/ListPage";
import BalancePage from "./finBank/BalancePage";
import {QRcodePage} from "./finBank/QRcodePage";
import {QrReader} from "./finBank/QrReader";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello React
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//         </p>
//         <Welcome username='chae' age='23'></Welcome>
//       </header>
//     </div>
//   );
// }

// function App()
// {
//   const [userName, setUserName] = useState('init');
//   const handleChangeName = (e) =>{
//     console.log(e.target.value);
//     const {value, name} = e.target;
//     setUserName(value);
//     //setUserName(e.target.value);
//   };

//   console.log(userName)
//   return (
//     <div className="App">
//       <p>hello {userName}!</p>
//       <input onChange={handleChangeName}></input>
//       <ListComponent></ListComponent>
//     </div>
//   );
// }

function App()
{
  return (
    <Router>
      <Switch>
        <Route path="/list" exact>
          <ListComponent />
        </Route>
        <Route path="/axios" exact>
          <AxiosComponent />
        </Route>
        <Route path="/newsPage" exact>
          <NewsPage />
        </Route>
        <Route path="/MainPage" exact>
          <MainPage />
        </Route>
        <Route path="/authResult" exact>
          <AuthResultPage />
        </Route>
        <Route path="/listPage" exact>
          <ListPage />
        </Route>
        <Route path="/balance" exact>
          <BalancePage />
        </Route>
        <Route path="/qr" exact>
          <QRcodePage />
        </Route>
        <Route path="/qrread" exact>
          <QrReader />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
