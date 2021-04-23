import React from "react";

import { useStore } from "../../context/store-provider";

import { pageMap } from "../../utils/pageMap";

export const Main = () => {
  const { state } = useStore();

  const CurrentPage = pageMap[state.location];

  return (
    <main>
      <CurrentPage />
    </main>
  );
};
