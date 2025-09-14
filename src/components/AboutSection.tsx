import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Heart, Brain, Activity, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const diabetesTypes = [
    {
      title: 'Type 1 Diabetes',
      description: 'An autoimmune condition where the body attacks insulin-producing cells',
      prevalence: '5-10% of cases',
      color: 'bg-blue-50 text-blue-700'
    },
    {
      title: 'Type 2 Diabetes',
      description: 'The body becomes resistant to insulin or doesn\'t produce enough',
      prevalence: '90-95% of cases',
      color: 'bg-green-50 text-green-700'
    },
    {
      title: 'Gestational Diabetes',
      description: 'Develops during pregnancy and usually resolves after birth',
      prevalence: '2-10% of pregnancies',
      color: 'bg-purple-50 text-purple-700'
    }
  ];

  const managementPillars = [
    {
      icon: Heart,
      title: 'Healthy Eating',
      description: 'Balanced nutrition and carbohydrate management'
    },
    {
      icon: Activity,
      title: 'Regular Exercise',
      description: 'Physical activity to improve insulin sensitivity'
    },
    {
      icon: Brain,
      title: 'Blood Sugar Monitoring',
      description: 'Regular testing to track glucose levels'
    },
    {
      icon: Shield,
      title: 'Medication Management',
      description: 'Proper use of insulin and other diabetes medications'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl text-primary">About Diabetes</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Diabetes is a group of metabolic disorders characterized by high blood sugar levels. 
          Understanding your condition is the first step toward effective management and living a healthy life.
        </p>
      </div>

      {/* What is Diabetes */}
      <Card>
        <CardHeader>
          <CardTitle>What is Diabetes?</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p>
              Diabetes occurs when your blood glucose (blood sugar) is too high. Blood glucose is your main source of energy and comes from the food you eat. Insulin, a hormone made by the pancreas, helps glucose from food get into your cells to be used for energy.
            </p>
            <p>
              Sometimes your body doesn't make enough—or any—insulin or doesn't use insulin well. Glucose then stays in your blood and doesn't reach your cells, leading to various health problems over time.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Did you know?</strong> Over 463 million adults worldwide live with diabetes, and this number is expected to rise to 700 million by 2045.
              </p>
            </div>
          </div>
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&h=400"
              alt="Blood glucose monitoring"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </CardContent>
      </Card>

      {/* Types of Diabetes */}
      <div>
        <h2 className="text-3xl text-center mb-8">Types of Diabetes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {diabetesTypes.map((type, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <Badge className={type.color}>{type.prevalence}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Management Pillars */}
      <div>
        <h2 className="text-3xl text-center mb-8">The Four Pillars of Diabetes Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {managementPillars.map((pillar, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Risk Factors */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Factors for Type 2 Diabetes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="mb-4">Modifiable Risk Factors</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Overweight or obesity</li>
                <li>• Physical inactivity</li>
                <li>• Unhealthy diet</li>
                <li>• Smoking</li>
                <li>• High blood pressure</li>
                <li>• High cholesterol levels</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Non-Modifiable Risk Factors</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Age (45 years or older)</li>
                <li>• Family history of diabetes</li>
                <li>• Ethnicity</li>
                <li>• History of gestational diabetes</li>
                <li>• Polycystic ovary syndrome (PCOS)</li>
                <li>• Previous heart disease or stroke</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Symptoms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Common Symptoms</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Frequent urination</li>
              <li>• Excessive thirst</li>
              <li>• Increased hunger</li>
              <li>• Unexplained weight loss</li>
              <li>• Fatigue and weakness</li>
              <li>• Blurred vision</li>
              <li>• Slow-healing cuts or bruises</li>
              <li>• Frequent infections</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>When to See a Doctor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Contact your healthcare provider if you experience any diabetes symptoms or if you have risk factors for the condition.
            </p>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-red-700">
                <strong>Emergency:</strong> Seek immediate medical attention if you have symptoms of diabetic ketoacidosis (DKA) including nausea, vomiting, abdominal pain, fruity-smelling breath, or difficulty breathing.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Living Well with Diabetes */}
      <Card>
        <CardHeader>
          <CardTitle>Living Well with Diabetes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            While diabetes is a serious condition, millions of people live full, healthy lives with proper management. The key is education, support, and working closely with your healthcare team to develop a personalized management plan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl mb-2">📚</div>
              <h4>Education</h4>
              <p className="text-sm text-muted-foreground">Learn about your condition and management strategies</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl mb-2">👥</div>
              <h4>Support</h4>
              <p className="text-sm text-muted-foreground">Connect with family, friends, and diabetes communities</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <h4>Action</h4>
              <p className="text-sm text-muted-foreground">Take daily steps to manage your health</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}