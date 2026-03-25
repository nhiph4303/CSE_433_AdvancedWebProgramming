# 📝 Hướng Dẫn Giải Đề Thi CSE 433
> Theo đúng thứ tự từng câu trong đề

---

## Câu 1 (10đ) - Tạo Project Vite + React + TypeScript

```bash
npm create vite@latest phan-ngoc-hanh-nhi -- --template react-ts
cd phan-ngoc-hanh-nhi
npm install
```

---

## Câu 2a (10đ) - Cài và Cấu hình Tailwind CSS

**Bước 1 - Cài thư viện:**
```bash
npm install tailwindcss @tailwindcss/vite
```

**Bước 2 - Sửa [vite.config.ts](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/Demo/alert-3/vite.config.ts):**
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**Bước 3 - Xóa hết [src/index.css](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/Demo/alert-3/src/index.css), chỉ giữ dòng này:**
```css
@import "tailwindcss";
```

---

## Câu 2b (10đ) - Tạo [src/type.ts](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/type.ts)

```ts
export type User = {
  id: number | string;
  name: string;
  role: string;
  phoneNumber: string;
  email: string;
};

export type Product = {
  id: number | string;
  title: string;
  description: string;
  latestVersion: string;
};
```

---

## Câu 2c (5đ) - Tách Components (Header, Footer,...)

**Tạo [src/Footer.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/Footer.tsx):**
```tsx
export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; 2024 Advanced Web Programming. Examed by{" "}
          <span className="text-white font-bold">Hạnh Nhi</span>.
        </p>
      </div>
    </footer>
  );
}
```

**Tạo [src/Header.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/Header.tsx):**  
*(Lưu ý: NavLink và Login sẽ bổ sung ở câu d và h)*
```tsx
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export function Header() {
  const { user, login } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">TechStore</div>

        <nav className="space-x-6">
          {/* NavLink thêm ở câu 2d */}
        </nav>

        <div className="user-section">
          {/* Login thêm ở câu 2h */}
        </div>
      </div>
    </header>
  );
}
```

---

## Câu 2d (10đ) - Cài React Router Dom và Cấu hình Routing

**Bước 1 - Cài thư viện:**
```bash
npm install react-router-dom
```

**Bước 2 - Tạo [src/Layout.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/Layout.tsx)** (dùng Outlet):
```tsx
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-6 py-8 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

**Bước 3 - Tạo 3 Page rỗng:**

[src/HomePage.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/HomePage.tsx):
```tsx
export function HomePage() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Product List</h2>
      {/* Bảng sẽ thêm ở câu 2f */}
    </section>
  );
}
```

[src/AccountPage.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/AccountPage.tsx):
```tsx
export function AccountPage() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">User Profile</h2>
      {/* Profile sẽ thêm ở câu 2h */}
    </section>
  );
}
```

[src/AddNewPage.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/AddNewPage.tsx):
```tsx
export function AddNewPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Add New Product</h2>
      {/* Form sẽ thêm ở câu 2g */}
    </section>
  );
}
```

**Bước 4 - Sửa [src/App.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/Demo/alert-3/src/App.tsx)** (tạo Router):
```tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import { HomePage } from "./HomePage";
import { AccountPage } from "./AccountPage";
import { AddNewPage } from "./AddNewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },        // route "/"
      { path: "account", element: <AccountPage /> }, // route "/account"
      { path: "add-new", element: <AddNewPage /> },  // route "/add-new"
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

**Bước 5 - Sửa [src/Header.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/Header.tsx)** (thêm NavLink có highlight):
```tsx
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">TechStore</div>

        <nav className="space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            Account
          </NavLink>
          <NavLink
            to="/add-new"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-500"
            }
          >
            Add New
          </NavLink>
        </nav>

        <div className="user-section">
          {/* Login thêm ở câu 2h */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
}
```

---

## Câu 2e (5đ) - Cài JSON Server, tạo danh sách sản phẩm

