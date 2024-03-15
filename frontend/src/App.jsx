import React from 'react'
import {Routes, Route} from 'react-router-dom';
import CreateBooks from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBooks from './pages/EditBooks';
import DeleteBook from './pages/DeleteBook';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      
      <Route path='/'element={<Home />}/>
      <Route path='/books/create'element={<CreateBooks/>}/>
      <Route path='/books/details/:id'element={<ShowBook/>}/>
      <Route path='/books/edit/:id'element={<EditBooks/>}/>
      <Route path='/books/delete/:id'element={<DeleteBook/>}/>

    </Routes>
  )
}

export default App
