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
