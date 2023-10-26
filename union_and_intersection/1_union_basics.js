"use strict";
/**
 *
 * Union Basics
 *
 * 유니언은 ts에서 타입을 병합할 수 있는 수많은 바업중 하나이다.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let str = 'test';
let strBool = null;
let state = 'DONE';
state = 'LOADING';
let strListOrBooleanList = [
    '아이유',
    '김고은',
    '천우희'
];
strListOrBooleanList = [
    true,
    false,
    true
];
// 리스트를 포함하는 괄호가 어떤 스코프 안에 들어가 있는 지가 굉장히 중요하다.
let strOrNumberList = [
    '아이유',
    1
];
let animalOrHuman = {
    name: '강아지',
    age: 6
};
console.log(animalOrHuman); // 타입이 Animal로 나온다.
// 여기서 똑같이 휴먼 인터페이스 내용을  
