import AppRoutes from "./components/AppRoutes";
import Layout from "./components/Layout"
import { BrowserRouter as Router } from "react-router-dom";

function App() {  
  return (
    <Router>
    <>
    <Layout>
      <AppRoutes />
    </Layout>
          </>
          </Router>
  )
}

export default App
