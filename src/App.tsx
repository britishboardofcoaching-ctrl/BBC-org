import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/Home';
import CPDPage from '@/pages/CPDPage';
import CommunityPage from '@/pages/CommunityPage';
import ResourcesPage from '@/pages/ResourcesPage';
import GetCoachingPage from '@/pages/GetCoachingPage';
import CoachEducatorsPage from '@/pages/CoachEducatorsPage';
import MembershipPage from '@/pages/MembershipPage';
import SummitTicketsPage from '@/pages/SummitTicketsPage';
import InstitutionalAccreditationPage from '@/pages/InstitutionalAccreditationPage';
import { AIChatWidget } from '@/components/AIChatWidget';
import { NeedHelpButton } from '@/components/NeedHelpButton';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cpd" component={CPDPage} />
      <Route path="/community" component={CommunityPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/get-coaching" component={GetCoachingPage} />
      <Route path="/coach-educators" component={CoachEducatorsPage} />
      <Route path="/institutional-accreditation" component={InstitutionalAccreditationPage} />
      <Route path="/academic-coaching" component={MembershipPage} />
      <Route path="/summit-tickets" component={SummitTicketsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
          <Router />
          <AIChatWidget />
          <NeedHelpButton />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