**Bước 1 - Cài thư viện:**
```bash
npm install -D json-server
```

**Bước 2 - Tạo [db.json](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/Demo/api-demo/db.json) ở thư mục gốc:**
```json
{
  "products": [
    { "id": 1, "title": "Bàn phím cơ", "description": "Gõ siêu êm, có LED RGB", "latestVersion": "v1.2" },
    { "id": 2, "title": "Chuột Logitech", "description": "Không dây, pin 70 ngày", "latestVersion": "v3.0" },
    { "id": 3, "title": "Màn hình LG 27\"", "description": "4K IPS, 144Hz, HDR400", "latestVersion": "v2.1" }
  ]
}
```

**Bước 3 - Thêm script vào [package.json](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/Demo/api-demo/package.json):**
```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "server": "json-server --watch db.json --port 3001"
},
```

**Bước 4 - Chạy JSON Server (Terminal riêng):**
```bash
npm run server
```

---

## Câu 2f (15đ) - Fetch danh sách sản phẩm và hiển thị ở trang Home

**Sửa [src/HomePage.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/HomePage.tsx)** - thêm useState, useEffect, fetch, và bảng:
```tsx
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
    <section className="mb-10">
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
                <td className="p-4 font-medium text-gray-900">{product.title}</td>
                <td className="p-4 text-gray-500">{product.description}</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {product.latestVersion}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
```

---

## Câu 2g (20đ) - React Hook Form + Validate + POST lên JSON Server

**Bước 1 - Cài thư viện:**
```bash
npm install react-hook-form
```

**Bước 2 - Sửa [src/AddNewPage.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/AddNewPage.tsx):**
```tsx
import { useForm } from "react-hook-form";

type FormData = {
  title: string;
  description: string;
  latestVersion: string;
};

export function AddNewPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Add New Product</h2>
      <div className="bg-white shadow rounded-lg p-6 max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4 flex flex-col">
            <label className="font-medium mb-2">Product Title</label>
            <input
              type="text"
              {...register("title", { required: "Title không được trống" })}
              className="border border-gray-300 rounded px-4 py-2 focus:border-blue-500"
              placeholder="Title không được Null"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title.message}</span>
            )}
          </div>

          <div className="mb-4 flex flex-col">
            <label className="font-medium mb-2">Description</label>
            <textarea
              {...register("description", { required: "Description không được trống" })}
              className="border border-gray-300 rounded px-4 py-2 focus:border-blue-500 h-24"
              placeholder="Description không được Null"
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">{errors.description.message}</span>
            )}
          </div>

          <div className="mb-6 flex flex-col">
            <label className="font-medium mb-2">Latest Version</label>
            <input
              type="text"
              {...register("latestVersion")}
              className="border border-gray-300 rounded px-4 py-2 focus:border-blue-500"
              placeholder="e.g., v1.0"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
          >
            Add Submit
          </button>
        </form>
      </div>
    </section>
  );
}
```

---

## Câu 2h (15đ) - Implement Login với React Context

**Bước 1 - Tạo [src/AuthContext.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/AuthContext.tsx):**
```tsx
import { createContext, useState, type ReactNode } from "react";
import type { User } from "./type";

type AuthContextType = {
  user: User | null;
  login: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function login() {
    // Set value directly when Log in clicked (theo đề yêu cầu)
    setUser({
      id: 1,
      name: "Phan Ngọc Hạnh Nhi",
      role: "Admin",
      phoneNumber: "0987654321",
      email: "hanh.nhi@eiu.edu.vn",
    });
  }

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
```

**Bước 2 - Sửa [src/App.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/Demo/alert-3/src/App.tsx)** - bọc trong AuthProvider:
```tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import { HomePage } from "./HomePage";
import { AccountPage } from "./AccountPage";
import { AddNewPage } from "./AddNewPage";
import { AuthProvider } from "./AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "account", element: <AccountPage /> },
      { path: "add-new", element: <AddNewPage /> },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
```

