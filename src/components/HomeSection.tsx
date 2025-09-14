import { HeroSection } from './HeroSection';
import { articles } from '../data/articles';

interface HomeSectionProps {
  onNavigate: (section: string) => void;
  onReadMore: (articleId: string) => void;
}

export function HomeSection({ onNavigate, onReadMore }: HomeSectionProps) {
  return (
    <div className="space-y-16">
      <HeroSection onNavigate={onNavigate} />
      <div>
        <h2 className="text-3xl text-center mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article) => (
            <div key={article.id} className="group cursor-pointer" onClick={() => onReadMore(article.id)}>
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="group-hover:text-primary transition-colors mb-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {article.excerpt}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('articles')}
            className="text-primary hover:underline"
          >
            View All Articles →
          </button>
        </div>
      </div>
    </div>
  );
}