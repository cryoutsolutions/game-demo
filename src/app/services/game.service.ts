import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

@Injectable()
export class GameService {
  public gameState = {
    bins: [],
    bombs: [],
    speed: 1,
    bombsLeft: 120,
    started: 0,
    points: 0
  };

  public heartBeat$: BehaviorSubject<number> = new BehaviorSubject(0);

  public validColors = ['red', 'blue', 'yellow', 'purple', 'green'];

  public interval: any;

  constructor() {
    this.heartBeat$
      .startWith(0)
      .scan((acc, curr) => {
        if (curr === -1) {
          return 0;
        }
        return acc + curr;
      }).subscribe((data) => {
      this.gameState.started = data > -1 ? data : 0;
      this.bombsTick();
      this.binsTick();
      if ((data % 40) === 0 && data) {
        console.log('change bins color');
        this.gameState.bins.forEach((bin, key) => {
          this.changeBinsColor(key);
        });
      }
      if ((data % 3) === 0 && data) {
        // console.log('generate new bomb');
        while (this.gameState.bombsLeft && this.gameState.bombs.length < 5) {
          console.log('add new bomb');
          this.addBomb();
        }
      }

      // generate bins and bombs
      if (data === 1) {
        console.log('start');
        this.gameState.started = 1;
        this.generateBins();
        // add five bombs initially
        while (this.gameState.bombsLeft > 115) {
          this.addBomb();
        }
      }

      if (this.gameState.bombs.length === 0 && this.gameState.points != 0) {
        this.gameState.started = -1;
      }
    });
  }

  generateBins() {
    let exceptColors = [];
    if (this.gameState.started > -1) {
      while (this.gameState.bins.length < 4) {
        exceptColors = [];
        this.gameState.bins.forEach((item, key) => {
          exceptColors.push(item.color);
        });
        this.gameState.bins.push(new Bin(this.getRandomColor(exceptColors)));
      }
    }
  }

  addBomb() {
    if (this.gameState.started && this.gameState.bombsLeft) {
      this.gameState.bombs.push(new Bomb(this.getRandomColor()));
      this.gameState.bombsLeft--;
    }
  }

  changeBinsColor(index) {
    const exceptColors = [];
    this.gameState.bins.forEach((item, key) => {
      if (key <= index) {
        exceptColors.push(item.color);
      }
    });
    this.gameState.bins[index].color = this.getRandomColor(exceptColors);
  }

  getRandomColor(except: Array<string> = []) {
    const availableColors = this.validColors.filter(e => !except.find(a => e === a));
    return availableColors[Math.floor(Math.random() * availableColors.length)];
  }

  bombExplode(index) {
    if (this.gameState.started) {
      console.log('bombExplode', this.gameState.started, this.gameState.bombs[index], this.gameState.bins);
      this.gameState.bombs.splice(index, 1);
      this.gameState.points--;
    }
  }

  bombsTick() {
    this.gameState.bombs.forEach((bomb, key) => {
      bomb.timeLeft--;
      if (!bomb.timeLeft) {
        this.bombExplode(key);
      }
    });
  }

  binsTick() {
    this.gameState.bins.forEach((bin, key) => {
      bin.timeLeft--;
      if (!bin.timeLeft) {
        bin.timeLeft = 40;
      }
    });
  }

  bombToBin(bombIndex, binIndex) {
    console.log('bombToBin', this.gameState.started, this.gameState.bombs[bombIndex], this.gameState.bins[binIndex]);
    if (this.gameState.bombs[bombIndex].color === this.gameState.bins[binIndex].color) {
      this.gameState.bombs.splice(bombIndex, 1);
      this.gameState.points++;
    } else {
      // if bomb color is not in bins then just delete it without affecting score
      const colorExistisInBins = this.gameState.bins.find((bin) => {
        if (bin.color === this.gameState.bombs[bombIndex].color) {
          return true;
        }
      });
      if (colorExistisInBins) {
        this.gameState.bombs.splice(bombIndex, 1);
        this.gameState.points--;
      } else {
        this.gameState.bombs.splice(bombIndex, 1);
      }
    }
  }

  run() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.heartBeat$.next(1);
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
  }

  reset() {
    this.gameState = {
      bins: [],
      bombs: [],
      speed: 1,
      bombsLeft: 10,
      started: 0,
      points: 0
    };
    this.heartBeat$.next(-1);
    this.run();
  }

}

export class Bin {
  constructor(public color, private timeLeft = 40) {
    this.timeLeft = timeLeft;
    this.color = color;
  }
}

export class Bomb {
  private timeLeft = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  private x = Math.floor(Math.random() * 450);
  private y = Math.floor(Math.random() * 450);
  private uid = Math.random();

  constructor(private color) {
    this.color = color;
  }
}
