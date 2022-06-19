import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

const Router = props => {
    return <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/users" element={<UserCrud/>}/> {/* Essa rota renderiza o componente UserCrud */}
        <Route path="*" element={<Home/>}/> {/* Qualquer rota renderizará o home */}
    </Routes>
}

export default Router;