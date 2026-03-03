import { Outlet, useLocation } from "@tanstack/react-router";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main key={location.pathname} className="flex-1 page-enter">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
