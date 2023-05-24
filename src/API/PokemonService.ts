export default class PokemonService {
  static async getAll() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const responseData = await response.json();
    console.log(responseData.results);
    // return response.data
  }
}
