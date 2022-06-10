import React, {createContext, useReducer, useContext} from 'react';
import { Box } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/home/Home';
import AboutUs from './components/otherPages/AboutUs';
import Help from './components/otherPages/Help';
import Contact from './components/otherPages/Contact';
import Login from './components/otherPages/Login';
import Register from './components/otherPages/Register';
import Settings from './components/otherPages/Settings';
import ViewPost from './components/post/ViewPost';
import CreatePost from './components/post/CreatePost';
import UpdatePost from './components/post/UpdatePost';
import Logout from './components/otherPages/Logout';
import ForgotPassword from './components/otherPages/ForgotPassword';
import OTP from './components/otherPages/OTP';
import ResetPassword from './components/otherPages/ResetPassword';

import { initialState, reducer } from './reducer/UseReducer';

export const  UserContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (

  
    <UserContext.Provider value = {{state,dispatch}}>
      <BrowserRouter>
        <Header/>
        <Box style = {{marginTop: 64}}>
        
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<AboutUs/>} />
            <Route path='/help' element={<Help/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/details/:id' element={< ViewPost/>} />
            <Route path='/create' element={state? <CreatePost/> : <Login/>} />
            <Route path='/update/:id' element={<UpdatePost/>} />
            <Route path='/settings' element={state? <Settings/> : <Login/>} />
            <Route path='/login' element={state? <Home/> : <Login/>} />
            <Route path='/register' element={state? <Home/> : <Register/>} />
            <Route path='/logout' element={state? <Logout/> : <Home/>} />
            <Route path='/forgotPassword' element={<ForgotPassword/>} />
            <Route path='/reset-password' element={<ResetPassword/>} />
            <Route path='/verify-email' element={<OTP/>} />
          </Routes>
          
        </Box>
      </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
