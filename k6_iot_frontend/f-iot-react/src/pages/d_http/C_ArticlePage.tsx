import React, { useEffect, useState } from "react";
import C_ArticleList from "./C_ArticleList";
import C_ArticleDetail from "./C_ArticleDetail";
import C_ArticleForm from "./C_ArticleForm";
import {
  getAllArticles,
  type ArticleListResponse,
  type ArticleListResponseList,
} from "@/apis/articleApi";

function C_ArticlePage() {
  // 게시글 목록
  const [articles, setArticles] = useState<ArticleListResponseList>([]);
  // 현재 사용자가 선택한 게시글의 ID
  const [selectedId, setSelectedId] = useState<number | null>(null);
  // 로딩 여부 관리
  const [loading, setLoading] = useState<boolean>(false);

  // 게시글 목록 가져오기 함수
  const fetchArticles = async () => {
    try {
      setLoading(true);
      const data = await getAllArticles();
      setArticles(data);
    } catch (e) {
      console.error("게시글 목록 불러오기 실패: ", e);
    } finally {
      setLoading(false);
    }
  };

  //! 초기목록 로드
  useEffect(() => {
    fetchArticles();
  }, []);

  //! 이벤트 핸들러
  // 게시글 추가 시 (ArticleForm 콜백)
  const handleArticleCreated = async (newArticle: ArticleListResponse) => {
    setArticles((prev) => [newArticle, ...prev]);
  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <div style={{ width: "30%" }}>
        {loading ? (
          <p>로딩중...</p>
        ) : (
          <C_ArticleList articles={articles} onSelect={setSelectedId} />
        )}
      </div>
      <div style={{ width: "40%" }}>
        {selectedId ? (
          <C_ArticleDetail articleId={selectedId} />
        ) : (
          <p>게시글을 선택해 주세요</p>
        )}
      </div>
      <div style={{ width: "30%" }}>
        <C_ArticleForm onSuccess={handleArticleCreated} />
      </div>
    </div>
  );
}

export default C_ArticlePage;
