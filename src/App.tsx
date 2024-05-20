import { useTranslation } from "react-i18next";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const { t } = useTranslation()

  return (
    <div dir={t("dir")}>
      <AppRoutes />
    </div>
  )
}

export default App
