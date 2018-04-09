import { inject, TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
  });
  describe('functions', () => {
    it('should be created', inject([GameService], (service: GameService) => {
      expect(service).toBeTruthy();
    }));

    it('should have gameState', inject([GameService], (service: GameService) => {
      expect(service.gameState).toBeDefined();
    }));

    it('should generateBins be defined', inject([GameService], (service: GameService) => {
      expect(service.generateBins).toBeDefined();
    }));

    it('should generateBins add the bins if none', inject([GameService], (service: GameService) => {
      service.gameState.started = 1;
      service.generateBins();
      // console.log(service.gameState.bins);
      expect(service.gameState.bins.length).toBe(3);
    }));

    it('should addBomb be defined', inject([GameService], (service: GameService) => {
      expect(service.addBomb).toBeDefined();
    }));

    it('should addBomb add a bomb', inject([GameService], (service: GameService) => {
      service.gameState.started = 1;
      service.addBomb();
      // console.log(service.gameState.bombs);
      expect(service.gameState.bombs.length).toBe(1);
    }));

    it('should getRandomColor be defined', inject([GameService], (service: GameService) => {
      expect(service.getRandomColor).toBeDefined();
    }));

    it('should getRandomColor', inject([GameService], (service: GameService) => {
      expect(service.validColors).toContain(service.getRandomColor());
    }));

    it('should changeBinsColor be defined', inject([GameService], (service: GameService) => {
      expect(service.changeBinsColor).toBeDefined();
    }));

    it('should changeBinsColor', inject([GameService], (service: GameService) => {
      service.gameState.started = 1;
      service.generateBins();
      const bin = service.gameState.bins[1];
      service.changeBinsColor(1);
      expect(bin.color).not.toBe(service.gameState.bins[1]);
    }));

    it('should bombExplode to be defined', inject([GameService], (service: GameService) => {
      expect(service.bombExplode).toBeDefined();
    }));

    it('should bombExplode', inject([GameService], (service: GameService) => {
      service.gameState.started = 1;
      service.addBomb();
      // console.log(service.gameState.bombs);
      service.bombExplode(0);
      // console.log(service.gameState.bombs);
      // console.log(service.gameState.bombs);
      expect(service.gameState.bombs.length).toBe(0);
    }));
  });

  describe('progress', () => {
    it('should start', inject([GameService], (service: GameService) => {
      service.heartBeat$.next(1);
      expect(service.gameState.bins.length).toBe(3);
      expect(service.gameState.bombs.length).toBe(5);
    }));

    fit('should change colors of bins every 40 seconds', inject([GameService], (service: GameService) => {
      service.heartBeat$.next(1);
      let color = service.gameState.bins[0].color;
      service.heartBeat$.next(39);
      expect(color).not.toBe(service.gameState.bins[0].color);
      // test if the colors don't repeat
      let cicles = 100;
      while (cicles) {
        cicles--;
        color = service.gameState.bins[0].color;
        service.heartBeat$.next(40);
        expect(color).not.toBe(service.gameState.bins[0].color);
        expect(color).not.toBeUndefined();
      }
    }));

    it('should explode all bombs if time passes', inject([GameService], (service: GameService) => {
      service.heartBeat$.next(1);
      let cicles = 350;
      while (service.gameState.bombs.length && cicles) {
        cicles--;
        service.heartBeat$.next(1);
      }
      console.log(cicles);
      expect(service.gameState.bombs.length).toBe(0);
      expect(service.gameState.points).toBe(-120);
      expect(cicles).toBeGreaterThan(0);
    }));

    it('should be able to put bombs into bins', inject([GameService], (service: GameService) => {
      service.heartBeat$.next(1);
      let cicles = 550;
      while (cicles && service.gameState.started > -1) {
        cicles--;
        service.heartBeat$.next(1);
        service.gameState.bombs.forEach((bomb, bombKey) => {
          service.gameState.bins.forEach((bin, binKey) => {
            if (bomb.color === bin.color) {
              service.bombToBin(bombKey, binKey);
            }
          });
        });
      }
      console.log('cicles', cicles, 'points', service.gameState.points);
      expect(service.gameState.bombs.length).toBe(0);
      expect(service.gameState.points).toBeGreaterThan(0);
      expect(cicles).toBeGreaterThan(0);
    }));
  });

});
