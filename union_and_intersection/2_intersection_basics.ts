/**
 * 
 * Intersection
 * 
 * Add
 * 
 */

interface Human {
    name: string;
    age: number;
}

interface Contacts {
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts; // 유니언과 마찬가지로 묶을 수 있음
// 그리고 유니언이랑 Intersection 같이 사용할 수도 있음

let HAndC: HumanAndContacts = {
    name: '채영',
    age: 26, // 여기까지만 작성하면 에러가 뜸 !! 모든 타입에 대한 값을 작성해줘야 한다.
    address: '서울', 
    phone: '010-0000-0000'
    
}
// 인터섹션을 사용하면 양쪽에 있는 타입이 모두 합쳐진다.
// 하지만 primitive 타입 (number, string  .... )을 인터섹션을 사용해서 선언할 경우 never 타입으로 변경된다.
// never(절대로 존재할 수 없는 상황) === 즉, primitive 타입이 동시에 있을 수 없는 상황이라는 뜻이다.

