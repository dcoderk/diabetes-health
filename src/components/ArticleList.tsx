import { useState, useMemo } from 'react';
import { ArticleCard, Article } from './ArticleCard';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search } from 'lucide-react';

interface ArticleListProps {
  articles: Article[];
  onReadMore: (articleId: string) => void;
  searchQuery?: string;
}

export function ArticleList({ articles, onReadMore, searchQuery = '' }: ArticleListProps) {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  const categories = useMemo(() => {
    const cats = articles.map(article => article.category);
    return ['all', ...Array.from(new Set(cats))];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = localSearchQuery === '' || 
        article.title.toLowerCase().includes(localSearchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(localSearchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(localSearchQuery.toLowerCase()));
      
      const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });
  }, [articles, localSearchQuery, categoryFilter]);

  // Update local search when prop changes
  useState(() => {
    setLocalSearchQuery(searchQuery);
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredArticles.length} of {articles.length} articles
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onReadMore={onReadMore}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No articles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}