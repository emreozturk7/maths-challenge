import React from "react";
import { Routes, Route } from "react-router-dom";
import ChallengePage from "../pages/ChallengePage";
import FirstPage from "../pages/FirstPage";
import ResultPage from "../pages/ResultPage";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="challenge_page" element={<ChallengePage />} />
            <Route path="result_page" element={<ResultPage />} />
        </Routes>
    )
}

export default Router;