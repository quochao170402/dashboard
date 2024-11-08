// src/components/Breadcrumbs.tsx
import { Route } from "@/@types/MenuItem";
import { routes } from "@/utils/routeConfig";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const findRoute = (path: string, routes: Route[]): Route | undefined => {
  for (const route of routes) {
    if (route.path === path) return route;
    if (route.children) {
      const childRoute = findRoute(path, route.children);
      if (childRoute) return childRoute;
    }
  }
  return undefined;
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Generate breadcrumbs based on current path segments
  const breadcrumbs = pathnames.map((_, index) => {
    const routePath = `/${pathnames.slice(0, index + 1).join("/")}`;
    const route = findRoute(routePath, routes);

    return route ? (
      <Link
        key={route.path}
        to={routePath}
        className="text-blue-600 hover:underline"
      >
        {route.name}
      </Link>
    ) : null;
  });

  return (
    <nav className="text-sm text-gray-600">
      <ol className="flex space-x-2">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <span className="mx-2">/</span>
            <li>{breadcrumb}</li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
