import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"


export const JournalApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </>
  )
}
