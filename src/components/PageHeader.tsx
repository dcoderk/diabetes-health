interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl mb-4">{title}</h1>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  );
}