import { render, screen, cleanup } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

afterEach(cleanup);

describe("PokemonCard component", () => {
  it("should render pokemon name and image", async () => {
    render(<PokemonCard name="pikachu" />);
    const pokemonImage = screen.getByAltText(/pikachu/i);
    const pokemonName = screen.getByAltText(/pikachu/i);
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonName).toBeInTheDocument();
  });
});
