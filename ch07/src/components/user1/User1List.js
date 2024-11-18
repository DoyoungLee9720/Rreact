import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//사용자 목록 패치함수
const fetchUsers = async() => {
  const response = await axios.get("http://localhost:8080/ch09/user1");
  return response.data;

};
//사용자 삭제 함수
const deleteuser = async (user) => {
  const response = await axios.delete(`http://localhost:8080/ch09/user1/${user.uid}`);
  return response.data;
};

export default function User1List() {
    const navigate = useNavigate();
    //const [users, setUsers] = useState([]);
    
    //react-query 사용자 훅
    const queryClient = useQueryClient();

    //react-query fetch함수 정의
    const {data : users, isLoading, isError} = useQuery({ 
                                                queryKey: ["users"],
                                                queryFn : fetchUsers,
                                              });
    //react-query 삭제 mutation 함수 정의
    const deleteMutation = useMutation({
      mutationFn : deleteuser,
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
      },
    });

    //컴포넌트 생명주기 제어하는 훅
    // useEffect(() => {
    //     axios.get("http://localhost:8080/ch09/user1")
    //     .then((response) => {
    //         console.log(response.data);
    //         //서버에서 받아온 데이터로 상태 없데이트
    //         setUsers(response.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    //     return ((err) => {
    //         console.log(err);
    //     });
    // }, []); // 의존성(반응형) 배열을 빈배열로 선언하면 컴포넌트가 처음 마운트 될때 한번만 실행
    const modifyMove = (user) => {
        // 쿼리 파라미터 전송
        navigate(`/user1/modify?uid=${user.uid}`);
    }
    const deleteProc = (user) => {
      deleteMutation.mutate(user);
    };
    // const deleteProc = (user) => {
    //     axios.delete(`http://localhost:8080/ch09/user1/${user.uid}`)
    //     .then((response)=>{
    //         console.log(response.data);

    //         //목록 갱신을 위해서 상태 업데이트
    //         setUsers(users.filter((u) => u.uid !== user.uid));
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     });
    // }
  return (
    <div className="User1List">
      <span>User1목록</span>
      <table border={1}>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>생년월일</th>
          <th>나이</th>
          <th>휴대폰</th>
          <th>관리</th>
        </tr>
        {users?.map((user, index) => (
          <tr key={index}>
            <td>{user.uid}</td>
            <td>{user.name}</td>
            <td>{user.birth}</td>
            <td>{user.age}</td>
            <td>{user.hp}</td>
            <td>
              <button onClick={() => modifyMove(user)}>수정</button>
              <button onClick={() => deleteProc(user)}>삭제</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
