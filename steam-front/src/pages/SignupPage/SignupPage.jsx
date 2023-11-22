import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./style/SignupPage.css";

const SignupPage = () => {
  const countryList = [
    "가나",
    "가봉",
    "가이아나",
    "감비아",
    "과테말라",
    "그레나다",
    "그린란드",
    "그리스",
    "기니",
    "기니비사우",
    "나미비아",
    "나우루",
    "나이지리아",
    "남수단",
    "남아프리카 공화국",
    "네덜란드",
    "네팔",
    "노르웨이",
    "뉴질랜드",
    "니제르",
    "니우에",
    "니카라과",
    "대한민국",
    "덴마크",
    "도미니카 공화국",
    "도미니카 연방",
    "독일",
    "동티모르",
    "라오스",
    "라이베리아",
    "라트비아",
    "러시아",
    "레바논",
    "레소토",
    "루마니아",
    "룩셈부르크",
    "르완다",
    "리비아",
    "리투아니아",
    "리히텐슈타인",
    "마다가스카르",
    "마셜 제도",
    "말라위",
    "말레이시아",
    "말리",
    "멕시코",
    "모나코",
    "모로코",
    "모리셔스",
    "모리타니",
    "모잠비크",
    "몬테네그로",
    "몰도바",
    "몰디브",
    "몰타",
    "몽골",
    "미국",
    "미얀마",
    "미크로네시아 연방",
    "바누아투",
    "바레인",
    "바베이도스",
    "바티칸 시국",
    "바하마",
    "방글라데시",
    "베냉",
    "베네수엘라",
    "베트남",
    "벨기에",
    "벨라루스",
    "벨리즈",
    "보스니아 헤르체고비나",
    "보츠와나",
    "볼리비아",
    "부룬디",
    "부르키나파소",
    "부탄",
    "북마케도니아",
    "불가리아",
    "브라질",
    "브루나이",
    "사모아",
    "사우디아라비아",
    "사하라 아랍 민주 공화국",
    "산마리노",
    "상투메 프린시페",
    "세네갈",
    "세르비아",
    "세이셸",
    "세인트루시아",
    "세인트빈센트 그레나딘",
    "세인트키츠 네비스",
    "소말리아",
    "솔로몬 제도",
    "수단",
    "수리남",
    "스리랑카",
    "스웨덴",
    "스위스",
    "스페인",
    "슬로바키아",
    "슬로베니아",
    "시리아",
    "시에라리온",
    "신가포르",
    "아랍에미리트",
    "아르메니아",
    "아르헨티나",
    "아이슬란드",
    "아이티",
    "아일랜드",
    "아제르바이잔",
    "아프가니스탄",
    "안도라",
    "알바니아",
    "알제리",
    "앙골라",
    "에리트레아",
    "에스와티니",
    "에스토니아",
    "에콰도르",
    "에티오피아",
    "엘살바도르",
    "영국",
    "예멘",
    "오만",
    "오스트레일리아",
    "오스트리아",
    "온두라스",
    "요르단",
    "우간다",
    "우루과이",
    "우즈베키스탄",
    "우크라이나",
    "이라크",
    "이란",
    "이스라엘",
    "이집트",
    "이탈리아",
    "인도",
    "인도네시아",
    "일본",
    "자메이카",
    "잠비아",
    "적도 기니",
    "조선민주주의인민공화국",
    "조지아",
    "중앙아프리카 공화국",
    "중화 민국",
    "중화인민공화국",
    "지부티",
    "짐바브웨",
    "차드",
    "체코",
    "칠레",
    "카메룬",
    "카보베르데",
    "카자흐스탄",
    "카타르",
    "캄보디아",
    "캐나다",
    "케냐",
    "코모로",
    "코소보",
    "코스타리카",
    "코트디부아르",
    "콜롬비아",
    "콩고 공화국",
    "콩고 민주 공화국",
    "쿠바",
    "쿠웨이트",
    "크로아티아",
    "키르기스스탄",
    "키리바시",
    "키프로스",
    "타지키스탄",
    "탄자니아",
    "태국",
    "튀르키예",
    "토고",
    "통가",
    "투르크메니스탄",
    "투발루",
    "튀니지",
    "트리니다드 토바고",
    "파나마",
    "파라과이",
    "파키스탄",
    "파푸아뉴기니",
    "팔라우",
    "팔레스타인",
    "페루",
    "포르투갈",
    "폴란드",
    "프랑스",
    "피지",
    "핀란드",
    "필리핀",
    "헝가리",
  ];
  const formData = {
    email: "",
    emailConfirm: "",
    residenceCountry: "",
  };

  return (
    <div className="SignupPage">
      <Header />
      <div className="SignupPage-Container">
        <div className="SignupPage-Space">
          <div className="AA">
            {/* <div className="SignupPage-Error">오류 문구 입니다.</div> */}
            <div className="SignupPage-Form">
              <form>
                <div className="SignupPage-Form-Title">계정 만들기</div>
                <div className="SignupPage-Form-Input">
                  <label for="email">이메일 주소</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="SignupPage-Form-Input">
                  <label htmlFor="emailConfirm">이메일 주소 확인</label>
                  <input
                    type="email"
                    id="emailConfirm"
                    name="emailConfirm"
                    required
                  />
                </div>
                <div className="SignupPage-Form-Input">
                  <label htmlFor="residenceCountry">거주 국가</label>
                  <select id="residenceCountry" name="residenceCountry">
                    {countryList.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="SignupPage-Form-Check">
                  <input type="checkbox" name="agree" value="agree" />
                  본인은 만 13세 이상이며 <a>Steam 이용 약관</a> 및
                  <a>Valve 개인정보 보호정책</a>에 동의합니다.
                </div>
                <button id="continueButton" type="submit">
                  계속
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;
