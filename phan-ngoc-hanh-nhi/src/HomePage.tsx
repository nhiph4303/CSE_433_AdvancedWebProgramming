import { useEffect, useState } from "react";
import type { Product } from "./type";

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return (
    <>
      <section id="home-page" className="mb-10">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Product List</h2>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600 border-b-2">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Title</th>
                <th className="p-4">Description</th>
                <th className="p-4">Latest Version</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 border-b">
                  <td className="p-4">{product.id}</td>
                  <td className="p-4 font-medium text-gray-900">
                    {product.title}
                  </td>
                  <td className="p-4 text-gray-500">{product.description}</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      {product.latestVersion}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <tbody>
              <tr className="hover:bg-gray-50 border-b">
                <td className="p-4">1</td>
                <td className="p-4 font-medium text-gray-900">Bàn phím cơ</td>
                <td className="p-4 text-gray-500">Gõ siêu êm, có LED RGB</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    v1.2
                  </span>
                </td>
              </tr>
            </tbody> */}
          </table>
        </div>
      </section>
    </>
  );
}
