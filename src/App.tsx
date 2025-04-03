
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import InstitutionDashboard from "./pages/InstitutionDashboard";
import DealerDashboard from "./pages/DealerDashboard";
import Browse from "./pages/Browse";
import HowItWorks from "./pages/HowItWorks";
import InstitutionLanding from "./pages/InstitutionLanding";
import DealerLanding from "./pages/DealerLanding";
import ContactSales from "./pages/ContactSales";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/institutions/dashboard" element={<InstitutionDashboard />} />
          <Route path="/dealers/dashboard" element={<DealerDashboard />} />
          <Route path="/institutions" element={<InstitutionLanding />} />
          <Route path="/dealers" element={<DealerLanding />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<ContactSales />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
