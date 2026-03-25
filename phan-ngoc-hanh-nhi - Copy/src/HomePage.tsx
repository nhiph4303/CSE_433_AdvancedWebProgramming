import { useEffect, useState } from "react";
import type { Product } from "./type";

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  function handleDelete(id: number | string) {
    if (!confirm("Bạn có chắc muốn xóa?")) return;

    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      // Xóa khỏi state luôn, không cần fetch lại
      setProducts(products.filter((p) => p.id !== id));
    });
  }

  function handleUpdate(id: number | string, newData: Partial<Product>) {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    }).then(() => {
      // Cập nhật state
      setProducts(
        products.map((p) => (p.id === id ? { ...p, ...newData } : p)),
      );
    });
  }

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
                <th className="p-4">Action</th>
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

                  <td className="p-4">
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Xóa
                    </button>
                  </td>

                  <button
                    onClick={() => {
                      const newTitle = prompt("Nhập tên mới:", product.title);
                      if (newTitle)
                        handleUpdate(product.id, { title: newTitle });
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-sm mr-2"
                  >
                    Sửa
                  </button>
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
