/**
 * 
 * Union Basics
 * 
 * 유니언은 ts에서 타입을 병합할 수 있는 수많은 바업중 하나이다.
 */

type StrOrBooleanType = string | boolean;
let str: StrOrBooleanType = 'test';
// stringOrBooleanType = undefined; // Type 'undefined' is not assignable to type 'StringOrBooleanType'. 이건 당연히 안 된다 ~

type StrBoolNullType = string | boolean | null;
let strBool: StrBoolNullType = null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
//state = 'INITIAL'; // Type '"INITIAL"' is not assignable to type 'StateTypes'.
// INITIAL 이 값은 StateTypes에 존재하지 않는다.
// 따라서 유니온으로 선언한 영역의 값들만 이용할 수 있도록 할 수 있다.



/**
 * 리스트의 유니언
 * 
 */

// string으로 구성된 리스트 또는 불리언으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = [
    '아이유',
    '김고은',
    '천우희'
]

strListOrBooleanList = [
    true,
    false,
    true
]

// strListOrBooleanList = [
//     true,
//     '아이유'
// ] // 이것도 안 됨 
// 왜 ? 
// 우리가 구성한 리스트는 스트링 리스트이거나 불리언 리스트여야 한다.

// Type '(string | true)[]' is not assignable to type 'StringListOrBooleanList'.
//   Type '(string | true)[]' is not assignable to type 'string[]'.
//   Type 'string | true' is not assignable to type 'string'.
//     Type 'boolean' is not assignable to type 'string'.

// 그럼 이게 되게 하려면 어떻게 해야 할까 ?
type StringOrNumberList= (string | number | null )[] ; // 이런 식으로 작성해줘야 함
 // 리스트를 포함하는 괄호가 어떤 스코프 안에 들어가 있는 지가 굉장히 중요하다.

let strOrNumberList: StringOrNumberList = [
    '아이유',
    1
]


// type StringListOrBooleanList = string[] | boolean[]; 
// ----> 정확히 어떤 엘레멘트로 구성된 리스트이거나 또 다른 엘레멘트로 구성된 리스트를 하고 싶다면 ! (위 처럼 독립된 타입으로 나누어 줘야 한다.)

// type StringOrNumberList= (string | number | null )[]
// 리스트 표현식인 대괄호[] 앞에 일반 괄호인 ()을 사용해서 그 안에 해당 엘레멘트들을 넣어서 유니언으로 표시해주어야 한다.

// 즉, 유니언이 어디에 들어가 있는 지가 가장 중요하다 !

/**
 * 
 * Interface로 사용하는 유니언
 */


interface Animal{
    name: string;
    age: number;
}

interface Human{
    name: string;
    age: number;
    address: string;

}

// 1. 타입을 따로지정해서 작성하는 경우
type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
    name: '강아지',
    age: 6
}

console.log(animalOrHuman); // 타입이 Animal로 나온다.
// 여기서 똑같이 휴먼 인터페이스 내용을 작성하게 될 경우 타입이 Human으로 나오게 된다.


// 만약에 타입을 직접적으로 만들어주게 된다면 ? 

// 2. 타입을 따로 지정하지 않고 직접적으로 입력해서 만들어주는 것
let animalOrHuman2: {
    name: string;
    age: number;
} | {
    name: string;
    age: number;
    address: string;
} = {
    name: '채영',
    age: 26,
    address: '대한민국'
}


console.log(animalOrHuman2.name); // 어떤 타입인지 정확하게 유추가 된다.

// 그래서 웬만하면 'type' 키워드를 사용해서 타입을 형성하고, 선언을 하는 게 에러를 파악하는 데에 더 유용하다.

// 3. 서로 관계가 없는 유니언을 선언하면 어떻게 되는가 ?

type Person = {
    name: string;
    age: number
}

type Cat = {
    breed: string;
    country: string;
}

type PersonOrCat = Person | Cat;

const personOrCat: PersonOrCat = {
    name: '코드 팩토리',
    age: 32,
    breed: 'Yorkshire',
    country: '영국',
}

// 유니언의 재밌는 점은 위처럼 사람이나 고양이만의 프로퍼티 값을 입력해도 가능하지만,
// 사람, 고양이에 대한 모든 값을 입력해도 가능하다. 
// 심지어 고양이에 대한 값만 입력하고 사람의 값 하나를 입력해도 가능하다.
// 하지만 사람에서 하나, 고양이에서 하나, 즉 각각 하나씩 지워지는 건 불가능함 !
// 이렇게 되면 사람도 될 수 없고 고양이도 될 수 없음
// 무언가 하나의 타입 값이 충족되면 다른 타입의 값이 오버되어도 가능하다.
// 어떤 타입도 완전히 충족되지 않은 상태인 건 안 된다는 뜻이다.

// 유니언은 집합의 개념을 보면 좋다.
// 합집합의 개념 ! or을 쓰게 되면 사람에 대한 모든 것, 고양이에 대한 모든 것의 타입을 지정할 수 있다.
