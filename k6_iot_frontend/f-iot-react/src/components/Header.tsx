import { useUIStore } from "@/stores/ui.store";
import React from "react";

function Header() {
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);
  const toggleDarckMode = useUIStore((s) => s.toggleDarkMode);
  const darkMode = useUIStore((s) => s.darkMode);
  const isSidebarOpen = useUIStore((s) => s.isSidebarOpen);
  const showToast = useUIStore((s) => s.showToast);

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: darkMode ? "#222" : "#f2f2f2",
    borderBottom: darkMode ? "1px solid #444" : "1px solid #ccc",
  };

  const handleReserve = () => {
    // 예약 관련 코드(프론트엔드 유효성 검사 + API 호출 + 응답 성공 완료)
    showToast("예약이 완료 되었습니다.");
  };

  return (
    <header style={headerStyle}>
      <h3>Korea IoT React</h3>
      <div>
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? "메뉴 닫기" : "메뉴 열기"}
        </button>
        <button onClick={toggleDarckMode}>
          {darkMode ? "밝게" : "어둡게"}
        </button>
        <button onClick={handleReserve}>예약하기</button>
      </div>
    </header>
  );
}

export default Header;
