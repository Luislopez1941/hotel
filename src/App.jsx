import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CustomerRootPage from './page/customer/RootPage';
import RootPage from './page/admin/RootPage';
import AuthPage from './page/AuthPage';
import PageNotFound from './page/NotFound';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<CustomerRootPage />} />
          <Route path="/app" element={<CustomerRootPage />} />
        <Route exact path="/login" element={<AuthPage />} />
        <Route exact path="/registration" element={<AuthPage />} />
        <Route exact path="/password-reset-account-verify" element={<AuthPage />} />
        <Route exact path="/password-reset" element={<AuthPage />} />
        {/* Admin Routers */}
        <Route path="/admin" element={<RootPage />} />
        <Route exact path="" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
