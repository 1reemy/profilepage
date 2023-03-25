import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
import Profile from './Profile'
import Elec_List from './components/Elec_List.jsx'
import Web_List from './components/Web_List.jsx'
import El_Proj from './components/El_Proj.jsx'
import Elec_Detail from './components/Elec_Detail.jsx'
import Web_Detail from './components/Web_Detail.jsx'

export default function App(){
    return(
        <div>
            <BrowserRouter>
                    <Routes>
                        <Route path="/profilepage" element={<El_Proj />}>
                            <Route index element={<Profile />} />
                            <Route path="web_list" element={<Web_List />} />
                            <Route path="elec_list" element={<Elec_List />} />                            
                            <Route path="elec_detail/:id" element={<Elec_Detail />} />
                            <Route path="web_detail/:id" element={<Web_Detail />} />
                        </Route> 
                    </Routes>
            </BrowserRouter>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById('root'))