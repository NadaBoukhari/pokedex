import { cleanup, render, screen } from "@testing-library/react";
import PokedexHeader from "./PokedexHeader";

afterEach(cleanup);

describe("PokemonHeader component", () => {
  it("should render the pokedex image", () => {
    render(<PokedexHeader />);
    const imgElement = screen.getByAltText(/Pokedex/i);
    expect(imgElement).toBeInTheDocument();
  });
});
