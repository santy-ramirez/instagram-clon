
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppConteiner from './Components/AppConteiner.jsx'
import PostForm from './Components/PostForm.jsx'







  
const App = () => {
return (

    <div className="App">

<BrowserRouter windowr>
    <Routes>    
      <Route path="/" element={<AppConteiner/>}/>
      <Route path="/post" element={<PostForm/>} />
     
      </Routes>
    </BrowserRouter>
    

    </div>
    );
    };
  
export default App;
