//import React from 'react'
import Addproduct from '../../components/Addproduct';
import ListProduct from '../../components/ListProduct';
import Sidebar from './../../components/Sidebar';
import {Route ,Routes} from 'react-router-dom';

export default function Admin() {
  return (
    <div id="Admin">
      <Sidebar/>
<Routes>
  <Route path='/addproduct' element={<Addproduct/>}></Route>
  <Route path='/listproduct' element={<ListProduct/>}></Route>
  
</Routes>
    </div>
  )
}
