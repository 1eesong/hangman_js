import {ATTEMPTS} from "constants.js";
import {makeVisible, makeinVisible} from "utils.js";
import Game from "game.js";

class System {
    #count;

const counter = document.getElementById("counter");
const startText = document.getElementById("startText");
const successText = document.getElementById("successText");
const failText = document.getElementById("failText");
const overText = document.getElementById("overText");
const gameStart-button = document.getElementById("gameStart-button");
const restart-button = document.getElementById("restart-button");

    constructor() {
        // 시스템 시작 세팅
        this.#count = ATTEMPTS;

        this.counter.innerText = this.#count;
        makeVisible(this.startText);
        this.gameStart-button.addEventListener("click", this.#start);
        this.restart-button.addEventListener("click", this.#restart);

    }
        
    // 시작하기 버튼 -> 시도 횟수 1회 차감
    #decreaseCount() {
        this.#count--;
        this.counter.innerText = this.#count;
    }

    // 시도 횟수 남음 -> 다시 시작
    #gameStart = async () -> {
        this.#decreaseCount();
        const result = await new Game();

        if(result) {
            // 성공 -> 텍스트
            makeVisible(this.successText);
        } else {
            // 실패 -> 텍스트
            if(this.#count > 0) {
                makeVisible(this.failText);
            } else {
                // 게임오버 -> 텍스트
                makeVisible(this.overText);
            }
        }
    };

    // 다시 시작 버튼
    #restart() {
        makeinVisible(this.failText);
        this.#gameStart();
    }

    // 시스템 초기화
    cleanup() {
        this.counter.innerText = ATTEMPTS;

        this.gameStart-button.removeEventListener("click", this.#start);
        this.restart-button.removeEventListener("click", this.#restart);
        makeInvisible(this.successText);
        makeInvisible(this.overText);
    }
}

export default System;