"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstance() {
        //sigleton instance 
        if (GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return GameManager.instance;
    }
    addMove(gameId, move) {
        const game = this.games.find(game => game.id == gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayerName: 'Alice',
            blackPlayerName: "Denzel",
            moves: []
        };
        this.games.push(game);
    }
    log() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
