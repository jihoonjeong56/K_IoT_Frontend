//! JSONPlaceholder
// : 가상의 무료 데이터를 제공하는 Mock Server (가짜 서버)
// - REST API 를 활용하여 사용 (경로 자원을 통해 데이터 구분)
// - 게시글, 댓글, 사용자, 사진 등의 정보를 JSON 형식으로 제공

// [전체 조회 - 배열반환]
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts

// [단건조회 - 객체 반환]
// https://jsonplaceholder.typicode.com/users/1

//% 1. Promise 채이닝
function fetchPromisUserData() {
  try {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // HTTP 응답 상태 확인(200 번태가 아니라면 에러처리)
        if (!response.ok) {
          throw new Error(`HTTP error: status ${response.status}`);
        }
        return response.json();
      })
      .then((users) => users.forEach((users) => console.log(users)));
    //? cf) forEach 는 동기함수에 대한 기대
    //    >> 콜백 함수나 비동기 문법을 사용하더라도 실행을 기다려주지 않음
  } catch (error) {
    console.error(error);
  }
}
console.log("Promise로 데이터 처리하기");
fetchPromisUserData();

//% 2. Async % Await
async function fetAsyncPostsData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: status ${response.status}`);
    }
    const post = await response.json();
    console.log(post);
  } catch (e) {
    console.error(`게시물가져오기 실패: ${e.message}`);
  }
}
console.log("async, await 로 데이터 가져오기");
fetAsyncPostsData();
