class TicTacToe {
    constructor() {
        this._player = 'x';
        this._board = [  [null, null, null],
                        [null, null, null],
                        [null, null, null]
        ];
        this._moves = 0;
        this._winner = null;
    }

    getCurrentPlayerSymbol() {
        return this._player
    }

    nextTurn(rowIndex, columnIndex) {
            if(!this.getFieldValue(rowIndex,columnIndex)){

                this._board[rowIndex][columnIndex] = this._player;
                for( var i = 0; i < 3; i++){
                    if (this.getFieldValue(i,0) && this.getFieldValue(i,0) === this.getFieldValue(i,1) && this.getFieldValue(i,1) === this.getFieldValue(i,2)) {
                        this._winner = this._player;
                    }
                    if    (this.getFieldValue(0,i) && this.getFieldValue(0,i) === this.getFieldValue(1,i) && this.getFieldValue(1,i) === this.getFieldValue(2,i)) {
                        this._winner = this._player;
                    }
                    if    (this.getFieldValue(0,0) && this.getFieldValue(0,0) === this.getFieldValue(1,1) && this.getFieldValue(1,1) === this.getFieldValue(2,2)) {
                        this._winner = this._player;
                    }
                    if    (this.getFieldValue(0,2) && this.getFieldValue(0,2) === this.getFieldValue(1,1) && this.getFieldValue(1,1) === this.getFieldValue(2,0))  {

                        this._winner = this._player;
                    }
                }
                this._player === 'x' ? this._player = 'o' : this._player = 'x';
                this._moves++;
            }
    }

    isFinished() {
        return !!(this._winner || this.noMoreTurns())
    }

    getWinner() {
        return this._winner
    }

    noMoreTurns() {
        return this._moves === 9

    }

    isDraw() {
        return this.noMoreTurns() && !this._winner
    }

    getFieldValue(rowIndex, colIndex) {
        return this._board[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;