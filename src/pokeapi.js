const fetchPokemon = () => {
    return fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(x => x.json())
  };
  
  const wrapPromise = promise => {
    let status = "pending";
    let result = "";
    let suspender = promise.then(
      r => {
        status = "success";
        result = r;
      },
      e => {
        status = "error";
        result = e;
      }
    );
  
    return {
      read() {
        if (status === "pending") {
          throw suspender;
        } else if (status === "error") {
          throw result;
        }
  
        return result;
      }
    };
  };
  
 
  
  export const createResource = () => {
    return {
      pokemon: wrapPromise(fetchPokemon())
    };
  };