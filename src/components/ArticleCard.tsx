import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  imageUrl: string;
  readTime: string;
}

interface ArticleCardProps {
  article: Article;
  onReadMore: (articleId: string) => void;
}

export function ArticleCard({ article, onReadMore }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden">
        <ImageWithFallback
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{article.category}</Badge>
          <span className="text-sm text-muted-foreground">{article.readTime}</span>
        </div>
        
        <h3 className="line-clamp-2 hover:text-primary cursor-pointer transition-colors">
          {article.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{article.publishDate}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {article.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onReadMore(article.id)}
            className="ml-auto"
          >
            Read More
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}