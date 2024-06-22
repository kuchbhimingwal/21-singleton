
interface Game{
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

export class GameManager {
  games: Game[] = [];
  private static instance : GameManager;
  private constructor(){
    this.games = [];
  }

  static getInstance(){
    //sigleton instance 
    if (GameManager.instance) {
      return GameManager.instance
    }
    GameManager.instance = new GameManager();
    return GameManager.instance
  }
  addMove(gameId:string, move:string){
    const game = this.games.find(game => game.id == gameId)
    game?.moves.push(move)
  }

  addGame(gameId: string){
    const game = {
      id: gameId,
      whitePlayerName: 'Alice',
      blackPlayerName: "Denzel",
      moves: []
    }

    this.games.push(game);
  }

  log(){
    console.log(this.games);
    
  }
}
