import { Layout } from "@/components/layout/Layout";
import { Toaster } from "@/components/ui/sonner";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { HomePage } from "@/pages/HomePage";
import { OffersPage } from "@/pages/OffersPage";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

// Root route with layout
const rootRoute = createRootRoute({
  component: Layout,
});

// Child routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const offersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/offers",
  component: OffersPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

// Create router
const routeTree = rootRoute.addChildren([
  indexRoute,
  offersRoute,
  dashboardRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </>
  );
}
