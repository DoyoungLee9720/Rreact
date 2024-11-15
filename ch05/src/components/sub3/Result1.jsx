import { useSearchParams } from "react-router-dom";

export default function Result1() {
  // 쿼리 스트링 라우팅 데이터 처리를 위한 훅
  const [searchParms] = useSearchParams();

  // 쿼리 파라미터 수신
  const name = searchParms.get("name");
  const email = searchParms.get("email");
  const age = searchParms.get("age");

  return (
    <div className="Result1">
      <span>Result1</span>
      <p>
        이름 : {name}
        <br />
        이메일 : {email}
        <br />
        나이 : {age}
        <br />
      </p>
    </div>
  );
}
