import { useSearchParams } from "react-router-dom";

export default function Result1() {
  // 라우팅 데이터 처리를 위한 훅  (쿼리 스트링으로 보낸 정보를 받아야 함)
  const [SearchParams] = useSearchParams();

  // 쿼리 파라미터 수신
  const name = SearchParams.get("name");
  const email = SearchParams.get("email");
  const age = SearchParams.get("age");

  return (
    <div className="Result1">
      <span>Result1</span>
      <p>
        이름 : {name} <br />
        이메일 : {email} <br />
        나이 : {age} <br />
      </p>
    </div>
  );
}
