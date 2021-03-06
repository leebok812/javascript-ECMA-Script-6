
/////// 1.let 키워드 :변수 선언이 무의미한 문제  (var vs let)///////////////
{
    console.log("=======================1번=========================")
        //var 는 더이상 쓰지 말자!
        //중복되도 오류가 안남 | 나중에 문제 발생할수도 있기 때문
    {
        var x = 30;
        console.log("1번 var : "+x); 

        console.log("=======구분선=======")

        var x = 30; // 중복 오류 없이 그대로 내보낸다. 
        console.log("1번 var : "+x); 

        console.log("====================")
    }
    
    
    {
        let x = 40;
        console.log("1번 let : "+x);

        console.log("=======구분선=======")

        let y = 20; // let으로 이렇게 할 경우 중복 문제를 잡아준다.
                  //index.js:21 Uncaught SyntaxError: Identifier 'x' has already been declared
        console.log("1번 let : "+y);


        console.log("====================")
    }
}
////////////////////////////////////////////////////////////////////////////////





//////////////// 2.let 키워드 : 이젠 지역변수가 생겼다.//////////////////////////////
{
    console.log("=======================2번=========================")

        //ex1.
        {

           var  a = 30;

        }

        console.log("2번 var로 할 경우 : "+a);  //<= 안 나와야하는데 var로 해서 나옴 

       
        console.log("=======구분선=======")


        {

            let b = 30;

        }
        //console.log("2번 let으로 할 경우 : "+b); //하지만 let으로 하면 지역화되서 안됨 오류발생!

        console.log("====================")


//////////////////////

                //ex2.
        function getValue(condition){

            if(condition){
                {
                    {
                var value ="ok";
                    }
                } 
                return value;

            }else{
                return value;
            }
        }
        console.log("2번 "+getValue(false));// => undefined가 나오는데 이 뜻은 선언됐다는 말이다 
        //원래는 에러가 나야함(let value로 할경우는 에러가난다.)
        // var로 표현되서 어느 곳에 깊게 숨겨놔도 전역처럼 범위를 끼치는것.

}
///////////////////////////////////////////////////////////////////////////////////////////







///////////////////////////////3. const 변수 /////////////////////////////////////
{

    console.log("=======================3번=========================")
    const N = 1;
    const S = 5;

    var walkTo = S;
   // S= 3; // 오류가 남 상수에 값을 대입하려 했기에


     const add = function(a,b){
         return a+b;
     }

    // add=3;// Assignment to constant variable.  위와 같은 예 상수는 불변값이므로 값을 넣을수 없다.

     console.log("3번"+add(3,4)); 

}

//////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////4.Template String///////////////////////////////

{

    console.log("=======================4번=========================")
  /* 예전 방식
    let tmaplate  = "<section> \  <- 한칸 띠고 역슬래시를 붙여줬음
                    <h1></h1> \
                         <p></p> \
                        </section>"; */

        //새로운 표현방법 backtick-어금부호
        let title = "ES6";
        let content ="새로운 문자열";
        let template  = String.raw`<section>  //String.raw 날것그대로 다 출력해달라
                         <h1>${title}\n\n\n</h1> 
                         <p>${content}</p> 
                        </section>`;
            console.log("4번"+template);


}

/////////////////////////////////////////////////////////////////////////////////


//////////////////// 5. 향상된 JSON 객체 표현식 #1///////////////////////////

{
    console.log("=======================5번=========================")
    let kor = 30;
    let eng = 40;
    let math = 50;


let exam = {kor,eng,math, total(){
    return 10;
}};
console.log("5번"+exam.kor);
console.log("5번"+exam.total());





}
//////////////////////////////////////////////////////////////////////////////////


///////////////////// 6. 향상된 JSON 객체 표현식 #2 : 변수형 속성//////////////////

{

    console.log("=======================6번=========================")
     let attr = "kor";
    let  exam ={
        //attr:10 undifined;
        [attr]:10

    };

        console.log("6번"+exam.kor);






}
/////////////////////////////////////////////////////////////////////////////////////////


////////////////////////7. Object Destructuring #1- 객체 뽀개기////////////////

