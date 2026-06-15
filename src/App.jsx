import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Home from "./components/Homepage.jsx"
import Catalog from "./components/catalog.jsx"
import Blog from "./components/Blog.jsx"
import AboutUs from "./components/AboutUs.jsx"

function App(){
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/Blog" element={<Blog/>}/>
                    <Route path="/AboutUs" element={<AboutUs/>}/>
                    
                
                </Route>
            </Routes>
        </BrowserRouter> 
    )
}

export default App