import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { PageHeader } from './PageHeader';
import { 
  Heart, 
  Activity, 
  Apple, 
  Stethoscope, 
  Shield, 
  Brain, 
  Users, 
  Target,
  CheckCircle,
  AlertCircle,
  Calendar,
  Clock
} from 'lucide-react';

export function DiabetesGuide() {
  const sections = [
    {
      icon: Target,
      title: "Understanding Your Goals",
      description: "Setting realistic targets for successful diabetes management",
      content: [
        "Blood sugar targets: A1C <7%, pre-meal 80-130 mg/dL, post-meal <180 mg/dL",
        "Blood pressure: <140/90 mmHg (or <130/80 if high cardiovascular risk)",
        "Cholesterol: LDL <100 mg/dL, HDL >40 mg/dL (men) or >50 mg/dL (women)",
        "Weight management: Maintain healthy BMI and waist circumference",
        "Regular exercise: 150 minutes of moderate activity per week"
      ]
    },
    {
      icon: Apple,
      title: "Nutrition & Meal Planning",
      description: "Building a sustainable, diabetes-friendly eating plan",
      content: [
        "Use the diabetes plate method: ½ non-starchy vegetables, ¼ lean protein, ¼ carbohydrates",
        "Choose complex carbohydrates over simple sugars",
        "Focus on whole foods: fruits, vegetables, whole grains, lean proteins",
        "Practice portion control and consistent meal timing",
        "Stay hydrated with water as your primary beverage",
        "Limit processed foods, sugary drinks, and foods high in saturated fat"
      ]
    },
    {
      icon: Activity,
      title: "Physical Activity & Exercise",
      description: "Safe and effective exercise strategies for diabetes",
      content: [
        "Include both aerobic exercise and resistance training",
        "Start slowly and gradually increase intensity",
        "Monitor blood sugar before, during, and after exercise",
        "Carry quick-acting carbohydrates during workouts",
        "Stay hydrated and wear proper footwear",
        "Choose activities you enjoy for long-term success"
      ]
    },
    {
      icon: Stethoscope,
      title: "Monitoring & Medical Care",
      description: "Regular testing and healthcare team collaboration",
      content: [
        "Check blood sugar as recommended by your healthcare provider",
        "Schedule regular A1C tests every 3 months",
        "Get annual comprehensive eye exams",
        "Monitor blood pressure regularly",
        "Keep up with kidney function tests",
        "Maintain open communication with your healthcare team"
      ]
    },
    {
      icon: Shield,
      title: "Preventing Complications",
      description: "Proactive steps to protect your long-term health",
      content: [
        "Maintain target blood sugar, blood pressure, and cholesterol levels",
        "Don't smoke or use tobacco products",
        "Perform daily foot inspections and proper foot care",
        "Keep up with recommended screenings and vaccinations",
        "Manage stress through relaxation techniques",
        "Get adequate sleep (7-9 hours per night)"
      ]
    },
    {
      icon: Brain,
      title: "Mental Health & Wellbeing",
      description: "Addressing the emotional aspects of diabetes management",
      content: [
        "Acknowledge that diabetes burnout is normal and temporary",
        "Practice stress management techniques like meditation or deep breathing",
        "Maintain social connections and seek support when needed",
        "Set realistic expectations and celebrate small victories",
        "Consider counseling if you're struggling with diabetes management",
        "Focus on what you can control rather than dwelling on setbacks"
      ]
    },
    {
      icon: Users,
      title: "Building Your Support Network",
      description: "Creating connections for encouragement and accountability",
      content: [
        "Work closely with your healthcare team",
        "Connect with family and friends for emotional support",
        "Join diabetes support groups or online communities",
        "Consider working with a certified diabetes educator",
        "Find an exercise buddy or accountability partner",
        "Stay connected with others who understand your journey"
      ]
    }
  ];

  const dailyHabits = [
    "Check blood sugar as recommended",
    "Take medications as prescribed", 
    "Eat balanced meals at regular times",
    "Stay physically active",
    "Drink plenty of water",
    "Monitor feet for any changes",
    "Practice stress management",
    "Get adequate sleep"
  ];

  const warningSignsToWatch = [
    "Persistent high blood sugar readings",
    "Frequent low blood sugar episodes",
    "Changes in vision",
    "Numbness or tingling in hands or feet",
    "Slow-healing cuts or sores",
    "Unusual fatigue or weakness",
    "Frequent infections",
    "Chest pain or shortness of breath"
  ];

  const monthlyTasks = [
    "Review blood sugar logs with your healthcare provider",
    "Check blood pressure",
    "Weigh yourself and track progress",
    "Examine feet thoroughly",
    "Assess medication effectiveness",
    "Evaluate stress levels and coping strategies"
  ];

  const yearlyScreenings = [
    "Comprehensive eye exam",
    "Kidney function tests",
    "Cholesterol screening",
    "Dental checkup",
    "Flu vaccination",
    "Complete physical exam"
  ];

  return (
    <div className="space-y-8">
      <PageHeader 
        title="Your Guide to Living Well with Diabetes"
        description="A comprehensive resource for managing diabetes and maintaining a healthy, fulfilling life"
      />

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500" />
            Welcome to Your Diabetes Journey
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Living well with diabetes is absolutely possible. While diabetes requires ongoing attention and care, 
            millions of people successfully manage their condition and live full, active lives. This comprehensive 
            guide provides you with the knowledge, tools, and strategies you need to take control of your diabetes 
            and thrive.
          </p>
          <p>
            Remember, diabetes management is not about perfection—it's about making consistent, positive choices 
            that support your health. Every small step you take toward better self-care makes a difference in your 
            overall wellbeing.
          </p>
        </CardContent>
      </Card>

      {/* Main sections */}
      <div className="grid gap-6">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <section.icon className="h-6 w-6 text-blue-600" />
                {section.title}
              </CardTitle>
              <p className="text-muted-foreground">{section.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Daily, Monthly, and Yearly Tasks */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              Daily Habits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {dailyHabits.map((habit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{habit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Monthly Check-ins
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {monthlyTasks.map((task, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{task}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-purple-600" />
              Annual Screenings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {yearlyScreenings.map((screening, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{screening}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Warning Signs */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <AlertCircle className="h-6 w-6" />
            Warning Signs to Watch For
          </CardTitle>
          <p className="text-orange-700">
            Contact your healthcare provider if you experience any of these symptoms:
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-2">
            {warningSignsToWatch.map((sign, index) => (
              <div key={index} className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-orange-800">{sign}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">Key Takeaways for Living Well</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Consistency Matters
              </Badge>
              <p className="text-sm text-blue-700">
                Small, consistent actions are more effective than perfect days followed by setbacks.
              </p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                You're Not Alone
              </Badge>
              <p className="text-sm text-blue-700">
                Build a strong support network including your healthcare team, family, and friends.
              </p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Knowledge is Power
              </Badge>
              <p className="text-sm text-blue-700">
                Stay informed about diabetes management and new developments in care.
              </p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Progress Over Perfection
              </Badge>
              <p className="text-sm text-blue-700">
                Focus on making gradual improvements rather than trying to be perfect.
              </p>
            </div>
          </div>
          
          <Separator />
          
          <div className="text-center">
            <p className="font-medium text-blue-800">
              Remember: You have the power to successfully manage your diabetes and live a full, healthy life.
            </p>
            <p className="text-sm text-blue-700 mt-2">
              Work with your healthcare team to create a personalized plan that fits your lifestyle and goals.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}