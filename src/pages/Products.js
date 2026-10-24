import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard.js';
import Spinner from '../components/Spinner.js';
import '../assets/css/products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showNotice, setShowNotice] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      setIsLoading(true);
      setError('');

      try {
        const query = location.search.startsWith('?')
          ? location.search.slice(1)
          : location.search;

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/products/active?${query}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error('We could not load the products right now.');
        }

        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('We couldn’t load the products. Please try again.');
          setProducts([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, [location.search]);

  return (
    <main className="products-page">
      <div className="products-page__inner">
{/*         {showNotice && (
          <aside className="products-notice" aria-label="Loading information">
            <p>
              First-time loading may take 20–30 seconds while the product
              service starts up.
            </p>
            <button
              className="products-notice__close"
              type="button"
              aria-label="Dismiss notice"
              onClick={() => setShowNotice(false)}
            >
              ×
            </button>
          </aside>
        )} */}

        <header className="products-header">
          <div>
            <p className="products-eyebrow">MADE FOR THE JOURNEY</p>
            <h1 className="products-page-title">Our Products</h1>
            <p className="products-page-description">
              Thoughtful essentials for wherever the road takes you.
            </p>
          </div>

        </header>

        {isLoading ? (
          <section className="products-loading" aria-label="Loading products">
            <Spinner />
            <p>Getting your essentials ready…</p>
          </section>
        ) : error ? (
          <section className="products-state" role="alert">
            <h2>Something went wrong</h2>
            <p>{error}</p>
            <button
              className="products-retry"
              type="button"
              onClick={() => {
                // Changing the search string is handled by the existing effect;
                // reload the current route when the query has not changed.
                window.location.reload();
              }}
            >
              Try again
            </button>
          </section>
        ) : products.length === 0 ? (
          <section className="products-state">
            <h2>No products found</h2>
            <p>There are no products to show at the moment. Please check back soon.</p>
          </section>
        ) : (
          <section className="products-results" aria-label="Product catalog">
            <div className="grid-container">
              {products.map((activeproduct) => (
                <ProductCard
                  key={activeproduct._id}
                  activeproductdata={activeproduct}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default Products;
