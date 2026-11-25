import type { Product } from "../types/Product";
import "../styles/ProductCard.css";

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <article className="product-card">

            {/* Imagen del producto */}
            <div className="product-card__image-container">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-card__image"
                    />
                ) : (
                    <div className="product-card__image-placeholder">
                        <span>{product.category}</span>
                    </div>
                )}
            </div>

            {/* Información del producto */}
            <div className="product-card__content">

                <span className="product-card__category">
                    {product.category}
                </span>

                <h2 className="product-card__title">
                    {product.name}
                </h2>

                <p className="product-card__description">
                    {product.description}
                </p>

                <div className="product-card__footer">

                    <span className="product-card__price">
                        ${product.price.toLocaleString("es-AR")}
                    </span>

                    <button
                        className="product-card__button"
                        type="button"
                        disabled
                    >
                        Agregar al carrito
                    </button>

                </div>
            </div>
        </article>
    );
};