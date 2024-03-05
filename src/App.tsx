import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import { useTranslation } from "react-i18next"

function App() {
  const { t } = useTranslation()

  return (
    <div dir={t("dir")}>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