{
    console.log("=======================7번=========================")

    let exam = {
        kor:20,
        eng:30,
        math:40
    };

    function print({kor, eng, math}){

       // let kor = exam.kor;
       // let eng = exam.eng;
       // let {kor, eng} = exam; // 위에 두개를 뽀개서 만듬

        //최종본은 아예 function 에 넣어버림.

       //첫번째 표현법 console.log(`7번 kor: ${exam.kor}, eng:${exam.eng}`);
        console.log(`7번 kor:${kor},eng:${eng},math:${math}`);
    }
    print(exam);

}

//////////////////////////////////////////////////////////////////////////////


///////////8. Object Destructuring #2 - 속성 확장과 기본값/////////////////////////

{
    console.log("=======================8번=========================")

    let exam = {
        kor:20,
        eng:30,
        math:50
    
    };

    let{   kor, eng  ,math ,total = kor+eng+math  } = exam;
    //비슷한 느낌 select kor, eng,math, kor+eng+math as total from exam;
    console.log(`8번 뽀개기 적용전 kor: ${kor}, eng: ${eng},math:${math},total:${total}`);
    
    
    exam.kor = 100; // 위 let exam 은 지역 변수로 되어 이 값을 넣어주려면 재 설정해줘야한다.
    exam.math = 70; // 위 let exam 은 지역 변수로 되어 이 값을 넣어주려면 재 설정해줘야한다.
    

    // kor = exam.kor;
    // math = exam.math;
    // total = exam.kor+exam.eng+exam.math; 
    ({kor,math,total = kor+eng+math }=exam); // 위 3개를 뽀갬

    console.log(`8번 뽀개기 적용후 kor: ${kor}, eng: ${eng},math:${math},total:${total}`);

}

//////////////////////////////////////////////////////////////////////////////////////


/////////9. Object Destructuring #3 - 중첩과 적응////////////////////////////


{
    console.log("=======================9번=========================")

    let exam = {
        kor:20,
        eng:30,
        math:40,
        student:{
            name:"newlec",
            phone:"010-2222-3333"
        }
    
    };


    let {kor, eng,student:{name, phone}} = exam; // student 안의 내용들을 {}로 지역화시켜서 뽑음
    //let {kor, eng,student:{name},student:{phone}} = exam; // 이렇게도 가능하나 위에 표현이 훨씬 쉽다.
    console.log(`9번`+kor);
    console.log(`9번`+eng);
    console.log(`9번`+name);
    console.log(`9번`+phone);

    //let {kor:k,eng}=exam; //이렇게 별칭 쓰는 것이 가능
   // console.log(`9번`+k)
}

////////////////////////////////////////////////////////////////////////////


/////////////////////////////10. Array Destructuring #1//////////////////////////////

{

    console.log("=======================10번=========================")

    let kors = [10,20,30];
    let [kor1,kor2] =kors; // kor1에 kors 0번째인 10이 들어가고 kor2에 kors 1번째인 20이 들어간다.
    //let [,kor1,kor2] =kors; // kor1에 kors 1번째인 20이 들어가고 kor2에 kors 2번째인 30이 들어간다.



    console.log(`10번 kor1:${kor1}, 10번 kor2:${kor2}`);

    // 여기서 다른 배열을 이용하고 싶을때

    let temp =[40,70,30];

    [kor1,kor2,]=temp;

    console.log(`바뀐후 10번 kor1:${kor1}, 바뀐후 10번 kor2:${kor2}`);


    // SWAP

    let x = 2, y = 3 , t;

    console.log("10번 swap 전"+x+","+y);

    //기존 swap법
    /*  t= x;
     x = y ;
     y = t; */

    //배운 SWAP법
    [x,y] = [y,x];


     console.log("10번 swap 후"+x+","+y);


}


/////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////11. Array Destructuring #2///////////////////////////////


{

    console.log("=======================11번=========================")

    //1.
    let kors = [10,20,30];
    let [kor1, kor2, kor3, kor4=40] = kors; //배열에 kor4처럼 값을 넣고 추가할수 있다. 
    console.log("11번"+kor4)

    //2.
    let exam = [10,20,30,[40,50]];
    let [kor, eng,math,[com,history]]= exam; // 위의 대괄호중첩처럼 묶어줘서 값을 뺄수 있다.
    console.log("11번"+com);


    //3. 

    let notice = {
        title:"공지사항",
        files:["img1.png","img2.png"]
    
    };
        let {files:[first]}= notice; //img1.png 뽑음 |first라고 별칭을 준것임
        console.log(first);

    //4. 
    let notices = {
        title:"공지사항",
        list:[
        {title:"오~", content: "내용무"},
        {title:"하~", content:"ㅋㅋ"}
        ]
    };
    let{list:[one]}=notices; //one이라고 별칭을 준것임
    console.log("11번"+one.title); //list의 첫번째 title을 뽑음 | one이라고 별칭을 준것임
    let{list:[,two]}=notices; //two라고 별칭을 준것임
    console.log( two); //list의 두번째 전체를 뽑음 //two라고 별칭을 준것임
    console.log("---------------");

}



