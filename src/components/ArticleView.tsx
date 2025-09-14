import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Article } from './ArticleCard';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
}

export function ArticleView({ article, onBack }: ArticleViewProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Articles
      </Button>

      {/* Article Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">{article.category}</Badge>
          <span className="text-sm text-muted-foreground">{article.readTime}</span>
        </div>

        <h1 className="text-4xl mb-4">{article.title}</h1>

        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{article.publishDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="aspect-video overflow-hidden rounded-lg mb-8">
        <ImageWithFallback
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div className="text-lg text-muted-foreground mb-6">
          {article.excerpt}
        </div>
        
        <Separator className="my-6" />
        
        <div className="whitespace-pre-wrap leading-relaxed">
          {article.content}
        </div>
      </div>

      {/* Article Footer */}
      <div className="mt-12 pt-8 border-t">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Was this article helpful? Share it with others who might benefit.
            </p>
          </div>
          
          <Button>
            <Share2 className="h-4 w-4 mr-2" />
            Share Article
          </Button>
        </div>
      </div>
    </div>
  );
}