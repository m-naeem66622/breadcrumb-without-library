import React from "react";
import {useParams } from "react-router-dom";

function DynamicRoute({ titleCase }) {
  const { param1, param2, param3 } = useParams();

  const paramsCaseSolver = () => {
    let pageName = "Home";

    // If only param1 is defined
    if (param1 && !(param2 || param3)) {
      pageName = titleCase(param1);
    }
    // if only param1 and param2 are defined
    else if (param1 && param2 && !param3) {
      pageName = titleCase(param2);
    }
    // if param1, param2 and param3 are defined
    else if (param1 && param2 && param3) {
      pageName = titleCase(param3);
    }

    return `This is ${pageName} page`;
  };

  paramsCaseSolver();
  return <div className="content">{paramsCaseSolver()}</div>;
}

export default DynamicRoute;