////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////12. Set 콜렉션 //////////////////////////////////////////////


{

    console.log("=======================12번=========================")

    //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set 참고

    {
    //ex1. 
    let set = new Set();

    /*
    set.add(5); // 숫자
    set.add("5"); //문자 중복되면 안됨!
    set.add(2);
    set.add(5); // 위에서 숫자 5를 넣었기에 이건 안들어감.
    */

    // 위와 같은 더 쉬운 표현법
    set.add(5).add("5").add(2).add(5);

    console.log("12번 : "+set.size); // 맨 마지막 5가 안들어간것을 확인해볼수있다 그러므로 set.size = 3
    }

    {
    //ex2.
    let set = new Set([2,4,3,5,6,4,3]);
    console.log("12번 : "+set.size); // 중복값을 빼고 출력하면 5가 나옴.
    }

    {
    //ex3.
    let ar = [1,2,3,2,3,4,3,4,5];
    let set = new Set(ar);
    console.log("12번 : "+set.size);// 중복값을 빼고 출력하면 5가 나옴.

    }


    {
    //ex4.값 나열하기
    let set = new Set([2,10,7,45,23]);

    //1번 방법
    set.forEach(function(value,key,ownerSet){
        console.log("12번 : "+key+":"+value);
    });

    console.log("===========================");

    //2번 방법 - for-of를 이용한 값 나열 (새로등장 코드량이 더 적고 좋다~)
    for(let v of set){ // v로 별칭(명명)한것.
        console.log("12번 : "+v);
    }
    //2번 방법의 응용 - 1번 처럼 키와 값 나오게 하기
    for(let [key, value] of set.entries()){ // v로 별칭(명명)한것.
        console.log("12번 : "+key+":"+value);
    }

    
    }

    {
    //ex5. 값 확인하기
    let set = new Set();
    set.add(5);
    set.add("5");
    console.log("12번 값 확인 : "+set.has(5)); //true
    console.log("12번 값 확인 : "+set.has(6)); //false

    }

    {
    //ex6. 값 삭제하기
    let set = new Set();
    set.add(5);
    set.add("5");
    console.log("12번 삭제 전 : "+set.size);    //2

    set.delete(5);
    console.log("12번 5 삭제 후 : "+set.size); //1

    set.add(6);
    console.log("12번 6 삽입 후 : "+set.size); //2

    set.clear(); // 모두 삭제 
    console.log("12번 clear 후 : "+set.size); //0



    }


}


/////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////13.  Map 콜렉션////////////////////////////////////////////////////



{

    console.log("=======================13번=========================")

 //ex1.
        { 
        let map  = new Map();
        map.set("id",1); //map의 특징적인 부분 : 값하고 키 두개가 한번에 저장된다. 
        console.log("13번 : " +map.size);
        console.log("--------------------------------");
        map.set("title","map이란?");
        console.log("13번 : " +map.size);
        console.log("--------------------------------");
        console.log("13번 : " +map.get("title"))
        }


//ex2.
        {

        //1번 표현법
       /*  let exam = new Map();

            exam.set("kor",10);
            exam.set("eng",10);
            exam.set("math",10); */
       
            //2번 표현법
        let exam = new Map([["kor",10],["eng",10],["math",10],[4,"kor"]]);

            //exam.set("kor",10);
            //exam.set("eng",10);
            //exam.set("math",10);
            
            
            console.log("--------------------------------");

            //1번 표현법
            for(let [k,v] of exam){ // [k(키),v(값)] k와v 라고 명칭을 붙인것.
                console.log(typeof k); // ["kor",10] -> String [4,"kor"] -> number
                console.log("13번 : " +`${k}:${v}`);
            }
            console.log("--------------------------------");
            //2번 표현법
            for(let [k,v] of exam.entries()){ // [k(키),v(값)] k와v 라고 명칭을 붙인것.
                console.log(typeof k); // ["kor",10] -> String [4,"kor"] -> number
                console.log("13번 : " +`${k}:${v}`);
            }
   
   
         }   




}


