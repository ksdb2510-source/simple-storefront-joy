import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
}

const ProductCard = ({ image, title, price, originalPrice }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer border-border bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="aspect-square overflow-hidden bg-secondary/30">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">
            {price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;