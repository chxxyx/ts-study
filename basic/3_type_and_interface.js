"use strict";
/**
 *
 * Type and Interface
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 아래가 에러가 나는 이유 ::
// 원래 자바스크립트는 웹에서 실행 했을 때 하나의 파일로 인식이 된다.
// 즉, 같은 프로젝트 내에 있는 동일한 변수명을 사용하고 있는 게 있기 때문에 에러가 난다.
const stringVar = "test";
const yuJin = {
    name: "안유진",
    year: 2003
};
const yuJin2 = {
    name: "안유진",
    //year: 2003
};
// 타입과 인터페이스의 가장 큰 차이 :
// 인터페이스는 기본적으로 객체형태로 들어간다. 그래서 우리가 함수도 선언할 수 잇고, 일반 객체도 선언할 수 있는데,
// 타입처럼 type MaleOrFemale = 'male' | 'female'; -> 이런 형태의 primitive를 나열할 수는 없다.
