import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/simple" element={<SimplePage />} />
    </Routes>
  );
}

function HomePage() {
  return <h1>Home Page</h1>;
}

function SimplePage() {
  return <h1>Simple Page</h1>;
}

export default App;
