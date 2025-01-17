import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";

export const AppRouter = () => {

    const authStatus = 'non-authenticated';

    return (
        <Routes>
                {/* TODO{
                    (authStatus === 'non-authenticated') 
                    ? <
                } */}

                <Route path="/auth/*" element={<LoginPage />} />
                <Route path="/*" element={<CalendarPage />} />
        </Routes>
    )
};
