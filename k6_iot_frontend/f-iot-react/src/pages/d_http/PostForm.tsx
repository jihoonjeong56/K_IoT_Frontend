import React, { useEffect, useState } from "react";
import type { Post } from "./Post";
import { mockApi } from "./B_Axios";

//!

function PostForm() {
  // Hooks
  const [inputValue, setInputValue] = useState<Post>({
    title: "",
    body: "",
  });

  const [editingId, setEditingId] = useState<string | null>(
    localStorage.getItem("editingPostId")
  );

  const { title, body } = inputValue;

  // const storedId = localStorage.getItem("editingPostId");
  // LocalStorage 값 벼화를 감지
  useEffect(() => {
    const handleStroageChange = () => [
      setEditingId(localStorage.getItem("editingPostId")),
    ];
    window.addEventListener("storage", handleStroageChange);
    return () => window.removeEventListener("storage", handleStroageChange);
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      if (editingId) {
        try {
          const response = await mockApi.get(`/posts/${editingId}`);
          const post = response.data; //응답 내부의 데이터 추출

          setInputValue({
            title: post.title,
            body: post.body,
          });
        } catch (e) {
          console.error("게시글 조회 실패: ", e);
        }
      } else {
        // 새로작성시 비워주기
        setInputValue({ title: "", body: "" });
      }
    };
    fetchPosts();
  }, [editingId]);

  // 이벤트 핸들러
  const handleInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (editingId) {
        // 수정
        await mockApi.put(`/posts/${editingId}`, { title, body });
        alert("수정완료");
        localStorage.removeItem("editingPostId");
        setEditingId(null);
      } else {
        // 생성
        if (title.trim() && body.trim()) {
          await mockApi.post("/posts", { title, body });
          alert("등록완료");
        } else {
          alert("제목과 내용을 반드시 작성해 주세요");
        }
      }
      setInputValue({
        title: "",
        body: "",
      });
    } catch (e) {
      console.error("요청 실패", e);
      alert("오류가 발생했습니다.다시 시도해 주세요");
    }
  };

  return (
    <div>
      <h2> {editingId ? "게시글 수정" : "게시글 생성"}</h2>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleInputValueChange}
        placeholder="제목"
      />{" "}
      <br />
      <textarea
        name="body"
        value={body}
        onChange={handleInputValueChange}
        placeholder="내용"
      />
      <br />
      <button onClick={handleSubmit}>
        {editingId ? "수정하기" : "등록하기"}
      </button>
    </div>
  );
}

export default PostForm;
