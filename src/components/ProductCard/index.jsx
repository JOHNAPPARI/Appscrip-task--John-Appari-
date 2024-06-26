import './index.css'

const ProductCard = ({ image, title, category, price }) => {
  return (
      <div className="product-card">
        <img className="image" src={image} alt={`${title}`} />
        <h3>{title}</h3>
        <div className='category-price'>
          <p>{category}</p>
          <p>${price}</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.62 20.8097C12.28 20.9297 11.72 20.9297 11.38 20.8097C8.48 19.8197 2 15.6897 2 8.68973C2 5.59973 4.49 3.09973 7.56 3.09973C9.38 3.09973 10.99 3.97973 12 5.33973C13.01 3.97973 14.63 3.09973 16.44 3.09973C19.51 3.09973 22 5.59973 22 8.68973C22 15.6897 15.52 19.8197 12.62 20.8097Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
  );
};

export default ProductCard