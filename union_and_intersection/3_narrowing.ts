/**
 * 
 * Narrowing
 * 
 * 유니언 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추할 수 있게 되는 걸 의미한다.
 * 
 *  일명 타입 좁히기
 *  유니온 타입처럼 여러 타입이 될 수 있는 경우 이 타입도, 저 타입도 확정이 되어 있지 않은 상태라고 볼 수 있다.
 *  이때 타입을 하나로 확정 시켜주는 것을 Narrowing 이라고 칭한다.
 */

// let numberOrString: number | string = 'code factory';
// numberOrString;

// const decimal = 12.3278;
// console.log(decimal.toFixed(2)); // 소수점 둘째자리까지 반올림

// numberOrString.toFixed() -> 이미 numberOrString은 스트링 값으로 내로잉 되어 있으므로
// toFixed() 함수를 사용하 수 없다. 


/**
 * 
 * Narrowing 종류
 * 
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator Narrowing
 * 6) instanceof Narrowing
 * 7) discrimated Narrowing (차별된 유니언 내로잉)
 * 8) exhaustiveness Narrowing
 * 
 * 
 * 
 */

// 1. Assignment Narrowing
// 특정 값을 할당해서 내로잉 하는 것.
let numberOrString: number | string = '아이유';
numberOrString.toString();

// 2. typeof Narrowing (타입을 좁히기)
// 위에서까지는 분명히 스트링으로 타입이 지정됐었는데
// 아래 math.random 함수를 사용하자마자 string | number 타입이 됐다.
numberOrString = Math.random() > 0.5 ? 1123: '아이유'; // 이 코드를 실행하는 순간 0부터 1사이의 랜덤값 반환된다.


if (typeof numberOrString === 'string') { // js: 변수의 타입을 반환받을 수 있었음 
    numberOrString; // string
} else {
    numberOrString; // number 
}


// 3. Truthiness Narrowing (조건문이 false일 경우)
// null이나 undifined처럼 조건문 사용 시 false가 되는 경우로 테스트 
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['뉴진스', '르세라핌'];

// false가 나오는 값을 타입 체크하는 방법
if(nullOrString) {
    nullOrString; // string[]
} else {
    nullOrString; // null
}

// 4. Equality Narrowing (같은 지를 비교할 때 !)
let numberOrString2: number | string = Math.random() > 0.5 ? 1123 : '뉴진스';

let stringOrnBool2: string | boolean = Math.random() > 0.5 ? '아이브' : true;


if(numberOrString2 === stringOrnBool2) { // 이 둘이 같은 경우는 string 밖에 없다는 것으로 타입스크립트는 유추한다.
    numberOrString2; // string
    stringOrnBool2; // string

    // 여기가 같은 경우는 둘 다 string인 경우 밖에 없는데, 아래 else문은 둘 중에 하나가 스트링이 아닌 경우이니까. 
    // 아래는 따라서 유니언처럼 타입을 반환받게 된다.
} else {
    numberOrString2; // number | string
    stringOrnBool2; // string | boolean
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ?
1123 : Math.random() > 0.5 ? '안유진' : null;

if(typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull; // 당연히 number 타입으로 유추가 된다.
} else{
    numberOrStringOrNull; // string | null
}

// 5. in operator Narrowing

interface Human {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    type: string;
}

let human: Human = {
    name: '안유진',
    age: 23,
}

let dog: Dog = {
    name: "백재롱",
    type: "말티즈"
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;
console.log('name' in human); // human에 'name'이라는 키값이 있는지에 대한 true false ? true가 나옴
// 존재하는 키값에 대한 여부를 'in' 키워드를 통해서 찾을 수 있다.

if('type' in humanOrDog) {
    humanOrDog; // 당연히 Dog 타입으로 유추된다. 왜 ? Dog 인터페이스에만 type이라는 키값이 있으니까 !
} else {
    humanOrDog; // 이건 당연히 Human
}

// 6. instanceof Narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '코드팩토리';

if(dateOrString instanceof Date) { // dateOrString이 Date 클래스의 인스턴스냐 ? 
    dateOrString; // Date 타입으로 유추된다. 
} else {
    dateOrString; // 당연히 string 타입으로 유추된다.
}


// 7. discrimated Narrowing
interface Animal { // 이런식으로 작성하면 안 됨, 암묵적으로 그냥 테스트를 위해 작성해놓은 것
    type: 'dog' | 'human';
    height?: number;  // ? : 옵셔널
    breed?: string;
}

let animal: Animal = Math.random() > 0.5 ? 
{
    type: 'human',
    height: 160,
} : {
    type: 'dog',
    breed: '말티즈'
}

if(animal.type === 'human') {
    animal.height; // 옵셔널이므로 number 혹은 undifined가 뜬다.
} else {
    animal.breed; 
}

// 이런 식으로 타입을 나누고 싶을 때는 위처럼 하나의 인터페이스에 작성하는 것이 아니라 
interface Human2 {
    type: 'human';
    height: number;
}

interface Dog2 {
    type: 'dog';
    breed: string;
}

type HumanOrDog2 = Human2 | Dog2;
let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ? 
{
    type: 'human',
    height: 160,
} : {
    type: 'dog',
    breed: '말티즈'
}

if(humanOrDog2.type === 'human') {
    humanOrDog2; // Human2 타입이 된다. 
} else {
    humanOrDog2; // Dog2 타입이 된다.
}

// 하나 안에 여러 타입들을 정의하는 것 보다
// 각각의 타입을 나눠서 지정해서 유니언으로 묶어주는 게 타입을 정확하게 유추하는 데에 더 유리하다.


// 8. exhaustiveness Narrowing
// 체크를 하면서 내로잉 할 수 있는 방법
switch(humanOrDog2.type) {
    case 'human': // 타입이 휴먼일 경우에만 이 케이스 안에 들어온다 ~
        humanOrDog2;
        break;
}