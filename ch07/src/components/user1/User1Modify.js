import axios from "axios";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect  } from "react";
export default function User1Modify() {
  const navigate = useNavigate();
  //현재 경로 정보를 제공하는 훅
  const locatoin = useLocation();

  //쿼리 스트림 정보를 제공하는 훅
  const [searchParams] = useSearchParams();

  const [user, setUser] = useState({
    uid: "",
    name: "",
    birth: "",
    hp: "",
    age: 0,
  });

  const uid = searchParams.get("uid");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/ch09/user1/${uid}`)
      .then((response) => {
        console.log(response.data);
        //수신
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return (err) => {
      console.log(err);
    };
  }, []);
  const changeHandler = (e) => {
    e.preventDefault();
    //상태 업데이트
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // 수정하기 핸들러
  const submitHandler = (e) => {
    e.preventDefault();
    axios
    .put(`http://localhost:8080/ch09/user1`,user)
    .then((response) =>{
      console.log(response.data);
      //수정 완료 후 목록 전환
      navigate("/user1/list");
    })
    .catch((err)=>{
      console.log(err);
    });
  };
  return (
    <div className="User1Modify">
      <span>User1 수정</span>
      <form onSubmit={submitHandler}>
        <table border={1}>
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" name="uid" value={user.uid} readOnly />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input type="text" name="name" value={user.name} onChange={changeHandler}/>
            </td>
          </tr>
          <tr>
            <td>생년월일</td>
            <td>
              <input type="date" name="birth" value={user.birth} onChange={changeHandler}/>
            </td>
          </tr>
          <tr>
            <td>휴대폰</td>
            <td>
              <input type="text" name="hp" value={user.hp} onChange={changeHandler}/>
            </td>
          </tr>
          <tr>
            <td>나이</td>
            <td>
              <input type="number" name="age" value={user.age} onChange={changeHandler}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2} align="right">
              <input type="submit" value={"수정하기"} />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
