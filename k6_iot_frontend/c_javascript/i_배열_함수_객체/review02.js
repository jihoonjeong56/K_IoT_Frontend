// 장바구니 시스템 정의

//! === 프로그램 데이터 정의 ===
// 장바구니(cart)
// 1) id - 상품의 고유 식별자   (숫자)
// 2) name - 상품 이름   (문자)
// 3) price - 상품가격(숫자)
// 4) quantity - 사용자가 선택한 해당 상품의 수량(숫자)

/*
- Cart 객체 예시 (리터럴)

let product = {
  id: 1,
  name: 'banana',
  price: 6900,
  quantity:2
}
*/

//! === 프로그램 기능 정의 ===
// : 장바구니의 각 제품에 대한 CRUD(추가, 조호, 수정, 삭제)
// +) 추가기능 - 장바구니에 이미 존재하는 상품이면 수량 업데이트
//    수정기능 - 특정 상품의 수량 업데이트
//    장바구니 제품들의 총 합 계산

//! == 프로그램 구현
let cart = [];

//? 1. 장바구니에 상품 추가
function addToCart(id, name, price, quantity) {
  // 장바구내에 상품이 존재하는 지 검색
  // : findIndx
  // > 배열 내에 동일한 요소 검색 - 있으면 index 반환 / 없으면 -1 반환
  const index = cart.findIndex((item) => item.id === id);

  if (index > -1) {
    // 상품이 이미 장바구니에 존재하는 경우
    cart[index].quantity += quantity; // 이미 2개가 존재하고 1개를 추가 : 3개
  } else {
    // 상품이 장바구니에 없을 경우
    cart.push({ id, name, price, quantity });
  }
  displayCart();
}

//? 2. 장바구니 내의 모든 상품을 조회
function displayCart() {
  console.log("=== Cart Content ===");
  cart.forEach((item) => {
    console.log(
      `${item.name} - Price: $${item.price}, Quantity: ${item.quantity}`
    );
    console.log(`Total: ${item.name}'s Price: $${item.price * item.quantity}`);
  });
}

//? 3. 특정 상품의 수량을 변경
function updateQunatity(id, quantity) {
  const idx = cart.findIndex((item) => item.id === id);

  // 상품이 존재하고 변경할 수량이 0보다 커야만 상품 업데이트 가능
  if (idx > -1 && quantity > 0) {
    // 업데이트
    cart[idx].quantity += quantity;
  } else {
    console.log("유효하지 않은 상품이거나 수량이 0보다 커야 합니다.");
  }
  displayCart();
}

//? 4. 특정 상품을 삭제
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  displayCart();
}

//? 5. 장바구니의 총 합을 계산
// : 전체 배열의 요소를 순회하여 단일한 값을 도출(reduce 메서드)
// > 배열.reduce((축적값, 순회요소, 순회요소 인덱스, 원본배열) => {}, 초기값)
function calculateTotal() {
  let total = cart.reduce((sum, item) => {
    // 전체 요소를 순회하기 전까지 반환값은 sum 누적값 변수에 할당
    return sum + item.price * item.quantity;
  }, 0);
  console.log(`Cart Total Price : $${total}`);
}

//? 6. 장바구니 전체 상품 삭제
function clearCart() {
  cart = []; // cart.length = 0;
  displayCart();
  console.log("Cart is Empty");
}

//! === 장바구니 시스템 사용
addToCart(1, "banana", 3000, 3);
addToCart(2, "avocado", 2000, 2);

updateQunatity(2, 4);

addToCart(1, "banana", 3000, 1);

removeFromCart(1);

addToCart(3, "blueberry", 1500, 4);

calculateTotal();

clearCart();
