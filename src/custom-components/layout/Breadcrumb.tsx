// src/components/Layout/Breadcrumb.js
import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumb">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={index}>
              <a href={routeTo}>{name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
