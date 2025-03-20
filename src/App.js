import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Context Providers
import { AuthProvider } from './contexts/AuthContext';

// Layout
import Layout from './components/layout/Layout';

// Pages
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import StudentsPage from './pages/StudentsPage';
import TeachersPage from './pages/TeachersPage';
import CompaniesPage from './pages/CompaniesPage';
import MonitoringPage from './pages/MonitoringPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

// Auth related components
import ProtectedRoute from './components/auth/ProtectedRoute';

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            
            <Route element={<ProtectedRoute />}>
              <Route 
                path="/" 
                element={
                  <Layout>
                    <DashboardPage />
                  </Layout>
                } 
              />
              
              <Route 
                path="/users" 
                element={
                  <Layout>
                    <UsersPage />
                  </Layout>
                } 
              />
              
              <Route 
                path="/students" 
                element={
                  <Layout>
                    <StudentsPage />
                  </Layout>
                } 
              />
              
              <Route 
                path="/teachers" 
                element={
                  <Layout>
                    <TeachersPage />
                  </Layout>
                } 
              />
              
              <Route 
                path="/companies" 
                element={
                  <Layout>
                    <CompaniesPage />
                  </Layout>
                } 
              />
              
              <Route 
                path="/monitoring" 
                element={
                  <Layout>
                    <MonitoringPage />
                  </Layout>
                } 
              />
              
              <Route 
                path="/settings" 
                element={
                  <Layout>
                    <SettingsPage />
                  </Layout>
                } 
              />
              
              <Route 
                path="/profile" 
                element={
                  <Layout>
                    <ProfilePage />
                  </Layout>
                } 
              />
            </Route>
            
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;