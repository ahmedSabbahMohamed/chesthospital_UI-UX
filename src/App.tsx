import { useTranslation } from "react-i18next"
import DoctorRoutes from "./routes/DoctorRoutes"

function App() {
  const { t } = useTranslation()

  return (
    <div dir={t("dir")}>
      <DoctorRoutes />
    </div>
  )
}

export default App
