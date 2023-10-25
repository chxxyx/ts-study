"use strict";
/**
 * Enum
 * js에는 이넘타입이 존재하지 않는다. 그래서  이 기능을 활성화 해주는 게 타입스크립트임 !
 *
 */
/**
 * api 요청을 한다
 *
 * 상태는 4가지 상태
 * done - 요청 완료 상태
 * error - 에러가 생긴 상태
 * loading - 로딩 상태
 * initial - 초기 상태
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
function runWork() {
    let state = 'INITIAL';
    try {
        state = 'LOADING';
        // 작업을 한다.
        state = 'DONE';
    }
    catch (e) {
        state = 'ERROR';
    }
    finally {
        return state;
    }
}
console.log(runWork());
