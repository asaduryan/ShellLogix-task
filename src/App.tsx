import { Routes, Route } from "react-router-dom";
import SurveysPage from "./components/SurveysPage";
import { PageLayout } from "./layout";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<SurveysPage />} />
        <Route path="/simple" element={<SimplePage />} />
      </Routes>
    </PageLayout>
  );
}

function SimplePage() {
  return <h1>Simple Page</h1>;
}

export default App;
