/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Plus, Trash2, Filter, Search, AlertTriangle, ExternalLink } from 'lucide-react';

const AcademicJournalCalendar = () => {
  const [journals, setJournals] = useState([
    { id: 1, name: "국어국문학", field: "국문학", language: "한국어", publisher: "국어국문학회", frequency: "연4회", deadlines: ["01-31", "04-30", "07-31", "10-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://korlanlit.or.kr/", submissionWebsite: "https://korlanlit.jams.or.kr/", notes: "연4회 (한국어)" },
    { id: 2, name: "한국문학과 예술", field: "국문학", language: "한국어", publisher: "한국문학과예술연구소", frequency: "연4회", deadlines: ["02-10", "05-10", "08-10", "11-10"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://www.ikla.kr/", submissionWebsite: "https://ktla.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 3, name: "대중서사연구", field: "인문학", language: "한국어", publisher: "대중서사학회", frequency: "연3회", deadlines: ["04-30", "08-31", "12-31"], issueNumbers: ["1호", "2호", "3호"], website: "", submissionWebsite: "https://daejung.jams.or.kr/", notes: "연3회 (한국어)" },
    { id: 4, name: "리터러시 연구", field: "인문학", language: "한국어", publisher: "한국 리터러시 학회", frequency: "연6회", deadlines: ["01-20", "03-20", "05-20", "07-20", "09-20", "11-20"], issueNumbers: ["1호", "2호", "3호", "4호", "5호", "6호"], website: "http://www.kcccc.net/index.ink", submissionWebsite: "https://kcccc.jams.or.kr/co/main/jmMain.kci", notes: "연6회 (한국어)" },
    { id: 5, name: "한국극예술연구", field: "인문학", language: "한국어", publisher: "한국극예술학회", frequency: "연3회", deadlines: ["02-28", "06-30", "10-31"], issueNumbers: ["1호", "2호", "3호"], website: "", submissionWebsite: "https://kdrama.jams.or.kr/", notes: "연3회 (한국어)" },
    { id: 6, name: "비교한국학", field: "인문학", language: "한국어", publisher: "국제비교한국학회", frequency: "연3회", deadlines: ["02-28", "06-30", "10-31"], issueNumbers: ["1호", "2호", "3호"], website: "http://www.iacks.org/", submissionWebsite: "https://iacks.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 7, name: "도시인문학연구", field: "인문학", language: "한국어", publisher: "도시인문학연구소", frequency: "연2회", deadlines: ["03-15", "09-15"], issueNumbers: ["상반기호", "하반기호"], website: "https://ihuos.uos.ac.kr/", submissionWebsite: "https://iuh.jams.or.kr/co/main/jmMain.kci", notes: "연2회 (한국어)" },
    { id: 8, name: "석당논총", field: "인문학", language: "한국어", publisher: "석당학술원", frequency: "연3회", deadlines: ["01-31", "05-31", "09-30"], issueNumbers: ["1호", "2호", "3호"], website: "", submissionWebsite: "https://seokdang.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 9, name: "한국문화", field: "인문학", language: "한국어", publisher: "규장각한국학연구원", frequency: "연4회", deadlines: ["01-31", "04-30", "07-31", "10-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://kyu.snu.ac.kr/", submissionWebsite: "https://kyujanggak.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 10, name: "인문과학연구", field: "인문학", language: "한국어", publisher: "강원대 인문과학연구소", frequency: "연4회", deadlines: ["02-10", "05-10", "08-10", "11-10"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://knuinmun.or.kr/", submissionWebsite: "https://knuinmun.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 11, name: "서강인문논총", field: "인문학", language: "한국어", publisher: "서강대 인문과학연구소", frequency: "연3회", deadlines: ["02-28", "06-30", "08-30"], issueNumbers: ["1호", "2호", "3호"], website: "https://human.sogang.ac.kr/human/index.html", submissionWebsite: "https://sghuman.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 12, name: "인문과학연구", field: "인문학", language: "한국어", publisher: "대구가톨릭대 인문과학연구소", frequency: "연3회", deadlines: ["01-31", "05-31", "09-30"], issueNumbers: ["1호", "2호", "3호"], website: "https://www.cuhsi.ac.kr/index.asp", submissionWebsite: "https://www.cuhsi.ac.kr/index.asp", notes: "연3회 (한국어)" },
    { id: 13, name: "인문과학연구", field: "인문학", language: "한국어", publisher: "덕성여대 인문과학연구소", frequency: "연2회", deadlines: ["05-30", "11-30"], issueNumbers: ["상반기호", "하반기호"], website: "https://duksunginmun.org/", submissionWebsite: "https://duksunginmun.org/", notes: "연2회 (한국어)" },
    { id: 14, name: "인문과학연구", field: "인문학", language: "한국어", publisher: "성신여대 인문과학연구소", frequency: "연2회", deadlines: ["01-15", "07-15"], issueNumbers: ["상반기호", "하반기호"], website: "https://www.sungshin.ac.kr/human/index..do", submissionWebsite: "https://sswuhri.jams.or.kr/co/main/jmMain.kci", notes: "연2회 (한국어)" },
    { id: 15, name: "인문과학연구논총", field: "인문학", language: "한국어", publisher: "명지대 인문과학연구소", frequency: "연4회", deadlines: ["03-28", "06-27", "09-27", "12-28"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://www.mju.ac.kr/mjukr/451/subview.do", submissionWebsite: "https://hm.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 16, name: "인문논총", field: "인문학", language: "한국어", publisher: "경남대 인문과학연구소", frequency: "연3회", deadlines: ["04-30", "08-31", "12-31"], issueNumbers: ["1호", "2호", "3호"], website: "https://www.kyungnam.ac.kr/human/index.do", submissionWebsite: "https://ifhs.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 17, name: "인문연구", field: "인문학", language: "한국어", publisher: "영남대 인문과학연구소", frequency: "연4회", deadlines: ["01-31", "04-30", "07-31", "10-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://www.yu.ac.kr/human/index.do", submissionWebsite: "https://yuhumanities.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 18, name: "인문학연구", field: "인문학", language: "한국어", publisher: "제주대 인문과학연구소", frequency: "연2회", deadlines: ["05-30", "11-30"], issueNumbers: ["상반기호", "하반기호"], website: "http://humanism.jejunu.ac.kr/", submissionWebsite: "https://humanism-jejunu.jams.or.kr/", notes: "연2회 (한국어)" },
    { id: 19, name: "인문학연구", field: "인문학", language: "한국어", publisher: "충남대 인문과학연구소", frequency: "연4회", deadlines: ["01-31", "04-30", "07-31", "10-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://humres-cnu.ac.kr/", submissionWebsite: "https://humres-cnu.jams.or.kr/", notes: "연4회 (한국어)" },
    { id: 20, name: "인문사회과학연구", field: "인문학", language: "한국어", publisher: "국립부경대 인문사회과학연구소", frequency: "연4회", deadlines: ["01-05", "04-05", "07-05", "10-05"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://icms.pknu.ac.kr/ihss", submissionWebsite: "https://ihss.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 21, name: "인문과 예술", field: "인문학", language: "한국어", publisher: "인문예술학회", frequency: "연2회", deadlines: ["05-15", "11-15"], issueNumbers: ["상반기호", "하반기호"], website: "", submissionWebsite: "https://ssp21.jams.or.kr/", notes: "연2회 (한국어)" },
    { id: 22, name: "동서인문", field: "인문학", language: "한국어", publisher: "경북대 인문학술원", frequency: "연3회", deadlines: ["03-10", "07-10", "11-10"], issueNumbers: ["1호", "2호", "3호"], website: "https://iohs.knu.ac.kr/", submissionWebsite: "https://iohs.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 23, name: "건지인문학", field: "인문학", language: "한국어", publisher: "전북대 인문학연구소", frequency: "연3회", deadlines: ["04-30", "08-31", "12-31"], issueNumbers: ["1호", "2호", "3호"], website: "https://humins.jbnu.ac.kr/sites/humins/index.do", submissionWebsite: "https://humins.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 24, name: "순천향 인문과학논총", field: "인문학", language: "한국어", publisher: "순천향대 인문학연구소", frequency: "연4회", deadlines: ["01-31", "04-30", "07-31", "10-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "", submissionWebsite: "https://humanities.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 25, name: "열린정신 인문학 연구", field: "인문학", language: "한국어", publisher: "원광대 인문학연구소", frequency: "연3회", deadlines: ["02-28", "08-31", "12-31"], issueNumbers: ["1호", "2호", "3호"], website: "https://hmty.wku.ac.kr/", submissionWebsite: "https://wku.jams.or.kr/", notes: "연3회 (한국어)" },
    { id: 26, name: "용봉인문논총", field: "인문학", language: "한국어", publisher: "전남대 인문학연구소", frequency: "연2회", deadlines: ["02-28", "08-31"], issueNumbers: ["상반기호", "하반기호"], website: "https://ioh.jnuac.kr/", submissionWebsite: "https://ioh.jnuac.kr/bbs/login.php", notes: "연2회 (한국어)" },
    { id: 27, name: "인문학연구", field: "인문학", language: "한국어", publisher: "인천대 인문학연구소", frequency: "연2회", deadlines: ["04-30", "10-31"], issueNumbers: ["상반기호", "하반기호"], website: "http://www.uihuman.ac.kr", submissionWebsite: "https://www.uihuman.ac.kr/journal/", notes: "연2회 (한국어)" },
    { id: 28, name: "시민인문학", field: "인문학", language: "한국어", publisher: "경기대 인문학연구소", frequency: "연2회", deadlines: ["06-30", "12-31"], issueNumbers: ["상반기호", "하반기호"], website: "https://www.kguhumanities.or.kr", submissionWebsite: "http://submission.kguhumanities.or.kr", notes: "연2회 (한국어)" },
    { id: 29, name: "가족과 커뮤니티", field: "인문학", language: "한국어", publisher: "전남대 인문학연구원", frequency: "연2회", deadlines: ["05-31", "11-30"], issueNumbers: ["상반기호", "하반기호"], website: "http://www.jnuinmun.org/index.cs", submissionWebsite: "", notes: "연2회 (한국어)" },
    { id: 30, name: "인문과학", field: "인문학", language: "한국어", publisher: "연세대 인문학연구원", frequency: "연3회", deadlines: ["02-28", "06-30", "10-31"], issueNumbers: ["1호", "2호", "3호"], website: "https://inmun.yonsei.ac.kr/ysinmun/index.do", submissionWebsite: "https://ysinmun.jams.or.kr", notes: "연3회 (한국어)" },
    { id: 31, name: "인문과학", field: "인문학", language: "한국어", publisher: "성균관대 인문학연구원", frequency: "연4회", deadlines: ["03-31", "06-30", "09-30", "12-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://inmun.jams.or.kr/", submissionWebsite: "https://inmun.jams.or.kr/", notes: "연4회 (한국어)" },
    { id: 32, name: "인문논총", field: "인문학", language: "한국어", publisher: "서울대 인문학연구원", frequency: "연4회", deadlines: ["03-31", "06-30", "09-30", "12-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://ih.snu.ac.kr/", submissionWebsite: "https://snu-ioh.jams.or.kr", notes: "연4회 (한국어)" },
    { id: 33, name: "탈경계인문학", field: "인문학", language: "한국어", publisher: "이화인문과학원", frequency: "연2회", deadlines: ["02-28", "08-31"], issueNumbers: ["상반기호", "하반기호"], website: "https://eih.ewha.ac.kr/", submissionWebsite: "https://eih.jams.or.kr/", notes: "연2회 (한국어)" },
    { id: 34, name: "인문학연구", field: "인문학", language: "한국어", publisher: "경희대 인문학연구원", frequency: "연4회", deadlines: ["03-31", "06-30", "09-30", "12-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://ihuman.khu.ac.kr/", submissionWebsite: "http://ihuman.khu.ac.kr/treatise/list.asp", notes: "연4회 (한국어)" },
    { id: 35, name: "인문학연구", field: "인문학", language: "한국어", publisher: "조선대 인문학연구원", frequency: "연2회", deadlines: ["06-30", "12-31"], issueNumbers: ["상반기호", "하반기호"], website: "https://www.chosun.ac.kr/user/indexMain.do?siteId=ih", submissionWebsite: "https://ihcu.jams.or.kr/", notes: "연2회 (한국어)" },
    { id: 36, name: "통일인문학", field: "인문학", language: "한국어", publisher: "건국대 인문학연구원", frequency: "연4회", deadlines: ["02-20", "05-20", "08-20", "11-20"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://tongil.konkuk.ac.kr/", submissionWebsite: "https://www.dbpiaone.com/kuhri/index.do", notes: "연4회 (한국어)" },
    { id: 37, name: "재외한인연구", field: "인문학", language: "한국어", publisher: "재외한인학회", frequency: "연4회", deadlines: ["01-25", "04-25", "07-25", "10-25"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://homepy.korean.net/~aska/www/", submissionWebsite: "https://koreanabroad.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 38, name: "국학연구", field: "인문학", language: "한국어", publisher: "한국국학진흥원", frequency: "연3회", deadlines: ["01-10", "05-10", "09-10"], issueNumbers: ["1호", "2호", "3호"], website: "https://www.koreastudy.or.kr/", submissionWebsite: "https://koreastudy.jams.or.kr/", notes: "연3회 (한국어)" },
    { id: 39, name: "문학과 종교", field: "인문학", language: "한국어", publisher: "한국문학과종교학회", frequency: "연4회", deadlines: ["01-31", "04-30", "07-31", "10-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://liteligion.kr/", submissionWebsite: "https://liteligion.jams.or.kr/", notes: "연4회 (한국어)" },
    { id: 40, name: "로컬리티 인문학", field: "인문학", language: "한국어", publisher: "부산대 한국민족문화연구소", frequency: "연2회", deadlines: ["03-05", "09-05"], issueNumbers: ["상반기호", "하반기호"], website: "https://pncc.pusan.ac.kr/pncc/index.do", submissionWebsite: "https://ksi.jams.or.kr/co/main/jmMain.kci", notes: "연2회 (한국어)" },
    { id: 41, name: "한국민족문화", field: "인문학", language: "한국어", publisher: "부산대 한국민족문화연구소", frequency: "연3회", deadlines: ["02-10", "06-10", "10-10"], issueNumbers: ["1호", "2호", "3호"], website: "https://pncc.pusan.ac.kr/pncc/index.do", submissionWebsite: "https://ksi.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 42, name: "비교문학", field: "문학", language: "한국어", publisher: "한국비교문학회", frequency: "연3회", deadlines: ["01-10", "05-10", "09-10"], issueNumbers: ["1호", "2호", "3호"], website: "http://www.kcla.org/", submissionWebsite: "https://kcomplit.jams.or.kr/paperSimilarity/loginCopyKiller.jsp", notes: "연3회 (한국어)" },
    { id: 43, name: "한국학연구", field: "인문학", language: "한국어", publisher: "인하대 한국학연구소", frequency: "연4회", deadlines: ["01-10", "04-10", "07-10", "10-10"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://korea.inha.ac.kr/inhakorea/index.do", submissionWebsite: "https://inhakoreanology.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 44, name: "한국학연구", field: "인문학", language: "한국어", publisher: "고려대 한국학연구소", frequency: "연4회", deadlines: ["01-31", "04-30", "07-31", "10-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://sejong.korea.ac.kr/mbshome/mbs/korstudy/index.do", submissionWebsite: "https://ckkkorstudy.jams.or.kr/", notes: "연4회 (한국어)" },
    { id: 45, name: "한국학논집", field: "인문학", language: "한국어", publisher: "계명대 한국학연구원", frequency: "연4회", deadlines: ["01-30", "04-30", "07-30", "10-30"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://newcms.kmu.ac.kr/actakoreana/1745/subview.do", submissionWebsite: "https://actakoreana.jams.or.kr/", notes: "연4회 (한국어)" },
    { id: 46, name: "문학과 영상", field: "문학", language: "한국어", publisher: "문학과영상학회", frequency: "연3회", deadlines: ["03-15", "08-15", "11-15"], issueNumbers: ["1호", "2호", "3호"], website: "https://www.kalf.kr/", submissionWebsite: "http://kalf.jams.or.kr", notes: "연3회 (한국어)" },
    { id: 47, name: "문학과환경", field: "문학", language: "한국어", publisher: "문학과환경학회", frequency: "연4회", deadlines: ["02-28", "05-31", "08-31", "11-30"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "", submissionWebsite: "https://asle.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 48, name: "비교문화연구", field: "문학", language: "한국어", publisher: "경희대 비교문화연구소", frequency: "연4회", deadlines: ["01-10", "05-10", "09-10", "09-30"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://ccs.khu.ac.kr/", submissionWebsite: "https://ccs.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 49, name: "세계문학비교연구", field: "문학", language: "한국어", publisher: "세계문학비교학회", frequency: "연4회", deadlines: ["02-15", "05-15", "08-15", "11-15"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://www.cowol.net/", submissionWebsite: "https://cowol.jams.or.kr/paperSimilarity/loginCopyKiller.jsp", notes: "연4회 (한국어)" },
    { id: 50, name: "한국문예창작", field: "문학", language: "한국어", publisher: "한국문예창작학회", frequency: "연3회", deadlines: ["02-28", "06-30", "10-31"], issueNumbers: ["1호", "2호", "3호"], website: "http://www.koli.info/", submissionWebsite: "https://koli.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 51, name: "현대문학이론연구", field: "문학", language: "한국어", publisher: "현대문학이론학회", frequency: "연4회", deadlines: ["02-10", "05-10", "08-10", "11-10"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "", submissionWebsite: "https://litheory.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 52, name: "인문학술", field: "인문학", language: "한국어", publisher: "국립순천대 인문학술원", frequency: "연2회", deadlines: ["03-31", "09-30"], issueNumbers: ["상반기호", "하반기호"], website: "http://inmunscnu.org/web/", submissionWebsite: "https://inmunscnu.jams.or.kr/co/com/EgovMenu.kci", notes: "연2회 (한국어)" },
    { id: 53, name: "겨레어문학", field: "국문학", language: "한국어", publisher: "겨레어문학회", frequency: "연2회", deadlines: ["04-30", "10-31"], issueNumbers: ["상반기호", "하반기호"], website: "http://www.knll.net/", submissionWebsite: "https://knll.jams.or.kr/co/main/jmMain.kci", notes: "연2회 (한국어)" },
    { id: 54, name: "구보학보", field: "국문학", language: "한국어", publisher: "구보학회", frequency: "연3회", deadlines: ["02-28", "06-30", "10-30"], issueNumbers: ["1호", "2호", "3호"], website: "http://www.gubo.re.kr/", submissionWebsite: "https://gubo.jams.or.kr/", notes: "연3회 (한국어)" },
    { id: 55, name: "국어문학", field: "국문학", language: "한국어", publisher: "국어문학회", frequency: "연3회", deadlines: ["01-30", "05-30", "09-30"], issueNumbers: ["1호", "2호", "3호"], website: "", submissionWebsite: "https://kolali.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 56, name: "국제어문", field: "국문학", language: "한국어", publisher: "국제어문학회", frequency: "연4회", deadlines: ["02-10", "05-10", "08-10", "11-10"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://www.iall.or.kr/", submissionWebsite: "https://iall.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 57, name: "사이間SAI", field: "국문학", language: "한국어", publisher: "국제한국학문화학회", frequency: "연2회", deadlines: ["03-31", "09-30"], issueNumbers: ["상반기호", "하반기호"], website: "", submissionWebsite: "https://koreanst.jams.or.kr/", notes: "연2회 (한국어)" },
    { id: 58, name: "국제한인문학연구", field: "국문학", language: "한국어", publisher: "국제한인문학회", frequency: "연3회", deadlines: ["02-28", "06-30", "10-31"], issueNumbers: ["1호", "2호", "3호"], website: "https://lit-diaspora.org/notice/view.php?idx=216", submissionWebsite: "https://kr-diaspora.jams.or.kr/", notes: "연3회 (한국어)" },
    { id: 59, name: "돈암어문학", field: "국문학", language: "한국어", publisher: "돈암어문학회", frequency: "연2회", deadlines: ["04-30", "10-31"], issueNumbers: ["상반기호", "하반기호"], website: "", submissionWebsite: "https://donam.jams.or.kr/", notes: "연2회 (한국어)" },
    { id: 60, name: "동남어문논집", field: "국문학", language: "한국어", publisher: "동남어문학회", frequency: "연2회", deadlines: ["05-31", "11-30"], issueNumbers: ["상반기호", "하반기호"], website: "", submissionWebsite: "https://dakll.jams.or.kr/", notes: "연2회 (한국어)" },
    { id: 61, name: "동악어문학", field: "국문학", language: "한국어", publisher: "동악어문학회", frequency: "연3회", deadlines: ["04-30", "08-31", "12-31"], issueNumbers: ["1호", "2호", "3호"], website: "https://dongak1964.kr/", submissionWebsite: "http://dongak.jams.or.kr", notes: "연3회 (한국어)" },
    { id: 62, name: "민족문학사연구", field: "국문학", language: "한국어", publisher: "민족문학사연구소", frequency: "연3회", deadlines: ["02-28", "06-30", "10-31"], issueNumbers: ["1호", "2호", "3호"], website: "https://www.minmunhak.com/", submissionWebsite: "", notes: "연3회 (한국어)" },
    { id: 63, name: "어문논집", field: "국문학", language: "한국어", publisher: "민족어문학회", frequency: "연3회", deadlines: ["02-28", "06-30", "10-31"], issueNumbers: ["1호", "2호", "3호"], website: "", submissionWebsite: "https://kll.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 64, name: "반교어문연구", field: "국문학", language: "한국어", publisher: "반교어문학회", frequency: "연3회", deadlines: ["02-28", "06-30", "10-31"], issueNumbers: ["1호", "2호", "3호"], website: "http://bangyo.or.kr/", submissionWebsite: "https://bangyo.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 65, name: "배달말", field: "국문학", language: "한국어", publisher: "배달말학회", frequency: "연2회", deadlines: ["04-30", "10-31"], issueNumbers: ["상반기호", "하반기호"], website: "", submissionWebsite: "https://baedalmal.jams.or.kr/co/main/jmMain.kci", notes: "연2회 (한국어)" },
    { id: 66, name: "상허학보", field: "국문학", language: "한국어", publisher: "상허학회", frequency: "연3회", deadlines: ["04-15", "08-15", "12-15"], issueNumbers: ["1호", "2호", "3호"], website: "https://www.sanghur.net/", submissionWebsite: "https://sanghur.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 67, name: "어문연구", field: "국문학", language: "한국어", publisher: "어문연구학회", frequency: "연4회", deadlines: ["01-31", "04-30", "07-31", "10-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://www.eomun.or.kr/index.ink", submissionWebsite: "https://eomun.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 68, name: "영주어문", field: "국문학", language: "한국어", publisher: "영주어문학회", frequency: "연3회", deadlines: ["01-15", "05-15", "09-15"], issueNumbers: ["1호", "2호", "3호"], website: "", submissionWebsite: "https://yeongju.jams.or.kr/", notes: "연3회 (한국어)" },
    { id: 69, name: "우리말글", field: "국문학", language: "한국어", publisher: "우리말글학회", frequency: "연4회", deadlines: ["02-15", "05-15", "08-15", "11-15"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://urimalgeul.org/", submissionWebsite: "https://dbpiaone.com/urimalgeul/index.do", notes: "연4회 (한국어)" },
    { id: 70, name: "우리문학연구", field: "국문학", language: "한국어", publisher: "우리문학회", frequency: "연4회", deadlines: ["02-28", "05-31", "08-31", "11-30"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "", submissionWebsite: "https://urilit.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 71, name: "우리어문연구", field: "국문학", language: "한국어", publisher: "우리어문학회", frequency: "연3회", deadlines: ["03-31", "07-31", "11-30"], issueNumbers: ["1호", "2호", "3호"], website: "http://www.wooree.or.kr/", submissionWebsite: "https://wooree.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 72, name: "이상리뷰", field: "국문학", language: "한국어", publisher: "이상문학회", frequency: "연2회", deadlines: ["05-31", "11-30"], issueNumbers: ["상반기호", "하반기호"], website: "", submissionWebsite: "https://yisang.jams.or.kr/co/main/jmMain.kci", notes: "연2회 (한국어)" },
    { id: 73, name: "어문론집", field: "국문학", language: "한국어", publisher: "중앙어문학회", frequency: "연4회", deadlines: ["02-28", "05-31", "08-31", "11-30"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://cakoll.or.kr/", submissionWebsite: "https://cakoll.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 74, name: "춘원연구학보", field: "국문학", language: "한국어", publisher: "춘원연구학회", frequency: "연2회", deadlines: ["04-30", "10-30"], issueNumbers: ["상반기호", "하반기호"], website: "", submissionWebsite: "https://chunwon.jams.or.kr/co/main/jmMain.kci", notes: "연2회 (한국어)" },
    { id: 75, name: "한국근대문학연구", field: "국문학", language: "한국어", publisher: "한국근대문학회", frequency: "연2회", deadlines: ["02-28", "08-31"], issueNumbers: ["상반기호", "하반기호"], website: "", submissionWebsite: "https://korlit.jams.or.kr/co/main/jmMain.kci", notes: "연2회 (한국어)" },
    { id: 76, name: "어문론총", field: "국문학", language: "한국어", publisher: "한국문학언어학회", frequency: "연4회", deadlines: ["02-10", "05-10", "08-10", "11-10"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://kolls.org/", submissionWebsite: "https://eomunlon.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 77, name: "한국문학연구", field: "국문학", language: "한국어", publisher: "동국대 한국문학연구소", frequency: "연3회", deadlines: ["01-31", "05-31", "09-30"], issueNumbers: ["1호", "2호", "3호"], website: "https://koli.dongguk.edu/main", submissionWebsite: "https://dgukoli.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 78, name: "현대문학의 연구", field: "국문학", language: "한국어", publisher: "한국문학연구학회", frequency: "연3회", deadlines: ["01-01", "05-01", "09-01"], issueNumbers: ["1호", "2호", "3호"], website: "", submissionWebsite: "https://literaturelab.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 79, name: "한국문학이론과 비평", field: "국문학", language: "한국어", publisher: "한국문학이론과비평학회", frequency: "연4회", deadlines: ["02-05", "05-05", "08-05", "11-05"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://korliter.or.kr/", submissionWebsite: "https://korliter.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 80, name: "한국문학논총", field: "국문학", language: "한국어", publisher: "한국문학회", frequency: "연3회", deadlines: ["02-28", "06-30", "10-31"], issueNumbers: ["1호", "2호", "3호"], website: "http://www.korlit-so.org/index.php", submissionWebsite: "http://www.korlit-so.org/paper/03_01.php", notes: "연3회 (한국어)" },
    { id: 81, name: "비평문학", field: "국문학", language: "한국어", publisher: "한국비평문학회", frequency: "연4회", deadlines: ["01-31", "04-30", "07-31", "10-30"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "", submissionWebsite: "https://klc.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 82, name: "한국시학연구", field: "국문학", language: "한국어", publisher: "한국시학회", frequency: "연3회", deadlines: ["02-15", "06-15", "10-15"], issueNumbers: ["1호", "2호", "3호"], website: "", submissionWebsite: "https://klc.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 83, name: "어문연구", field: "국문학", language: "한국어", publisher: "한국어문교육연구회", frequency: "연4회", deadlines: ["02-10", "05-10", "08-10", "11-10"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://www.hanja.re.kr/", submissionWebsite: "https://kles.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 84, name: "전남대 어문논총", field: "국문학", language: "한국어", publisher: "전남대 한국어문학연구소", frequency: "연2회", deadlines: ["06-30", "12-31"], issueNumbers: ["상반기호", "하반기호"], website: "https://eomun.jnuac.kr/", submissionWebsite: "https://eomun.jnuac.kr/bbs/login.php", notes: "연2회 (한국어)" },
    { id: 85, name: "어문학", field: "국문학", language: "한국어", publisher: "한국어문학회", frequency: "연4회", deadlines: ["01-31", "04-30", "07-31", "10-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "", submissionWebsite: "https://eomunhak.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 86, name: "한국언어문학", field: "국문학", language: "한국어", publisher: "한국언어문학회", frequency: "연3회", deadlines: ["01-31", "05-30", "09-30"], issueNumbers: ["1호", "2호", "3호"], website: "", submissionWebsite: "https://koreall.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 87, name: "Journal of Korean Culture", field: "국문학", language: "한국어", publisher: "고려대 한국언어문화학술확산연구소", frequency: "연4회", deadlines: ["03-31", "06-30", "09-30", "12-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://icklc.korea.ac.kr/icklc/index.do", submissionWebsite: "https://jkc1.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 88, name: "한국언어문화", field: "국문학", language: "한국어", publisher: "한국언어문화학회", frequency: "연3회", deadlines: ["03-10", "07-10", "11-10"], issueNumbers: ["1호", "2호", "3호"], website: "", submissionWebsite: "https://klnc.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 89, name: "여성문학연구", field: "국문학", language: "한국어", publisher: "한국여성문학학회", frequency: "연3회", deadlines: ["02-28", "06-30", "10-31"], issueNumbers: ["1호", "2호", "3호"], website: "", submissionWebsite: "https://femcrit1998.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 90, name: "한국문예비평연구", field: "국문학", language: "한국어", publisher: "한국현대문예비평학회", frequency: "연4회", deadlines: ["01-30", "04-30", "07-30", "10-30"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://postcriticism.co.kr/xe/", submissionWebsite: "https://postcriticism.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 91, name: "한국현대문학연구", field: "국문학", language: "한국어", publisher: "한국현대문학회", frequency: "연3회", deadlines: ["02-28", "06-30", "10-31"], issueNumbers: ["1호", "2호", "3호"], website: "", submissionWebsite: "https://mkliterature.jams.or.kr/co/main/jmMain.kci", notes: "연3회 (한국어)" },
    { id: 92, name: "현대소설연구", field: "국문학", language: "한국어", publisher: "한국현대소설학회", frequency: "연4회", deadlines: ["02-10", "05-10", "08-10", "11-10"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "", submissionWebsite: "https://novel.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 93, name: "한민족문화연구", field: "국문학", language: "한국어", publisher: "한민족문화학회", frequency: "연4회", deadlines: ["02-15", "05-15", "08-15", "11-15"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://www.koreacs16.or.kr/", submissionWebsite: "https://kcj.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 94, name: "한민족어문학", field: "국문학", language: "한국어", publisher: "한민족어문학회", frequency: "연4회", deadlines: ["01-31", "04-30", "07-31", "10-31"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://www.emunhak.com/", submissionWebsite: "http://www.emunhak.com/sub02_03.html", notes: "연4회 (한국어)" },
    { id: 95, name: "한성어문학", field: "국문학", language: "한국어", publisher: "한성어문학회", frequency: "연3회", deadlines: ["01-15", "05-15", "09-15"], issueNumbers: ["1호", "2호", "3호"], website: "http://www.hansung-eomun.kr/", submissionWebsite: "http://www.hansung-eomun.kr/", notes: "연3회 (한국어)" },
    { id: 96, name: "한중인문학연구", field: "국문학", language: "한국어", publisher: "한중인문학회", frequency: "연4회", deadlines: ["01-30", "04-30", "07-30", "10-30"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://kochih.kr/", submissionWebsite: "http://submission.kochih.kr/Login", notes: "연4회 (한국어)" },
    { id: 97, name: "동서비교문학저널", field: "인문학", language: "한국어", publisher: "한국동서비교문학학회", frequency: "연4회", deadlines: ["02-20", "05-20", "08-20", "11-20"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "https://keastwest.or.kr/", submissionWebsite: "https://ksewcl.jams.or.kr/co/main/jmMain.kci", notes: "연4회 (한국어)" },
    { id: 98, name: "횡단인문학", field: "국문학", language: "한국어", publisher: "숙명여대 인문학연구소", frequency: "연3회", deadlines: ["04-30", "08-31", "12-31"], issueNumbers: ["1호", "2호", "3호"], website: "http://www.srih.kr/main.php", submissionWebsite: "https://kyobo121.medone.co.kr/html/", notes: "연3회 (한국어)" },
    { id: 99, name: "한남어문학", field: "국문학", language: "한국어", publisher: "한남어문학회", frequency: "연4회", deadlines: ["01-20", "05-20", "08-20", "11-20"], issueNumbers: ["1호", "2호", "3호", "4호"], website: "http://hnlal.net/", submissionWebsite: "", notes: "연4회 (한국어)" }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [filterField, setFilterField] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllJournals, setShowAllJournals] = useState(false);
  const [newJournal, setNewJournal] = useState({
    name: '',
    field: '',
    language: '',
    publisher: '',
    frequency: '',
    deadlines: [''],
    issueNumbers: [''],
    website: '',
    submissionWebsite: '',
    notes: ''
  });

  const today = new Date();
  const currentYear = today.getFullYear();

  // 다가오는 마감일 계산
  const getUpcomingDeadlines = () => {
    const upcoming = [] as any[];
    
    journals.forEach(journal => {
      journal.deadlines.forEach((deadline, index) => {
        const [month, day] = deadline.split('-').map(Number);
        let deadlineDate = new Date(currentYear, month - 1, day);
        
        // 이미 지난 날짜면 내년으로
        if (deadlineDate < today) {
          deadlineDate = new Date(currentYear + 1, month - 1, day);
        }
        
        const daysUntil = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        
        upcoming.push({
          journal: journal.name,
          field: journal.field,
          language: journal.language,
          publisher: journal.publisher,
          deadline: deadlineDate,
          issue: journal.issueNumbers[index] || `${index + 1}호`,
          daysUntil,
          website: journal.website,
          submissionWebsite: journal.submissionWebsite,
          notes: journal.notes
        });
      });
    });

    // 정렬: 1차 마감일, 2차 분야 우선순위
    const fieldPriority = {
      '국문학': 1,
      '문학': 2,
      '인문학': 3
    };

    return upcoming.sort((a, b) => {
      // 1차: 마감일 순
      if (a.deadline.getTime() !== b.deadline.getTime()) {
        return a.deadline - b.deadline;
      }
      // 2차: 분야 우선순위
      return ((fieldPriority as any)[a.field] || 999) - ((fieldPriority as any)[b.field] || 999);
    });
  };

  const upcomingDeadlines = getUpcomingDeadlines();

  // 필터링된 마감일
  const filteredDeadlines = upcomingDeadlines.filter(item => {
    const matchesField = filterField === '전체' || item.field === filterField;
    const matchesSearch = item.journal.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesField && matchesSearch;
  });

  // 분야 목록
  const fields = ['전체', ...new Set(journals.map(j => j.field))];

  // 새 학술지 추가
  const addJournal = () => {
    if (newJournal.name && newJournal.field && newJournal.publisher) {
      const journal = {
        id: Date.now(),
        ...newJournal,
        deadlines: newJournal.deadlines.filter(d => d),
        issueNumbers: newJournal.issueNumbers.filter(i => i)
      };
      setJournals([...journals, journal]);
      setNewJournal({
        name: '',
        field: '',
        language: '',
        publisher: '',
        frequency: '',
        deadlines: [''],
        issueNumbers: [''],
        website: '',
        submissionWebsite: '',
        notes: ''
      });
      setShowAddForm(false);
    }
  };

  // 학술지 삭제
  const deleteJournal = (id: number) => {
    setJournals(journals.filter(j => j.id !== id));
  };

  // 마감일 추가 필드
  const addDeadlineField = () => {
    setNewJournal({
      ...newJournal,
      deadlines: [...newJournal.deadlines, ''],
      issueNumbers: [...newJournal.issueNumbers, '']
    });
  };

  // 마감일 필드 제거
  const removeDeadlineField = (index: number) => {
    setNewJournal({
      ...newJournal,
      deadlines: newJournal.deadlines.filter((_, i) => i !== index),
      issueNumbers: newJournal.issueNumbers.filter((_, i) => i !== index)
    });
  };

  // 마감일 색상 결정
  const getDeadlineColor = (daysUntil: number) => {
    if (daysUntil <= 7) return 'text-red-600 bg-red-50 border-red-200';
    if (daysUntil <= 30) return 'text-orange-600 bg-orange-50 border-orange-200';
    if (daysUntil <= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-green-600 bg-green-50 border-green-200';
  };

  // URL 보안 체크
  const hasSecurityWarning = (url) => {
    return url && url.startsWith('http://') && !url.includes('localhost');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calendar className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">학술지 투고 마감일 캘린더 (국문학자용)</h1>
        </div>
        <p className="text-gray-600">한국연구재단 등재 학술지의 투고 마감일을 한눈에 확인하고 계획하세요.</p>
        <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>📚 이 캘린더는 국문학(현대문학) 분야에 최적화되어 있습니다.</strong><br/>
            국문학 학술지를 우선 표시하며, 관련 문학 및 인문학 학술지도 포함합니다.
          </p>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          현재 {journals.length}개 학술지 등록됨 · 국문학 우선 정렬 · KCI 등재/등재후보
        </div>
      </div>

      {/* 검색 및 필터 */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="학술지명 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <Filter className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <select
            value={filterField}
            onChange={(e) => setFilterField(e.target.value)}
            className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {fields.map(field => (
              <option key={field} value={field}>{field}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          학술지 추가
        </button>
      </div>

      {/* 다가오는 마감일 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6" />
          다가오는 마감일
        </h2>
        <div className="grid gap-3">
          {filteredDeadlines.slice(0, 15).map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 ${getDeadlineColor(item.daysUntil)}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.journal} {item.issue}</h3>
                  <p className="text-sm opacity-75">{item.field} · {item.language} · {item.publisher}</p>
                  <p className="font-medium mt-1">
                    마감: {item.deadline.toLocaleDateString('ko-KR')} 
                    <span className="ml-2 text-sm">
                      ({item.daysUntil > 0 ? `${item.daysUntil}일 남음` : '오늘 마감!'})
                    </span>
                  </p>
                  {item.notes && (
                    <p className="text-sm opacity-75 mt-1">{item.notes.replace(/ \(한국어\)/, ' 발간')}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1 ml-4">
                  {item.submissionWebsite && (
                    <a
                      href={item.submissionWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline text-sm font-medium"
                    >
                      <ExternalLink className="w-3 h-3" />
                      투고하기
                    </a>
                  )}
                  {item.website && (
                    <div className="flex items-center gap-1">
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-600 hover:underline text-sm"
                      >
                        <ExternalLink className="w-3 h-3" />
                        홈페이지
                      </a>
                      {hasSecurityWarning(item.website) && (
                        <AlertTriangle className="w-3 h-3 text-amber-500" title="보안 경고: HTTP 사이트" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 연중 투고 가능 학술지 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-emerald-600" />
          연중 투고 가능 학술지
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          📝 <strong>영어 논문 작성 기회!</strong> 마감일에 구애받지 않고 언제든 투고할 수 있는 학술지들입니다.
        </p>
        <div className="grid gap-3">
          <div className="p-4 rounded-lg border-2 text-emerald-600 bg-emerald-50 border-emerald-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Korean Journal of English Language and Literature</h3>
                <p className="text-sm opacity-75">영문학 · 영어 · 한국영어영문학회</p>
                <p className="font-medium mt-1">
                  연중 투고 가능 · 분기별 심사
                </p>
                <p className="text-sm opacity-75 mt-1">연4회 발간</p>
              </div>
              <div className="flex flex-col gap-1 ml-4">
                <a
                  href="https://kjell.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-600 hover:underline text-sm font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  투고하기
                </a>
              </div>
            </div>
          </div>
          
          <div className="p-4 rounded-lg border-2 text-emerald-600 bg-emerald-50 border-emerald-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Journal of Korean Culture</h3>
                <p className="text-sm opacity-75">국문학 · 영어 · 고려대 한국언어문화학술확산연구소</p>
                <p className="font-medium mt-1">
                  연중 투고 가능 · 수시 접수
                </p>
                <p className="text-sm opacity-75 mt-1">연4회 발간</p>
              </div>
              <div className="flex flex-col gap-1 ml-4">
                <a
                  href="https://jkc1.jams.or.kr/co/main/jmMain.kci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-600 hover:underline text-sm font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  투고하기
                </a>
                <a
                  href="https://icklc.korea.ac.kr/icklc/index.do"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 hover:underline text-sm"
                >
                  <ExternalLink className="w-3 h-3" />
                  홈페이지
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg border-2 text-emerald-600 bg-emerald-50 border-emerald-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">International Journal of Korean Humanities and Social Sciences</h3>
                <p className="text-sm opacity-75">인문학 · 영어 · 국제한국인문사회과학회</p>
                <p className="font-medium mt-1">
                  연중 투고 가능 · Rolling Review
                </p>
                <p className="text-sm opacity-75 mt-1">연2회 발간</p>
              </div>
              <div className="flex flex-col gap-1 ml-4">
                <span className="text-emerald-600 text-sm font-medium">수시 투고</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
          <p className="text-sm text-emerald-800">
            💡 <strong>영어 논문 작성 팁:</strong> 연중 투고 가능 학술지는 마감 압박 없이 충분한 시간을 갖고 완성도 높은 논문을 작성할 수 있어요!
          </p>
        </div>
      </div>

      {/* 등록된 학술지 목록 */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">등록된 학술지</h2>
          <button
            onClick={() => setShowAllJournals(!showAllJournals)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {showAllJournals ? '목록 숨기기' : '모두 보기'}
            <div className={`transform transition-transform ${showAllJournals ? 'rotate-180' : ''}`}>
              ▼
            </div>
          </button>
        </div>
        
        {showAllJournals && (
          <div className="grid gap-4 md:grid-cols-2">
            {journals.filter(journal => 
              (filterField === '전체' || journal.field === filterField) &&
              journal.name.toLowerCase().includes(searchTerm.toLowerCase())
            ).map(journal => (
              <div key={journal.id} className="p-4 bg-gray-50 rounded-lg border">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{journal.name}</h3>
                    <p className="text-sm text-gray-600">{journal.field} · {journal.language} · {journal.publisher}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => deleteJournal(journal.id)}
                      className="p-1 text-gray-500 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="space-y-1">
                  {journal.deadlines.map((deadline, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-medium">{journal.issueNumbers[index] || `${index + 1}호`}:</span>
                      <span className="ml-2">{deadline}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  {journal.submissionWebsite && (
                    <a
                      href={journal.submissionWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-xs"
                    >
                      투고시스템
                    </a>
                  )}
                  {journal.website && (
                    <div className="flex items-center gap-1">
                      <a
                        href={journal.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:underline text-xs"
                      >
                        홈페이지
                      </a>
                      {hasSecurityWarning(journal.website) && (
                        <AlertTriangle className="w-3 h-3 text-amber-500" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!showAllJournals && (
          <div className="text-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-500">
              {journals.length}개의 학술지가 등록되어 있습니다. 
              <br />
              <button 
                onClick={() => setShowAllJournals(true)}
                className="text-blue-600 hover:underline font-medium mt-2 inline-block"
              >
                모두 보기
              </button>
              를 클릭하여 전체 목록을 확인하세요.
            </p>
          </div>
        )}
      </div>

      {/* 학술지 추가 폼 */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">새 학술지 추가</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">학술지명 *</label>
                <input
                  type="text"
                  value={newJournal.name}
                  onChange={(e) => setNewJournal({...newJournal, name: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">분야 *</label>
                <select
                  value={newJournal.field}
                  onChange={(e) => setNewJournal({...newJournal, field: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="">선택하세요</option>
                  <option value="국문학">국문학</option>
                  <option value="문학">문학</option>
                  <option value="인문학">인문학</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">언어</label>
                <select
                  value={newJournal.language}
                  onChange={(e) => setNewJournal({...newJournal, language: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="">선택하세요</option>
                  <option value="한국어">한국어</option>
                  <option value="영어">영어</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">발행기관 *</label>
                <input
                  type="text"
                  value={newJournal.publisher}
                  onChange={(e) => setNewJournal({...newJournal, publisher: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="예: 국어국문학회"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">마감일 및 호수</label>
                {newJournal.deadlines.map((deadline, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="MM-DD"
                      value={deadline}
                      onChange={(e) => {
                        const updated = [...newJournal.deadlines];
                        updated[index] = e.target.value;
                        setNewJournal({...newJournal, deadlines: updated});
                      }}
                      className="flex-1 p-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="호수"
                      value={newJournal.issueNumbers[index] || ''}
                      onChange={(e) => {
                        const updated = [...newJournal.issueNumbers];
                        updated[index] = e.target.value;
                        setNewJournal({...newJournal, issueNumbers: updated});
                      }}
                      className="w-20 p-2 border border-gray-300 rounded-lg"
                    />
                    {newJournal.deadlines.length > 1 && (
                      <button
                        onClick={() => removeDeadlineField(index)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={addDeadlineField}
                  className="text-blue-600 hover:underline text-sm"
                >
                  + 마감일 추가
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">투고 웹사이트</label>
                <input
                  type="url"
                  value={newJournal.submissionWebsite}
                  onChange={(e) => setNewJournal({...newJournal, submissionWebsite: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="https://논문투고시스템주소"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">학회 홈페이지</label>
                <input
                  type="url"
                  value={newJournal.website}
                  onChange={(e) => setNewJournal({...newJournal, website: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="https://학회홈페이지주소"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={addJournal}
                className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                추가
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 보안 경고 안내 */}
      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-amber-800">보안 안내</p>
            <p className="text-amber-700 mt-1">
              일부 학회 홈페이지는 보안 인증서 문제로 경고가 표시될 수 있습니다. 
              투고 시스템(JAMS 등)은 안전하니 우선 이용하시고, 
              학회 정보는 한국연구재단 KCI 사이트에서 확인하세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  return <AcademicJournalCalendar />;
}
