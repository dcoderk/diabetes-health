interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-muted mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="mb-4">Diabetes Health & Balance</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted source for diabetes education and support.
            </p>
          </div>
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('home')} className="text-muted-foreground hover:text-primary">Home</button></li>
              <li><button onClick={() => onNavigate('articles')} className="text-muted-foreground hover:text-primary">Articles</button></li>
              <li><button onClick={() => onNavigate('diabetes-guide')} className="text-muted-foreground hover:text-primary">Diabetes Guide</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-muted-foreground hover:text-primary">About Diabetes</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-muted-foreground hover:text-primary">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Blood Sugar Monitoring</li>
              <li>Meal Planning</li>
              <li>Exercise Guidelines</li>
              <li>Emergency Preparedness</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Find a Healthcare Provider</li>
              <li>Support Groups</li>
              <li>Educational Webinars</li>
              <li>Community Forums</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Diabetes Health & Balance. All rights reserved.</p>
          <p className="mt-2">
            <strong>Medical Disclaimer:</strong> This website provides educational information only and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}