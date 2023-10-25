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

function runWork() {
    let state = 'INITIAL';

    try {
        state = 'LOADING';
        // 작업을 한다.

        state = 'DONE';

    } catch (e) {
        state = 'ERROR';
    } finally {
        return state;
    }
}

console.log(runWork());

console.log(runWork() === "DONE") // 이러면 당연히 문자열 DONE이 반환되므로 true이지만
// 여기서 문자가 조금이라도 달라지면 false가 나오게 된다.
// 우리가 문자열로 무언가의 상태, 한정된 값들을 표현하고 비교해야ㅑ하는 값들을 표현할 때 가장 큰
// 문제점이다.
// 자바스크립트만 쓸 대는 이걸 상태를 변수로 만들었다.
const doneState = 'DONE';



enum State {
    DONE = 'DONE',
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
    ERROR = 'ERROR'
} 

// -> 이렇게 만들고 콘솔에 찍어보면 이 값들에 0부터 숫자가 하나씩 부여된다. 
