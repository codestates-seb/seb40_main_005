import CertifyPageLayout from "../../client/components/CertifyPageLayout";
import { useForm } from "react-hook-form";

function FindId() {
  const { register, handleSubmit } = useForm();

  interface User {
    id: string;
    password: string;
  }

  return (
    <>
      <CertifyPageLayout>
        <div className="">
          <h2>아이디 찾기</h2>
        </div>
        <form onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            placeholder="E-mail을 입력 후 Enter를 눌러주세요"
            {...register("email")}
          />

          <button type="submit">로그인 페이지로 이동하기</button>
        </form>
      </CertifyPageLayout>
    </>
  );
}

export default FindId;
