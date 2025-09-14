import { useState } from 'react';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { ArticleList } from './components/ArticleList';
import { ArticleView } from './components/ArticleView';
import { AboutSection } from './components/AboutSection';
import { ContactForm } from './components/ContactForm';
import { DiabetesGuide } from './components/DiabetesGuide';
import { PageHeader } from './components/PageHeader';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { articles } from './data/articles';
import { Article } from './components/ArticleCard';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleNavigation = (section: string) => {
    setCurrentSection(section);
    setSelectedArticle(null);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentSection('articles');
    setSelectedArticle(null);
  };

  const handleReadMore = (articleId: string) => {
    const article = articles.find(a => a.id === articleId);
    if (article) {
      setSelectedArticle(article);
    }
  };

  const handleBackToArticles = () => {
    setSelectedArticle(null);
  };

  const renderContent = () => {
    if (selectedArticle) {
      return <ArticleView article={selectedArticle} onBack={handleBackToArticles} />;
    }

    switch (currentSection) {
      case 'home':
        return <HomeSection onNavigate={handleNavigation} onReadMore={handleReadMore} />;
      case 'articles':
        return (
          <div>
            <PageHeader 
              title="Diabetes Articles"
              description="Evidence-based information to help you manage diabetes effectively"
            />
            <ArticleList
              articles={articles}
              onReadMore={handleReadMore}
              searchQuery={searchQuery}
            />
          </div>
        );
      case 'diabetes-guide':
        return <DiabetesGuide />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return (
          <div>
            <PageHeader 
              title="Contact Us"
              description="Have questions about diabetes? We're here to help."
            />
            <ContactForm />
          </div>
        );
      default:
        return <HomeSection onNavigate={handleNavigation} onReadMore={handleReadMore} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSearch={handleSearch}
        onNavigate={handleNavigation}
        currentSection={currentSection}
      />
      
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigation} />

      <Toaster />
    </div>
  );
}