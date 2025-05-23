import { Link, useLocation, useParams } from "react-router-dom";

function Breadcrumb() {
  const { id } = useParams();
  const location = useLocation();
  let pathnames = location.pathname.split("/").filter((x) => isNaN(x));

  if (pathnames.length > 0 && pathnames[0] !== "UmraPucks") {
    pathnames.unshift("Asosiy");
  }

  console.log(location);

  return (
    <nav className="breadcrumb">
      {pathnames.map((name, index) => {
        const isLast = index === pathnames.length - 1;
        let routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

        if (name === "Asosiy") routeTo = "/";

        const displayName =
          isLast && id
            ? `${FilteredType} Paketi`
            : name.charAt(0).toUpperCase() + name.slice(1);

        return (
          <span key={name}>
            {!isLast ? (
              <Link
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "rgba(0, 0, 0, 1)",
                  textDecoration: "none",
                }}
                to={routeTo}
              >
                {displayName}
              </Link>
            ) : (
              <span
                style={{
                  color: "rgba(0, 0, 0, 0.5)",
                  fontSize: "16px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
              >
                {displayName}
              </span>
            )}
            {!isLast && " / "}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
