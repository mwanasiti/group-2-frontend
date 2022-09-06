import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Display from './components/Display';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomePage from './HomePage'
import Search from "./components/Search"
import About from "./components/About"
import Contact from "./components/Contact"
import {useEffect, useState} from "react"




function App() {

  

  const [users, setUsers] = useState([])

  const [search, setSearch] = useState("")


  // const getData = async() => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users")
  //   const json = res.json()
  // setUsers(json)
  //   // console.log(users)
  // }
  
 useEffect(()=> {
  fetch("http://localhost:9292/students")
  .then((res)=> res.json())
  .then(data=>setUsers(data))
 }, [])



 const handleChange = (e) => {
   setSearch(e.target.value)
 }

  return (
    <div className="App">
      <Router>
      <div className="RouteSection">
        
        <Header />
        <Navbar/>
        <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
        {/* <Routes>
          <Route exact='true' path='/' element={<HomePage />}/>
        </Routes> */}
        <Search handleChange = {handleChange}/>
        {/* <Display/> */}

        {users && users.filter((user)=>user.name.includes(search)).map((user)=>
          (
            <>
            <Display name = {user.name} id ={user.id} course_id={user.course_id}/>
            </>
          )
        )}
        
      </div>
      </Router>
    </div>
  );
}

export default App;
