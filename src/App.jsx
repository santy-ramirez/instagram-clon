
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppConteiner from './Components/AppConteiner.jsx'
import PostForm from './Components/PostForm.jsx'







  
const App = () => {
return (

    <div className="App">

   <BrowserRouter>
    <Routes>    
      <Route path="/instagram-clon" element={<AppConteiner/>} />
      <Route path="instagram-clon/post" element={<PostForm/>} />
      
    </Routes>
  </BrowserRouter>

    </div>
    );
    };
  
export default App;
