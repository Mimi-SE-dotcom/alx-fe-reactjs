import { Navigate } from "react-router-dom";

// Simple mock authentication hook
function useAuth() {
  // Replace this with real authentication logic later if needed
  const user = { loggedIn: true }; // or false to test redirect
  return user && user.loggedIn;
}

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}