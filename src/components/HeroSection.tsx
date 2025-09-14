import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Heart, BookOpen, Users, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const features = [
    {
      icon: Heart,
      title: 'Expert Care Tips',
      description: 'Evidence-based advice from healthcare professionals'
    },
    {
      icon: BookOpen,
      title: 'Educational Content',
      description: 'Comprehensive guides on diabetes management'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others on similar health journeys'
    },
    {
      icon: Shield,
      title: 'Trusted Information',
      description: 'Medically reviewed content you can rely on'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl text-primary">
              Your Guide to Living Well with Diabetes
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover evidence-based information, practical tips, and supportive resources 
              to help you manage diabetes confidently and live your best life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => onNavigate('diabetes-guide')}>
                Complete Guide
              </Button>
              <Button variant="outline" size="lg" onClick={() => onNavigate('articles')}>
                Browse Articles
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=600"
              alt="Healthcare professional with diabetes management tools"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="bg-primary text-primary-foreground rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl mb-4">Diabetes by the Numbers</h2>
          <p className="text-primary-foreground/80">
            Understanding the scope and impact of diabetes worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">463M</div>
            <p className="text-primary-foreground/80">Adults living with diabetes globally</p>
          </div>
          <div>
            <div className="text-4xl mb-2">1 in 11</div>
            <p className="text-primary-foreground/80">Adults affected worldwide</p>
          </div>
          <div>
            <div className="text-4xl mb-2">90%</div>
            <p className="text-primary-foreground/80">Have Type 2 diabetes</p>
          </div>
        </div>
      </div>
    </div>
  );
}