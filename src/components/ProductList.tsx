import type { Product } from "../types/Product";
import { ProductCard } from "./ProductCard";
import "../styles/ProductList.css";

const products: Product[] = [
    {
        id: "p1",
        name: "Zapatillas Runner Pro",
        price: 85000,
        category: "Calzado",
        description: "Zapatillas deportivas ideales para running y entrenamiento.",
        stock: 15,
    },
    {
        id: "p2",
        name: "Mochila Ergonómica",
        price: 45000,
        category: "Accesorios",
        description: "Mochila funcional con diseño moderno y múltiples compartimentos.",
        stock: 20,
    },
    {
        id: "p3",
        name: "Auriculares ANC",
        price: 65000,
        category: "Tecnología",
        description: "Auriculares inalámbricos con cancelación activa de ruido.",
        stock: 10,
    },
    {
        id: "p4",
        name: "Smartwatch Active",
        price: 120000,
        category: "Tecnología",
        description: "Reloj inteligente para acompañar tus actividades diarias.",
        stock: 8,
    },
];

export const ProductList = () => {
    return (
        <section className="product-list">

            <div className="product-list__header">
                <span className="product-list__eyebrow">
                    NUESTRA COLECCIÓN
                </span>

                <h1 className="product-list__title">
                    Descubrí nuestros productos
                </h1>

                <p className="product-list__subtitle">
                    Encontrá tus próximos favoritos.
                </p>
            </div>

            <div className="product-list__grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </section>
    );
};