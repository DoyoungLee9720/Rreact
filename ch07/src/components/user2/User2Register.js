import { useState } from "react";
import axios from "axios";
export default function User2Register() {
    const [user, setUser] = useState({
      uid: "",
      name: "",
      birth: "",
      addr: "",
      age: 0,
      hp: "",
    });

    const changeHandler =(e)=>{
        e.preventDefault();
        //상태 업데이트
        setUser({...user,[e.target.name]:e.target.value});
    };

    const submitHandler = () => {
        // Javascript 기본 fetch 함수로 데이터(상태) 전송
        axios.post("http://localhost:8080/ch09/user2",user)
        .then((response)=>{
          console.log(response.data);
        })
        .catch((err)=>{
          console.log(err);
        });
    };

  return (
    <div className="User2Register">
      <span>User2등록</span>
      <form onSubmit={submitHandler}>
        <table border={1}>
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                name="uid"
                value={user.uid}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>생년월일</td>
            <td>
              <input
                type="date"
                name="birth"
                value={user.birth}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              <input
                type="text"
                name="addr"
                value={user.addr}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>나이</td>
            <td>
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={changeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>휴대폰</td>
            <td>
              <input
                type="text"
                name="hp"
                value={user.hp}
                onChange={changeHandler}
              />
            </td>
          </tr>

          <tr>
            <td colSpan={2} align="right">
              <input type="submit" value={"등록하기"} />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
