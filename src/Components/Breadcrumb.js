import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Breadcrumb({ titleCase }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathsChunk = pathname.split("/").filter(Boolean);
  pathsChunk.unshift("home");

  const pathExtractor = (chunk) => {
    const pathEndsAt = pathname.indexOf(chunk) + chunk.length;
    return chunk === "home" ? "/" : pathname.slice(0, pathEndsAt);
  };

  useEffect(() => {
    if (pathsChunk.length > 4) {
      navigate("/");
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {pathsChunk.map((pathChunk, index) => (
        <>
          <Link key={index} to={pathExtractor(pathChunk)}>
            {titleCase(pathChunk)}
          </Link>
          {pathsChunk.length - 1 !== index ? <span>{">"}</span> : null}
        </>
      ))}
    </div>
  );
}

export default Breadcrumb;
