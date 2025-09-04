import ProductCard from "./ProductCard";
import headphones from "@/assets/headphones.jpg";
import smartwatch from "@/assets/smartwatch.jpg";
import laptop from "@/assets/laptop.jpg";
import smartphone from "@/assets/smartphone.jpg";

const products = [
  {
    id: 1,
    image: headphones,
    title: "Premium Wireless Headphones",
    price: "$299",
    originalPrice: "$399",
  },
  {
    id: 2,
    image: smartwatch,
    title: "Smart Fitness Watch",
    price: "$199",
  },
  {
    id: 3,
    image: laptop,
    title: "Ultra-thin Laptop",
    price: "$1,299",
    originalPrice: "$1,499",
  },
  {
    id: 4,
    image: smartphone,
    title: "Latest Smartphone",
    price: "$899",
  },
];

const ProductGrid = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium technology products designed to enhance your lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;