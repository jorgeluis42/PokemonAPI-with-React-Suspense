import React, { Suspense } from "react";
import { createResource } from "./pokeapi";
import { Pokemon } from "./Pokemon";


const resource = createResource();

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>loading person...</h1>}>
        <Pokemon resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;