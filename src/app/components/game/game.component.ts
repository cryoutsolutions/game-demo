import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public binsActive = [false, false, false, false];

  constructor(public gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.run();
  }

  onDragOver(bombIndex, binIndex) {
    this.binsActive[binIndex] = (this.gameService.gameState.bombs[bombIndex] && this.gameService.gameState.bins[binIndex]) &&
      this.gameService.gameState.bombs[bombIndex].color === this.gameService.gameState.bins[binIndex].color;
    // console.log(this.gameService.gameState.bombs[bombIndex].color === this.gameService.gameState.bins[binIndex].color);
  }

  onDragEnd(binIndex) {
    console.log('dragEnd', binIndex);
    this.binsActive = [false, false, false, false];
  }

  onBombToBin(bombIndex, binIndex, bombUid) {
    if (this.gameService.gameState.bombs[bombIndex] && this.gameService.gameState.bombs[bombIndex].uid === bombUid) {
      this.gameService.bombToBin(bombIndex, binIndex);
    } else {
      console.log('bomb expired');
    }

    this.binsActive = [false, false, false, false];
  }

}
