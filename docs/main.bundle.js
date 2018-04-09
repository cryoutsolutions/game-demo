webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to game demo!\n  </h1>\n</div>\n<app-game></app-game>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_game_service__ = __webpack_require__("./src/app/services/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_game_game_component__ = __webpack_require__("./src/app/components/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__ = __webpack_require__("./node_modules/ng2-dnd/ng2-dnd.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_game_game_component__["a" /* GameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__["a" /* DndModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_game_service__["a" /* GameService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"game\">\n  <p>\n    Score:\n    {{gameService.gameState.points}}\n  </p>\n  <p class=\"right\">timer: {{gameService.gameState.started}} bombs left: {{gameService.gameState.bombsLeft}} </p>\n  <button (click)=\"gameService.run()\">Run</button>\n  <button (click)=\"gameService.pause()\">Pause</button>\n  <button (click)=\"gameService.reset()\">Reset</button>\n\n  <div class=\"bombs\">\n    <div class=\"bomb\" *ngFor=\"let bomb of gameService.gameState.bombs; let i = index\"\n         [ngStyle]=\"{'background-color': bomb.color, left: bomb.x +'px', top: bomb.y+ 'px', width: bomb.timeLeft<5?65+'px':'50px', height: bomb.timeLeft<5?65+'px':'50px', opacity: bomb.timeLeft<5?(5-bomb.timeLeft)*0.1+0.5:0.5}\"\n         dnd-draggable [dragEnabled]=\"true\" [dragData]=\"[i,bomb.uid]\" (onDragEnd)=\"onDragEnd(i)\"\n    ><div id=\"bomb\" *ngIf=\"bomb.timeLeft<3\"></div><span class=\"timer\">{{bomb.timeLeft}}</span>\n    </div>\n  </div>\n\n  <div class=\"bins\">\n    <div class=\"bin\" *ngFor=\"let bin of gameService.gameState.bins; let i = index\" [ngStyle]=\"{'background-color': bin.color}\" [ngClass]=\"{match:binsActive[i]}\"\n         dnd-droppable (onDropSuccess)=\"onBombToBin($event.dragData[0], i, $event.dragData[1])\" (onDragOver)=\"onDragOver($event.dragData[0], i)\"\n    >\n    </div>\n    <p class=\"timer\">Change in: {{gameService.gameState.bins[0]?.timeLeft}}</p>\n  </div>\n  <div class=\"rules\">\n    <p>Match the bombs with the colors.</p>\n    <p>If the bomb color is not in any bin drag it into any bin to diffuse the bomb but you will not get any points.</p>\n  </div>\n  <div class=\"finished\" *ngIf=\"gameService.gameState.started === -1\">Game finished!</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/game/game.component.scss":
/***/ (function(module, exports) {

module.exports = ".game {\n  margin: 0 auto;\n  width: 600px; }\n  .game .bins {\n    width: 500px;\n    margin: 0 auto; }\n  .game .bins .bin {\n      display: inline-block;\n      -webkit-box-shadow: 2px 2px 2px #000;\n              box-shadow: 2px 2px 2px #000;\n      width: 100px;\n      height: 140px;\n      margin: 10px;\n      opacity: .5; }\n  .game .bins .bin.match {\n        opacity: 1;\n        -webkit-box-shadow: 0 0 40px #2aff10;\n                box-shadow: 0 0 40px #2aff10; }\n  .game .bins .timer {\n      text-align: right; }\n  .game .bombs {\n    position: relative;\n    width: 500px;\n    height: 500px;\n    margin: 0 auto; }\n  .game .bombs .bomb {\n      display: block;\n      -webkit-box-shadow: 2px 2px 2px #000;\n              box-shadow: 2px 2px 2px #000;\n      width: 50px;\n      height: 50px;\n      margin: 10px;\n      position: absolute;\n      border-radius: 35px;\n      -webkit-transition: width 5000ms ease-in-out, height 5000ms ease-in-out;\n      transition: width 5000ms ease-in-out, height 5000ms ease-in-out; }\n  .game .bombs .bomb span {\n        background-color: blanchedalmond;\n        border-radius: 15px;\n        width: 21px;\n        height: 21px;\n        position: absolute;\n        left: -5px;\n        -webkit-box-shadow: 2px 2px 2px #000;\n                box-shadow: 2px 2px 2px #000; }\n  .game .finished {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    font-size: 25px;\n    background-color: blanchedalmond; }\n  .game .right {\n    float: right; }\n"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_service__ = __webpack_require__("./src/app/services/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = /** @class */ (function () {
    function GameComponent(gameService) {
        this.gameService = gameService;
        this.binsActive = [false, false, false, false];
    }
    GameComponent.prototype.ngOnInit = function () {
        this.gameService.run();
    };
    GameComponent.prototype.onDragOver = function (bombIndex, binIndex) {
        this.binsActive[binIndex] = (this.gameService.gameState.bombs[bombIndex] && this.gameService.gameState.bins[binIndex]) &&
            this.gameService.gameState.bombs[bombIndex].color === this.gameService.gameState.bins[binIndex].color;
        // console.log(this.gameService.gameState.bombs[bombIndex].color === this.gameService.gameState.bins[binIndex].color);
    };
    GameComponent.prototype.onDragEnd = function (binIndex) {
        console.log('dragEnd', binIndex);
        this.binsActive = [false, false, false, false];
    };
    GameComponent.prototype.onBombToBin = function (bombIndex, binIndex, bombUid) {
        if (this.gameService.gameState.bombs[bombIndex] && this.gameService.gameState.bombs[bombIndex].uid === bombUid) {
            this.gameService.bombToBin(bombIndex, binIndex);
        }
        else {
            console.log('bomb expired');
        }
        this.binsActive = [false, false, false, false];
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("./src/app/components/game/game.component.html"),
            styles: [__webpack_require__("./src/app/components/game/game.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_game_service__["a" /* GameService */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/services/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* unused harmony export Bin */
/* unused harmony export Bomb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_scan__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/scan.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameService = /** @class */ (function () {
    function GameService() {
        var _this = this;
        this.gameState = {
            bins: [],
            bombs: [],
            speed: 1,
            bombsLeft: 120,
            started: 0,
            points: 0
        };
        this.heartBeat$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.validColors = ['red', 'blue', 'yellow', 'purple', 'green'];
        this.heartBeat$
            .startWith(0)
            .scan(function (acc, curr) {
            if (curr === -1) {
                return 0;
            }
            return acc + curr;
        }).subscribe(function (data) {
            _this.gameState.started = data > -1 ? data : 0;
            _this.bombsTick();
            _this.binsTick();
            if ((data % 40) === 0 && data) {
                console.log('change bins color');
                _this.gameState.bins.forEach(function (bin, key) {
                    _this.changeBinsColor(key);
                });
            }
            if ((data % 3) === 0 && data) {
                // console.log('generate new bomb');
                while (_this.gameState.bombsLeft && _this.gameState.bombs.length < 5) {
                    console.log('add new bomb');
                    _this.addBomb();
                }
            }
            // generate bins and bombs
            if (data === 1) {
                console.log('start');
                _this.gameState.started = 1;
                _this.generateBins();
                // add five bombs initially
                while (_this.gameState.bombsLeft > 115) {
                    _this.addBomb();
                }
            }
            if (_this.gameState.bombs.length === 0 && _this.gameState.points != 0) {
                _this.gameState.started = -1;
            }
        });
    }
    GameService.prototype.generateBins = function () {
        var exceptColors = [];
        if (this.gameState.started > -1) {
            while (this.gameState.bins.length < 4) {
                exceptColors = [];
                this.gameState.bins.forEach(function (item, key) {
                    exceptColors.push(item.color);
                });
                this.gameState.bins.push(new Bin(this.getRandomColor(exceptColors)));
            }
        }
    };
    GameService.prototype.addBomb = function () {
        if (this.gameState.started && this.gameState.bombsLeft) {
            this.gameState.bombs.push(new Bomb(this.getRandomColor()));
            this.gameState.bombsLeft--;
        }
    };
    GameService.prototype.changeBinsColor = function (index) {
        var exceptColors = [];
        this.gameState.bins.forEach(function (item, key) {
            if (key <= index) {
                exceptColors.push(item.color);
            }
        });
        this.gameState.bins[index].color = this.getRandomColor(exceptColors);
    };
    GameService.prototype.getRandomColor = function (except) {
        if (except === void 0) { except = []; }
        var availableColors = this.validColors.filter(function (e) { return !except.find(function (a) { return e === a; }); });
        return availableColors[Math.floor(Math.random() * availableColors.length)];
    };
    GameService.prototype.bombExplode = function (index) {
        if (this.gameState.started) {
            console.log('bombExplode', this.gameState.started, this.gameState.bombs[index], this.gameState.bins);
            this.gameState.bombs.splice(index, 1);
            this.gameState.points--;
        }
    };
    GameService.prototype.bombsTick = function () {
        var _this = this;
        this.gameState.bombs.forEach(function (bomb, key) {
            bomb.timeLeft--;
            if (!bomb.timeLeft) {
                _this.bombExplode(key);
            }
        });
    };
    GameService.prototype.binsTick = function () {
        this.gameState.bins.forEach(function (bin, key) {
            bin.timeLeft--;
            if (!bin.timeLeft) {
                bin.timeLeft = 40;
            }
        });
    };
    GameService.prototype.bombToBin = function (bombIndex, binIndex) {
        var _this = this;
        console.log('bombToBin', this.gameState.started, this.gameState.bombs[bombIndex], this.gameState.bins[binIndex]);
        if (this.gameState.bombs[bombIndex].color === this.gameState.bins[binIndex].color) {
            this.gameState.bombs.splice(bombIndex, 1);
            this.gameState.points++;
        }
        else {
            // if bomb color is not in bins then just delete it without affecting score
            var colorExistisInBins = this.gameState.bins.find(function (bin) {
                if (bin.color === _this.gameState.bombs[bombIndex].color) {
                    return true;
                }
            });
            if (colorExistisInBins) {
                this.gameState.bombs.splice(bombIndex, 1);
                this.gameState.points--;
            }
            else {
                this.gameState.bombs.splice(bombIndex, 1);
            }
        }
    };
    GameService.prototype.run = function () {
        var _this = this;
        clearInterval(this.interval);
        this.interval = setInterval(function () {
            _this.heartBeat$.next(1);
        }, 1000);
    };
    GameService.prototype.pause = function () {
        clearInterval(this.interval);
    };
    GameService.prototype.reset = function () {
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
    };
    GameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GameService);
    return GameService;
}());

var Bin = /** @class */ (function () {
    function Bin(color, timeLeft) {
        if (timeLeft === void 0) { timeLeft = 40; }
        this.color = color;
        this.timeLeft = timeLeft;
        this.timeLeft = timeLeft;
        this.color = color;
    }
    return Bin;
}());

var Bomb = /** @class */ (function () {
    function Bomb(color) {
        this.color = color;
        this.timeLeft = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        this.x = Math.floor(Math.random() * 450);
        this.y = Math.floor(Math.random() * 450);
        this.uid = Math.random();
        this.color = color;
    }
    return Bomb;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map