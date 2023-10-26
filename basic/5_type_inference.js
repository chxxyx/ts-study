"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Type inference
 * 타입 추론
 */
let stringType = "string";
// 타입을 : 을 사용해서 명시하지 않아도, 타입스크립트가 타입을 추론하는 것을 type inference라고 한다 
let booleanType = true;
// booleanType = 'false';  이미 위에서 불리언 타입으로 지정됐기 때문에 
// 문자열 타입으로 바꿀 수 없다.
const constStringType = 'const string';
// ㄴ 이렇게 작성하면 string이 아니라 'const string'으로 타입이 나오게 된다.
// 왜 ?
// string이 맞긴 한데 'const string'이라는 글자만 입력할 수 있다는 뜻이다.
// 이걸 스트링 리터럴타입이라고 한다.
// 정확하게 'const string' 이런 문자만 입력할 수 있다는 뜻이다.
// 스트링보다 훨씬 구체화된 타입이다.
const constStringType2 = 'const string'; // -> 에러가 없다.
// 불리언도 가능하다.
const constBooleanType = true; // -> 이건 불리언 값 중에서도 true 값만 들어갈 수 있다는 뜻이다.
// -> 따라서 let 말고 const ~ 를 사용해서 선언을 하면 타입 추론을 할 때 좀 더 구체적인 타입으로 추론이 된다.
const yuJin = {
    name: "안유진",
    age: 20003
}; // 하지만 이 객체는 구체적인 타입이 아니다.  
// 객체에서 각각의 프로퍼티를 조금 더 구체화된 타입으로 유추되도록 하고 싶으면
// 캐스팅(특정 타입으로 우리가 지정을 한다.)을 해주어야 한다. -> as를 사용하자.
const yuJin2 = {
    name: "안유진",
    age: 20003,
};
// 하지만 여기서 프로퍼티의 값들을 변경할 수 없다. 
// 왜냐하면 const로 지정해놨기 때문이다 !!
// 그래서 나중에 각각의 프로퍼티를 추론할 수 있다.
// 타입스크립트를 쓰면 이 데이터의 type의 흐름을 정확하게 파악할 수 있다.
/**
 *
 * Array
 */
let number = [1, 2, 3, 4, 5];
