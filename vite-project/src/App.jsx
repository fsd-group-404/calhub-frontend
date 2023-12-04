import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import LandingPage from "./pages/LandingPage";
import MyGroupsPage from "./pages/MyGroupsPage";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <SearchPage />
              </SignedIn>
              <SignedOut>
                <LandingPage/>
              </SignedOut>
            </>
          }
        />
        <Route
          path="/my-groups"
          element={
            <>
              <SignedIn>
                <MyGroupsPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn/>
              </SignedOut>
            </>
          }
        />
        <Route
          path="/sign-in"
          element={
            <>
              <RedirectToSignIn/>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;
