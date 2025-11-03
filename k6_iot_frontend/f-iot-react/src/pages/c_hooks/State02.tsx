import React, { useState } from "react";

//! useState: '컴포넌트 내에서' 데이터에 대한 상태 관리
// - 주로 UI에서 발생하는 이벤트에 반응해서 상태변화

interface Login {
  id: string;
  password: string;
}
const loginInitialValue: Login = {
  id: "",
  password: "",
};

function State02() {
  // === HOOKS(useState)===
  const [inputValue, setInputValue] = useState<string>("");

  // const [id, setId] = useState<string>("");
  // const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<Login>(loginInitialValue);

  const { id, password } = login; // 구조분해 할당

  // === EVENT HANDLER ===
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // input 창에 Change 변화가 일어나면 처리(handle)할 로직
    let inputValue = e.target.value; // 이벤트 객체의 target속성 === 이벤트가 발생한 input 태그
    setInputValue(inputValue);
    console.log(inputValue);
  };
  const handleResetClick = () => {
    setInputValue("");
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 매개변수로 전달받은 e(이벤트 객체)의 target
    // : 이벤트 발생된 요소
    // > target 요소 내의 속성에 접근 가능

    // e.target
    // : name과 value 값을 추출
    // - name값) 상태 변수의 이름과 일치 or 상태 변수 객체 내의 속성명과 일치
    // - value값) 사용자로 부터 입력 받는값
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    setLogin({
      ...login, //id 와 password 속성을 모두 가지는 login객체 (이전의 값 가져오기)
      // 변경하고자 하는 name 키를 가진 value 값을 변경 (해당 필드만 값 업데이트)
      [name]: value, //name.value x
    });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("폼데이터가 제출되었습니다.", login);

    // 데이터에 대한 활용(제출, 사용) 후에는 초기화가 필수
    setLogin(loginInitialValue);
  };
  const handleResetLogin = () => {
    setLogin(loginInitialValue);
  };
  return (
    <div>
      <p>useState & 이벤트 핸들러</p>
      <input
        type="text"
        value={inputValue}
        // onChange 이벤트
        // : 사용자가 요소에 변화를 일으킬 때 마다 발생하는 이벤트
        // - input, select, textarea 등의 요소에 적용
        onChange={handleInputChange}
      />

      <select onChange={handleInputChange}>
        <option value="축구">축구</option>
        <option value="야구">야구</option>
      </select>
      <br />
      <p>Input Value: {inputValue}</p>
      <button onClick={handleResetClick}>초기화 버튼</button>

      <h5>여러 개의 입력 상태 관리</h5>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="id"
          value={login.id}
          placeholder="아이디"
          onChange={handleLoginChange}
        />
        <input
          type="text"
          name="password"
          value={login.password}
          placeholder="비밀번호"
          onChange={handleLoginChange}
        />

        <p>
          아이디: {id} / 비밀번호: {password}
        </p>
        <button type="button" onClick={handleResetLogin}>
          초기화
        </button>
        <button type="submit">전송하기</button>
      </form>
    </div>
  );
}

export default State02;