**Bước 3 - Sửa [src/Header.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/Header.tsx)** - hiển thị "Hi, user" sau login:
```tsx
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export function Header() {
  const { user, login } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">TechStore</div>

        <nav className="space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-500"
            }
          >Home</NavLink>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-500"
            }
          >Account</NavLink>
          <NavLink
            to="/add-new"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-500"
            }
          >Add New</NavLink>
        </nav>

        <div className="user-section">
          {user ? (
            <span className="font-medium">Hi, {user.name}</span>
          ) : (
            <button
              onClick={login}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Log in
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
```

**Bước 4 - Sửa [src/AccountPage.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/AccountPage.tsx)** - hiển thị profile từ Context:
```tsx
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export function AccountPage() {
  const { user } = useContext(AuthContext);

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">User Profile</h2>
      <div className="bg-white shadow rounded-lg p-6 max-w-lg border-l-4 border-blue-500">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-blue-500 rounded-full text-white flex items-center justify-center text-2xl font-bold">
            U
          </div>
          <div>
            <h3 className="text-xl font-bold">{user?.name}</h3>
            <p className="text-blue-500 font-medium">{user?.role}</p>
          </div>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong className="w-32 inline-block">ID:</strong> {user?.id}</p>
          <p><strong className="w-32 inline-block">Phone:</strong> {user?.phoneNumber}</p>
          <p><strong className="w-32 inline-block">Email:</strong> {user?.email}</p>
        </div>
      </div>
    </section>
  );
}
```

---

---

## 🔥 NÂNG CAO - Thêm Xóa + Sửa vào HomePage

> Nếu đề hỏi thêm chức năng Delete / Update thì làm như sau:

**Sửa [src/HomePage.tsx](file:///c:/Users/hanie/OneDrive/Desktop/Ky-thuat-phan-mem/CSE_433_AdvancedWebProgramming/phan-ngoc-hanh-nhi/src/HomePage.tsx)** - thêm đủ CRUD:

```tsx
import { useEffect, useState } from "react";
import type { Product } from "./type";

export function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  // ===== READ =====
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  // ===== DELETE =====
  function handleDelete(id: number | string) {
    if (!confirm("Bạn có chắc muốn xóa?")) return;

    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      setProducts(products.filter((p) => p.id !== id));
    });
  }

  // ===== UPDATE =====
  function handleUpdate(id: number | string, newData: Partial<Product>) {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    }).then(() => {
      setProducts(
        products.map((p) => (p.id === id ? { ...p, ...newData } : p))
      );
    });
  }

  return (
    <section className="mb-10">
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
                <td className="p-4 font-medium text-gray-900">{product.title}</td>
                <td className="p-4 text-gray-500">{product.description}</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {product.latestVersion}
                  </span>
                </td>
                <td className="p-4 space-x-2">

                  {/* Nút SỬA - dùng prompt đơn giản */}
                  <button
                    onClick={() => {
                      const newTitle = prompt("Nhập tên mới:", product.title);
                      if (newTitle) handleUpdate(product.id, { title: newTitle });
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Sửa
                  </button>

                  {/* Nút XÓA */}
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Xóa
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
```

### 💡 Tóm tắt 4 method HTTP:

| Chức năng | Method | URL |
|-----------|--------|-----|
| Lấy danh sách | `GET` | `/products` |
| Thêm mới | `POST` | `/products` |
| Sửa | `PUT` | `/products/:id` |
| Xóa | `DELETE` | `/products/:id` |

---

## ⚠️ Checklist trước khi nộp

- [ ] Chạy app thử: `npm run dev` + `npm run server`
- [ ] Nhấn nút Login → hiện "Hi, [tên]" ở header
- [ ] Vào /account → thấy thông tin user
- [ ] Vào /add-new → submit form trống → hiện lỗi đỏ
- [ ] Submit form đầy đủ → data được thêm vào db.json
- [ ] Xóa `node_modules`
- [ ] Nén `.zip` / `.rar` → nộp Moodle
