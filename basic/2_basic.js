"use strict";
/**
 *
 * Types
 *
 * typescript: 자바스크립트로 컴파일되는 언어이다.
 * config에서 어떤 버전의 자바스크립트로 컴파일 할 지 우리가 정할 수도 있다.
 * 우리가 빌드, 실행을 하기 전까지 사용하는 언어이다.
 * 한번만 컴파일 해주면 자바스크립트가 실행된다. 그대로 자바스크립트 에닌이 사용된다.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// let helloText: string = "Hello";
// 이렇게 타입을 지정해주면 다른 타입의 값을 할당하려고 할 때 빨간 줄 에러가 뜬다.
// 즉, 타입을 강제할 수가 있다.
const stringVar = "string";
const numberVar = 2;
const bigIntVal = BigInt(999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * Ts에만 존재하는 타입
 */
let anyVar; // 아무 타입이나 입력할 수 있는 치트키 같은 타입
anyVar = 100;
anyVar = "코드팩토리";
anyVar = true;
// 무슨 값을 입력해도 가능하지만,
// 이렇게 any를 남발하면 타입스크립트를 쓰는 의미가 없어진다
// 적절하게 사용해야 한다.
// 이미 특정 타입으로 선언된 변수도 any를 사용할 수 있음 !
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown = 알 수 없는 타입 
let unknownType;
unknownType = 100;
unknownType = "코드 팩토리";
unknownType = true;
// 그러나 any와 다르게 아래처럼 다른 변수에 unknown을 할당하는 건 불가능 하다.
let unknownType2;
// any와 unknown 어떤 타입이든 해당 변수에 입력을 할 수는 있지만,
// 다른 변수에 할당을 할 때 차이점이 있다.
// let testNumber2: number = unknownType2;
// let testString2: string = unknownType2;
// let testBoolean2: boolean = unknownType2;
// never : 어떠한 값도 저장되거나 반환되지 않을 때 사용되는 타입
// 네버 타입은 어떤 타입도 아니다 
// const neverType: never = null;
/**
 * 리스트 타입
 */
const koreanGirlGroup = ['아이브', '뉴진스', '르세라핌'];
