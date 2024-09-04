import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <div>{error}</div>}
      <div>
        {games.map((game) => (
          <div key={game.id}>
            {/* <img src={game.background_image} alt={game.name} /> */}
            <div>{game.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
