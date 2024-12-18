import {ANSWERS, TIME_LIMIT} from "constants.js";
import {makeVisible, makeinVisible} from "utils.js";

class Game {
    #timerCount;
    #timerId; // ???

    // 정답 여부
    #currentStage;
    #answer;
    #problem;

    hangman = document.getElementsByClassName(".canvas > img");
    timer = document.getElementById("timer");
    problemText = document.getElementById("problemText");
    answerText = document.getElementById("answerText");
    alphabetButton = document.querySelectorAll(".alphabets > button");
    alphabetEventListeners =[];

    constructor() {
        // 게임 시작 세팅
        this.#timerCount = TIME_LIMIT;
        this.#currentStage = 0;
        this.#answer = ANSWERS[Math.floor(math.random() * ANSWERS.length)]; // array[Math.floor(Math.random()*array.length)] 난수 생성
        this.#problem = this.#answer
            .split("")
            .reduce((acc, cur) => (cur === " "? acc + " " : acc + "_"), ""); // ???

        this.timer.innerText = this.#timerCount;
        this.problemText.innerText = this.#problem
        makeVisible(this.problemText);
        this.answerText.innerText = `정답 : ${this.#answer}`;
        makeinVisible(this.answerText);

        // 게임 결과 (promise) => ??? 복습 
        return new Promise((resolve) => {
            // 타이머 0초 -> 게임오버 -> promise resolve(false)
            this.#timerId = setInterval(() => {
                if(this.#timerCount <= 0) resolve(false);
                else this.#decreaseTimerCount();
            }, 1000);

            // 알파벳 버튼 => ???
            this.alphabetButton.forEach((element) => {
                const onClick = () => {
                    this.#clickAlphabet(element, resolve);
                    element.removeEventListener("click", onClick);
                }
                this.alphabetEventListeners.push(onClick);
                element.addEventListener("click", onClick);
            })
        }).then(this.#gameOver);
    }
        
    // 알파벳 버튼 실행
    #clickAlphabet = (element, resolve) => {
        // 버튼 클릭 시 비활성화
        element.classList.add("button-invisible");
        element.removeEventListener("click", () =>
        this.#clickAlphabet(element, resolve)
        ); 

        // 알파벳 정답 여부 확인 => ??? 복습
        if(this,#answer.includes(element.innerText)) {
            this.#updateProblem(element.innerText);
            // 전체 정답 -> 게임오버 -> promise resolve(true)
            if(this.#problem === this.#answer) resolve(true);
        } else {
            // 행맨 미완성 -> 다음 stage
            if(this.#currentStage < this.hangman.length - 1)
                this.#nextStage();
            // 행맨 완성 -> 게임 오버 -> promis resolve(false)
            else resolve(false);
        }
    }

    // 타이머 1초씩 감소
    #decreaseTimerCount() {
        this.#timerCount--;
        this.timer.innerText = this.#timerCount;
    }

    // stage 1 증가 + 행맨 증가 => ???
    #nextStage() {
        this.#currentStage++;
        Array.from(this.hangman)
            .slice(0, this.#currentStage)
            .forEach((element) => element.classList.remove("invisible"));
    }

    // 알파벳 입력 시 problem 업데이트 => ???
    #updateProblem(newAlphabet) {
        this.#problem - this.#problem
            .split("")
            .reduce((acc, cur, index) => {
                if(cur === " " || cur !== "_") 
                    return acc + cur;
                if(this.#answer[index] === newAlphabet) 
                    return acc + newAlphabet;
                else return acc + "_";
            })
    }

    // 실패 -> 게임오버 false / 성공 -> 게임오버 true => ???
    #gameOver = (result) => {
        // 타이머 삭제
        clearInterval(this.#timerId);
        // 정답
        makeVisible(this.answerText);
        // 초기화
        this.hangman.forEach((element) => 
            element.classList.add("invisible")
        );
        makeInvisible(this.problemText);
        this.alphabetButton.forEach((element, index) => {
            element.classList.remove("button-invisible");
            element.removeEventListener("click", this.alphabetEventListeners[index]);
        })
        return result;
    }
}

export default Game;
