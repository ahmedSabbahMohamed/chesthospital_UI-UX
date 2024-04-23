import { useTranslation } from "react-i18next"
import ReceptionRoutes from "./routes/ReceptionRoutes"

function App() {
  const { t } = useTranslation()

  return (
    <div dir={t("dir")}>
      <ReceptionRoutes />
    </div>
  )
}

export default App
