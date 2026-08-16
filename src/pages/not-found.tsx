import { Link } from 'wouter';
import { Home as HomeIcon, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary/30 p-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
          <AlertCircle className="h-10 w-10 text-secondary" />
        </div>
        <h1 className="text-6xl font-bold font-serif text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-3">Page Not Found</h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          The page you are looking for may have been moved, deleted, or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button className="bg-secondary hover:bg-secondary/90 text-white">
            <HomeIcon className="w-4 h-4 mr-2" />
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
