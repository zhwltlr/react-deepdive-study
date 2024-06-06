import Link from "next/link";

const teamMembers = [
  { id: 1, name: "김혜린", path: "hyerin" },
  { id: 2, name: "박민형", path: "minhyung" },
  { id: 3, name: "박지영", path: "jiyoung" },
  { id: 4, name: "홍석현", path: "seokhyun" },
];

const weeklyPlans = [
  { week: 1, plan: "01장: 리액트 개발을 위해 꼭 알아야 할 자바스크립트" },
  { week: 2, plan: "02장: 리액트 핵심 요소 깊게 살펴보기" },
  { week: 3, plan: "03장: 리액트 훅 깊게 살펴보기" },
  { week: 4, plan: "04장: 서버 사이드 렌더링" },
  { week: 5, plan: "05장: 리액트와 상태 관리 라이브러리" },
  {
    week: 6,
    plan: "06장: 리액트 개발 도구로 디버깅하기 & 07장: 크롬 개발자 도구를 활용한 애플리케이션 분석",
  },
  { week: 7, plan: "08장: 좋은 리액트 코드 작성을 위한 환경 구축하기" },
  { week: 8, plan: "09장: 모던 리액트 개발 도구로 개발 및 배포 환경 구축하기" },
  { week: 9, plan: "10장: 리액트 17과 18의 변경 사항 살펴보기" },
  { week: 10, plan: "11장: Next.js 13과 리액트 18" },
  { week: 11, plan: "12장: 모든 웹 개발자가 관심을 가져야 할 핵심 웹 지표" },
  { week: 12, plan: "13장: 웹페이지의 성능을 측정하는 다양한 방법" },
  { week: 13, plan: "14장: 웹사이트 보안을 위한 리액트와 웹페이지 보안 이슈" },
  { week: 14, plan: "15장: 마치며" },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">모던 리액트 Deep Dive 스터디</h1>
      <p className="mb-8">
        리액트의 핵심 개념과 동작 원리부터 Next.js까지, 리액트의 모든 것
      </p>
      <h2 className="text-xl font-bold mb-4">주차별 정리</h2>
      <div className="flex mb-4">
        {teamMembers.map((member) => (
          <Link
            href={member.path}
            key={member.id}
            className="mr-4 bg-slate-500 hover:bg-blue-500 text-white font-bold py-4 px-12 rounded"
          >
            {member.name}
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">주차별 계획</h2>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">주차</th>
              <th className="px-4 py-2">계획</th>
            </tr>
          </thead>
          <tbody>
            {weeklyPlans.map((plan) => (
              <tr key={plan.week}>
                <td className="border px-4 py-2 text-center">{plan.week}</td>
                <td className="border px-4 py-2 text-sm">{plan.plan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