/////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////14. Rest Parameters ///////////////////////////////////////////////


{

    console.log("=======================14번=========================")

    function print(x,y,...values){ // <점 세개> ...values 에   x,y 다음 값들이 들어가게 된다. 
        console.log(`"14번 : "${x},${y}`); //아래 구문과 같은 뜻
        console.log(`"14번 : "${arguments[0]},${arguments[1]}`); //위 구문과 같은 뜻

        for(let i = 0; i<values.length; i++){
            console.log(values[i]);
        }
    }

    //여기서 2,3제외 나머지 값만 출력하려면 ?? 위처럼 values.length 를 준 후 for문을 돌린다. 
    print(2,3,5,6,7,8);







}






///////////////////////////////////////////////////////////////////////////////////////////



///////////////////////15. Spread Operator////////////////////////////////////////////////////
{
console.log("============15번=========");

{

    function print(x,y,z){

        console.log(`x:${x},y:${y},z:${z}`);

    }

    //1. 배열 형태
    let nums = [2,3,5];
    print(...nums); // nums가 배열형태이고 위의 print 라는 함수를 보면 
    //x,y,z라는 것을 프린트하라고 한다. 이럴때 <...>점 세개 후 변수명을 하면 출력!
    console.log("----------------------------------------");

    //2. set 형태 
    let numnums = new Set([2,4,6]);
    print(...numnums);

    //3. set을 배열로 할수 있는가?
    let set = new Set([1,3,5,7]);
    let numnumnums = [...set];
    
    print(...numnumnums);

    //4. map도 가능?
    let map = new Map();
    map.set("id", 3);
    map.set("title","hello");

    //console.log([...map][0][0]); 풀어쓰지 않고 원래 대로 쓰면 이렇게 | 이렇게라면 이해할수 있었을까?
    let temp = [...map]; // temp에 map널부러트린 값들을 넣음
    console.log("15번 : "+temp[0][0]);  // 키값인 id가 나옴
    console.log("15번 : "+temp[0][1]);  // 값인 3이 나옴

}





console.log("============15번=========");
}

/////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////16. Default Value의 이전방식과 현재방식 ////////////////////////////////////////

