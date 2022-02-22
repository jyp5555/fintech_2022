/*
var
함수레벨스코프 굉장히 넓음...
다시 function에서 같은 변수 선언시 전역변수 오염가능... 
->블록레벨 let, const(재할당까지 불가능)
요즘 let위주
Q. let이랑 var랑 성능상의 차이가 있느냐? 
A. 실질적 브라우저상 변수 test하면 최적화를 잘되어있어서 비슷한 결과를 내보인다.
javascript tutorial!! hoisting object class 
====
function method 선언 
구방식[function 함수이름(매개변수){함수내용}]
구방식2[function 리턴값 let변수 저장 후 log...]
신방식[변수 = 매개변수 => {함수내용, 리턴} 후 변수저장 로그] *this생성 안함!!
====
Object오브젝트**중요!
json -> javascript 오브젝트 치환가능해야함!
property, method 
변수이름: {},
변수이름(함수):()=>{},
함수도 객체처럼 인식해서 그냥 객체이름.함수하면 선언?만되고 실행 안됨
    console.log(car.start);
    car.start()
====
배열 & 반복
배열안 요소의 데이터 타입 혼재 가능
for(let i = 0;조건;i++증가){내용}
for(let i = 0; i< 배열.length;i++){내용}
for(배열요소 of 배열){내용}
배열.map((요소객체)=>{내용}) iterator
====
템플릿리터럴
*/
let car1 = {
    name: "sonata",
    ph: 200,
    start: ()=>{
        console.log("engine start");
    },
    stop: ()=>{
        console.log("engine stop");
    },
}
let car2 = {
    name: "bmw",
    ph: 200,
    start: ()=>{
        console.log("engine start");
    },
    stop: ()=>{
        console.log("engine stop");
    },
}
let car3 = {
    name: "tesla",
    ph: 200,
    start: ()=>{
        console.log("engine start");
    },
    stop: ()=>{
        console.log("engine stop");
    },
}
let cars = [car1, car2, car3];
cars.map((car)=>{
    if(car.name !=="bw"){
        console.log("차량이 없습니다.")
    }
})
let name = "홍길동"
let age = 34;
console.log(name + " 님의 나이는 "+age+" 입니다.");
console.log(`${name} 님의 나이는 ${age} 입니다.`);