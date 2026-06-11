import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Homepage"
import Catalog from "./components/catalog"
import Blog from "./components/Blog"
import AboutUs from "./components/AboutUs"

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