{
    console.log("==========================16번=============================")

    //ex1. 기본 값이 없던 함수 
    {
        function add(x,y){

            x =  x || 0;
            y =  y || 0;

            return x+y;

        }

        console.log(add(2,3));
        console.log(add(1));

    }

    //ex.2 1번에서 발전
    {
        function add(x=0,y=0){
            return x +y;
        }


    }



        //ex3.
        {
            console.log( true || false); // true

            console.log( 5 || 2); //5

            console.log( false || true); // true

            console.log( null || 2);  //2   두번째값
    
            console.log( 1 || 2);  //1
           
            console.log( true || 2);  // true
            
            console.log( undefined || 2);  // 2 두번째값
            
            console.log( "" || 2);  // 2 두번째값
            
            console.log( "" || null);  // null 두번째값
            
            console.log( "" || null || 5);  // 5 -> 파이프 연산 같은 역할을 함 값이 나올때까지 쭉~




        }

        //ex3. 기본값을 중간에 사용하는 경우에서 기본 값을 사용 하는 방법
            {
                function add(x, y=10, z){
                    console.log(x + "," + y + ","+z);

                }
                console.log(add(10, null,30));
                console.log(add(10,undefined,30));



            }


            //ex4. 전달되지 않은 기본값은 arguments 개수에 잡힐까?
            {
                function add(x, y=10){

                    console.log(arguments.length);
                    console.log(x+ ","+y);


                }
                add(10);
                add(10,30)
                add(undefined);



            }


            //ex4의 다른 예
            {
                function print(x, y=10, z=20){

                    console.log(`x:${x},y:${y},z:${z}`);
                    console.log(arguments.length);


                }

                print(2); // 이때의 arguments.length는 1
                print(2,3); // 이때의 arguments.length는 2




            }





    console.log("==========================16번=============================")

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////17. Arrow Functions과 그 특징 ///////////////////////////////////

{

    console.log("=======================17번=========================")

    //1. 이전방식
    {
        window.addEventListener("load", function (){


            alert("로드 완료");

        });


    }

    //1-1. 이전방식
    {

            function print(){

                this.kor = 10;
                console.log("print:"+this.kor);
                console.log("print:"+window.kor); //위와 같은 값 나옴


            }

            function Exam(){
                this.kor = 0;
                this.eng = 0;
                this.math = 0;


            }

            print();
            let exam = new Exam();
            console.log(exam.kor);
            console.log(kor); //function print 중 widow.kor 값 10이 출력된다. 전역이라는 뜻
    }


    //2. Arrow function 사용 
    {
        window.addEventListener("load", ()=>{

            alert("로드 완료");

        });




    }

    //3. 함수를 즉석에서 정의해서 넘기는 경우가 많다.
    {
        let nums =[13,4,6,1,3,26];

        nums.sort();
        console.log(nums);

        //위 구문을 Arorow function을 활용해서 적어보자면

        nums.sort((x,y)=>x-y);
        console.log(nums);





    }


            //4. 변수 두 개 이상 가지는 경우
                    {

                        var func1 = function(x,y){

                            return x+y;

                        }


                        //  위 구문을 Arrow function을 하자면

                        var func1 = (x,y)=>{
                            return x+y;
                        }
                            func1(2,3);
                            //위 구문을 간소화 하자면
                            
                            var func1 = (x,y)=> x+y;
                            func1(2,3);



                    }





}



//////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////18. class를 이용한 객체 정의 ///////////////////////////////////////////

//ex1. ECMAScript 6에서 클래스를 정의하는 방법

{
    console.log("=======================18번=========================")

    class Exam{

        constructor(kor=0,eng=0,math=0){
                this.kor = kor;
                this.eng = eng;
                this.math = math;
        }

            total(){
                return this.kor + this.eng + this.math; // this생략 불가능
            }

            avg(){
                    return this.total()/3.0;
            }

            //기존 함수로 정의하던 방법과의 차이점

            //1. class 블록 안의 코드는 strict 모드로 실행된다.
            //2. class 블록 안의 모든 메소드는 열거할 수 없다.
            //3. class 생성자는 new를 통하지 않고는 호출할 수 없다. 

        }


           let exam = new Exam(10,20,30);
              console.log(exam.total());


    }






///////////////////////////////////////////////////////////////////////////////////////////////


///////////////////19. class 멤버 은닉하기  (18번 예제 사용)/////////////////////////////////////////////
{

    console.log("=======================19번=========================")

    class Exam{
        #kor; //private 대신 #을 씀
        #eng; //private 대신 #을 씀
        #math; //private 대신 #을 씀

        constructor(kor=0,eng=0,math=0){
                this.#kor = kor;
                this.#eng = eng;
                this.#math = math;
        }

            #total(){ // total 메소드로 은닉화(private) 가능
                return this.#kor + this.#eng + this.#math; // this생략 불가능
            }

            avg(){
                    return this.#total()/3.0;
            }

            //기존 함수로 정의하던 방법과의 차이점

            //1. class 블록 안의 코드는 strict 모드로 실행된다.
            //2. class 블록 안의 모든 메소드는 열거할 수 없다.
            //3. class 생성자는 new를 통하지 않고는 호출할 수 없다. 

        }


           let exam = new Exam(10,20,30);
              console.log(exam.avg());
              //console.log(exam.kor);// 위에서 kor을 private처리 해서 undefined 가 나옴




    }

















/////////////////////////////////////////////////////////////////////////////////////



////////20 - static 멤버 정의하기  19번 예제 씀///////////////////////////////////////////////////////

{



    console.log("=======================20번=========================")
    
    class Exam{
        #kor; //private 대신 #을 씀
        #eng; //private 대신 #을 씀
        #math; //private 대신 #을 씀
        
        static #info = "안녕하세요. 저는 Exam 클래스 입니다."; // static화 됨.
        constructor(kor=0,eng=0,math=0){
                this.#kor = kor;
                this.#eng = eng;
                this.#math = math;
        }

            #total(){ // total 메소드로 은닉화(private) 가능
                return this.#kor + this.#eng + this.#math; // this생략 불가능
            }

            avg(){
                    return this.#total()/3.0;
            }

            static info(){

                return Exam.#info;

            }

        }

              
           let exam1 = new Exam();
    
              console.log(Exam.info());
          




    }














/////////////////////////////////////////////////////////////////////////////////