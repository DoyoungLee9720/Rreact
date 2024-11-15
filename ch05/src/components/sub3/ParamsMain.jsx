import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Result1 from "./Result1";
import Result2 from "./Result2";
import Result3 from "./Result3";

const ParamsMain = () => {
  const [formData, setFormData] = useState({ name: "", email: "", age: 0 });
  const navigate = useNavigate(); // 수동으로 라우팅 처리를 위한 훅

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit1Handler = () => {
    const queryString = `name=${formData.name}&email=${formData.email}&age=${formData.age}`;

    // result1 라우팅 요청
    navigate(`/result1?${queryString}`);
  };

  const submit2Handler = () => {
    const params = `${formData.name}/${formData.email}/${formData.age}`;

    // result2 라우팅 요청
    navigate(`/result2/${params}`);
  };
  const submit3Handler = () => {
    // result3 라우팅 요청
    navigate(`/result3/`,{state: {formData}});
  };

  //prettier-ignore
  return (
    <div className="ParamsMain">
      <h4>라우터 데이터 전송</h4>

      <form>
        <input type="text" name="name" value={formData.name} onChange={changeHandler} />
        <br />
        <input type="text" name="email" value={formData.email} onChange={changeHandler}/>
        <br />
        <input type="number" name="age" value={formData.age} onChange={changeHandler} />
        <br />
        <input type="button" value="쿼리 스트링 전송" onClick={submit1Handler} />
        <br />
        <input type="button" value="주소 파라미터 전송" onClick={submit2Handler} />
        <br />
        <input type="button" value="state 전송" onClick={submit3Handler} />
        <br />
      </form>


        <Routes>
            <Route path="/result1" element={<Result1/>}/>
            <Route path="/result2/:name/:email/:age" element={<Result2/>}/>
            <Route path="/result3" element={<Result3/>}/>
        </Routes>

    </div>
  );
};

export default ParamsMain;
