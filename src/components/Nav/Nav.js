import React, { useState } from "react";

import { useStore } from "../../context/store-provider";
import { HOME, PROJECTS, BLOG, CONTACT } from "../../constants/navigation";
import { navigate } from "../../context/actions";

export const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { dispatch } = useStore();
  return (
    <>
      {isVisible && (
        <nav>
          <ul>
            <li>
              <button onClick={() => dispatch(navigate(HOME))}>Home</button>
            </li>
            <li>
              <button onClick={() => dispatch(navigate(PROJECTS))}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => dispatch(navigate(BLOG))}>Blog</button>
            </li>
            <li>
              <button onClick={() => dispatch(navigate(CONTACT))}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
