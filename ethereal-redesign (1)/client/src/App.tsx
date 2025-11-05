import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AudioManager } from "./components/AudioManager";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import Tutorial from "./pages/Tutorial";
import Generator from "./pages/Generator";
import Backup from "./pages/Backup";
import Bypasser from "./pages/Bypasser";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/tutorial"} component={Tutorial} />
      <Route path={"/generator"} component={Generator} />
      <Route path={"/backup"} component={Backup} />
      <Route path={"/bypasser"} component={Bypasser} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <LoadingScreen />
          <AudioManager />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;