import {ATTEMPTS} from "constants.js";
import {makeVisible, makeinVisible} from "utils.js";

class System {

const counter = document.getElementById("counter");
const timer = document.getElementById("timer");
const startText = document.getElementById("startText");
const successText = document.getElementById("successText");
const failText = document.getElementById("failText");
const overText = document.getElementById("overText");
const gameStart-button = document.getElementById("gameStart-button");
const restart-button = document.getElementById("restart-button");
const reset-button = document.getElementById("reset-button");

    constructor() {
        
        #count;
        #time;

        this.#count = ATTEMPTS;
        counter.innerText = this.#count;

        this.#time = TIME_LIMIT;
        timer.innerText = this.#time; 

        // 시도 횟수 1회 차감


        // 시작하기 버튼
        #start() {
            makeinVisible(startText)
        }
        
        gameStart-button.addEventListener("click", this.#start)
        
        // 시도 횟수 1회 차감


        // 다시 시작 버튼




        // 성공



        // 실패



        // 게임오버

        // 처음부터 다시하기 버튼
        reset-button.addEventListener("click", this.)


        // 시스템 초기화


    }
}

export default System;