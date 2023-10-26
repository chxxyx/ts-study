/**
 * 
 * Type and Interface
 */


/**
 * Type
 * 타입은 쉽게 말해서 ts의 타입에 이름을 지어주는 역할을 한다.
 */
type newStringType = string;
// 변수 선언 시 const, let을 사용하는 것처럼 type
// 타입 키워드를 사용해서 이름을 지어주면 앞으로 이 명칭을 가지고 타입을 지정할 수 잇다.
// 즉 위 변수는 스트링타입이 된다.
// 타입 스크립트에 존재하는 유효한 모든 타입들을 저렇게 넣을 수가 있는 것이다.
type newNullType = null;
type newBooleanType = boolean;
type MaleOrFemale = 'male' | 'female'; // -> 유니온(a 또는 b)을 사용한 것이다. 두 가지 중 하나의 값만 들ㄹ어가는 타입도 이렇게 생성할 수가 있다.

// 아래가 에러가 나는 이유 ::
// 원래 자바스크립트는 웹에서 실행 했을 때 하나의 파일로 인식이 된다.
// 즉, 같은 프로젝트 내에 있는 동일한 변수명을 사용하고 있는 게 있기 때문에 에러가 난다.
const stringVar: newStringType = "test";
// -> 해결하려면 ? tsconfig.json에 들어가서 
//      "moduleDetection": "force",   auto에서 force로  이렇게 설정해주면 된다. 

type IdolType = {
    name: string;
    year: number;
}

const yuJin: {
    name: string;
    year: number;
} = {
    name: "안유진",
    year: 2003
}

/**
 * InterFace
 * 
 */

 
interface IdolInterface {
    name: string;
    year?: number; // 이렇게 하면 year를 무조건 작성하지 않아도 된다
}

const yuJin2: IdolInterface = {
    name: "안유진",
    //year: 2003
}

// 타입과 인터페이스의 가장 큰 차이 :
// 인터페이스는 기본적으로 객체형태로 들어간다. 그래서 우리가 함수도 선언할 수 잇고, 일반 객체도 선언할 수 있는데,
// 타입처럼 type MaleOrFemale = 'male' | 'female'; -> 이런 형태의 primitive를 나열할 수는 없다.

