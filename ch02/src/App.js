import logo from "./logo.svg";
import { Fragment } from "react";
import "./App.scss";
import styled from "styled-components";

/*
  
  날짜 : 2024/11/11
  이름 : 황수빈
  내용 : ch02. JSX실습

*/

// 스타일 컴포넌트 정의
const StyleDiv = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: blue;
  border: 1px solid black;
`;

function App() {
  let num1 = 1;
  let num2 = 2;

  const title = "hello React!";
  const name = null;
  const isLogined = false;

  const resultContent = function () {
    if (isLogined) {
      return <p>로그입 입니다.</p>;
    } else {
      return <p>로그인 아닙니다.</p>;
    }
  };

  const cities = ["서울", "대전", "대구", "부전", "광주"];
  const users = [
    { uid: "a101", name: "김유신", age: 23, addr: "김해" },
    { uid: "a102", name: "김춘추", age: 22, addr: "경주" },
    { uid: "a103", name: "장보고", age: 33, addr: "완도" },
    { uid: "a104", name: "강감찬", age: 43, addr: "서울" },
    { uid: "a105", name: "이순신", age: 53, addr: "부산" },
  ];

  function onClickHandler() {
    alert("버튼 2 클릭!");
  }

  let count = 0;
  const decrease = function () {
    const resultCount = document.getElementsByClassName("count")[0];
    resultCount.innerHTML = --count;
  };
  const increase = function () {
    const resultCount = document.getElementsByClassName("count")[0];
    resultCount.innerHTML = ++count;
  };

  const changeHandler = (e) => {
    console.log(`name : ${e.target.name}, value : ${e.target.value}`);
    document.getElementsByClassName("resultSelect")[0].innerText =
      e.target.value;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const jsonData = {
      uid: e.target.uid.value,
      name: e.target.name.value,
      age: e.target.age.value,
    };

    console.log(jsonData);
  };

  // 렌더링
  return (
    <div className="App">
      <h3>ch02.JSX실습</h3>

      <h4>출력</h4>
      <p>num1 : {num1}</p>
      <p>num2 : {num2}</p>
      <p>title : {title}</p>
      <p>name : {name}</p>

      <hr />

      <h4>조건 처리</h4>

      <p>
        {num1 > num2 ? (
          <span>num1은 num2보다 크다.</span>
        ) : (
          <span>num1은 num2보다 작다.</span>
        )}
      </p>

      <p>{name === null && <span>name은 null입니다.</span>}</p>
      <p>{name || <span>name은 null 입니다.</span>}</p>

      {isLogined ? (
        <p>isLogined true 입니다.</p>
      ) : (
        <p>isLogined false 입니다.</p>
      )}

      {/* 함수 호출 */}
      {resultContent()}
      <hr />

      <h4>반복 처리</h4>

      {/* 
         - 반복 처리 시 key 속성으로 유일값 설정
         - JSX는 class 속성 대신 className 속성 사용
      */}

      <ul>
        {cities.map((city, index) => (
          <li className="city" key="index">
            {city}
          </li>
        ))}
      </ul>
      {users.map((user) => (
        <p className="user" key={user.uid}>
          {user.uid},{user.name},{user.age},{user.addr}
        </p>
      ))}

      <hr />

      <h4>Fragment</h4>

      {/*
        - Fragment는 JSX 태그요소를 감싸는 가상 태그
        - 렌더링 되지 않음, 간단하게 <></> 형태로 많이 사용
        - 여러 요소를 그룹화하여 부모 요소로 감싸야 할 때 사용되는 기능
      */}

      <Fragment>
        <p>안녕하세요</p>
        <p>반갑습니다</p>
      </Fragment>

      <>
        <p>안녕하세요</p>
        <p>반갑습니다</p>
      </>
      <hr />

      <h4>이벤트</h4>

      <button onClick={() => alert("버튼1 클릭!")}>버튼1</button>
      <button onClick={onClickHandler}>버튼2</button>

      <p>
        count : <span className="count">0</span>
        <br />
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </p>

      <select onChange={changeHandler}>
        <option>서울</option>
        <option>대전</option>
        <option>대구</option>
        <option>부산</option>
        <option>광주</option>
      </select>

      <p className="resultSelect"></p>

      <form onSubmit={onSubmit}>
        <input type="text" name="uid" />
        <br />
        <input type="text" name="name" />
        <br />
        <input type="member" name="age" />
        <br />
        <input type="submit" name="전송" />
      </form>
      <hr />

      <h4>JSX 스타일</h4>

      {/* 인라인 스타일 */}
      <div
        style={{
          display: "inline-block",
          width: "100px",
          height: "100px",
          border: "1px solid black",
          backgroundColor: "red",
        }}
      ></div>

      {/* CSS(scss) 스타일 */}
      <div className="box"></div>

      {/* styled-component 스타일 */}
      <StyleDiv></StyleDiv>

      {/* 
        UI 프레임워크(TailwindCSS) 
          - 'tailwindcss cheatsheet' 검색해서 tailwind 속성값 참고
      */}
      <div className="inline-block w-[100px] h-[100px] bg-[orange] border border-black "></div>
      <hr />
    </div>
  );
}

export default App;
