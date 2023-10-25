function add(num1: number, num2: number) { // 명시적으로 파라미터 값의 타입을 지정해서 보여줄 수 있다.
    return num1 + num2;
}

//console.log(add(1, '2')); // 아예 실행이 안 됨. 타입이 number가 아닐 경우
// 컴파일 에러가 뜨게 된다. -> 타입 스크립트 코드를 js로 변경할 수 없다는 뜻이다.
