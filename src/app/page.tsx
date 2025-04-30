import { getCurrentSession } from "@/actions/auth";
import { getAllProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const Home = async () => {
  const { user } = await getCurrentSession();
  const products = await getAllProducts();

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="p-4 border">
          <h2>{product.title}</h2>
          {product.image && <img src={urlFor(product.image).url()} alt={product.title} />}
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
