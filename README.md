# pykl.io static site builder  

gulp.js 기반의 task running으로 pykl.io 사이트를 building 합니다.  




## 환경설정  

전역으로 gulp를 설치합니다.  
> npm install gulp static-i18n -g  

전역으로 gulp 설치가 완료된 뒤 사전 정의된 플러그인을 설치합니다.  
> npm install  



## 실행  
로컬에서 아웃풋을 실행시키기 위한 명령어입니다.  
> gulp local  



## 배포  

gh-pages에 수정된 사항을 배포합니다.  
> gulp deploy  





## Locales  

컨텐츠 내용 수정이 필요할 시 `./src/locales/`의 해당 언어 `json` 파일의 내용을 수정합니다.  



## 알려진 문제점  

`gulp deploy`를 이용해 배포를 진행하면 도메인이 사라지는 문제가 있습니다.  
도메인이 사라지면 당연히 접속도 안되구요. T^T  

<https://github.com/chain-partners/pykl.io/settings>에 접속해서 도메인을 수동으로 한번 더 추가해주어야 합니다.  

