import {ANSWERS, TIME_LIMIT} from "constants.js";
import {makeVisible, makeinVisible} from "utils.js";


class Game {
    #timerCount;
    #timerId;

    // 정답 여부
    #currentStage;
    #answer;
    #problemText;

    canvas = document.getElementsByClassName("canvas");
    timer = document.getElementById("timer");
    problem = document.getElementById("problemText");
    answerText = document.getElementById("answerText");
    alphabetButton = document.querySelectorAll(".alphabets > button");
    alphabetEventListeners =[];

    constructor() {
        // 게임 시작
        this.#timeCount = TIME_LIMIT;
        this.#currentStage = 0;
        this.#answer = ANSWERS[Math.floor(math.random() * ANSWERS.length)]; // array[Math.floor(Math.random()*array.length)] 난수 생성
        this.#problemText = this.#answer
        
        // 버튼 입력
        this.alphabetButton.addEventListener("click", {

        } )



        // 정답 여부 확인 (promise)
        const promise = new Promise((resolve, reject) => {
            if() {
                resolve()
            } else if(this.#timerCount <= 0){
                
                
            } else {
                reject()
            }
        })
        
    

        


    }

    // 타이머 감소
    #decreaseTimeCount() {
        this.#timeCount--;
        this.timer.innerText = this.#timeCount;
    }


    // 버튼 사라짐
    #clickAlphabet(element) {
        element.classList.add("")
        element.removeEventListener("click", this.#clickAlphabet(element))
    }
    





    if(this. === this.#answer)



        // 성공
        if(this.#problemText === this.#answer) {

        }


        // 다음 stage
        currentStage


        // 게임오버



    //









}

    






















}
