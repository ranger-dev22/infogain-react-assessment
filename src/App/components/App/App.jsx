import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import PointsListView from "../../../PurchasePoints/views/PointsListView/PointsListView";
import ErrorBoundary from "../../../Common/components/ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<PointsListView />} />
        </Routes>
      </>
    </ErrorBoundary>
  );
};

export default App;
