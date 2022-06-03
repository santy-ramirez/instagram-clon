
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AppConteiner from './Components/AppConteiner.jsx'
import PostForm from './Components/PostForm.jsx'







  
const App = () => {
return (

    <div className="App">

<HashRouter>
    <Routes>    
      <Route path="/" element={<AppConteiner/>} />
      <Route path="/post" element={<PostForm/>} />
      
    </Routes>
    </HashRouter>

    </div>
    );
    };
  
export default App;
