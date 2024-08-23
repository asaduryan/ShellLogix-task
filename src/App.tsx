import { Routes, Route } from "react-router-dom";
import SurveysPage from "./components/SurveysPage";
import { PageLayout } from "./layout";
import { categoryData } from "./components/SideMenu/utils";
import Auth from "./components/AuthPage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<SurveysPage />} />
        <Route path="/auth" element={<Auth />} />
        {categoryData.map((item, i) => {
          return (
            <Route key={i} path={item.path} element={<h1>{item.name}</h1>} />
          );
        })}
      </Routes>
    </PageLayout>
  );
}

export default App;
