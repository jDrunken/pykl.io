# pykl.io static site builder

gulp.js 기반의 task running으로 pykl.io 사이트를 building 합니다.

## 환경설정
먼저 전역으로 gulp와 [static-i18n](https://www.npmjs.com/package/static-i18n)을 설치합니다.
> npm install gulp static-i18n -g

전역으로 gulp 설치가 완료되면 사전 정의된 각종 플러그인을 설치합니다.
> npm install --save

## Sass
Sass를 실행시키기 위한 명령어입니다.
> gulp sass

Sass compile을 watch하기 위해서는 아래의 명령어를 실행합니다.
> gulp sass:watch

## Build
아래의 명령어를 실행시키면 `build/` 디렉토리에서 최종 결과물을 확인하실 수 있습니다.
> gulp build

## Deploy
gh-pages에 수정된 사항을 push합니다. github page 배포용입니다.
> gulp deploy

## Locales
컨텐츠 내용 수정이 필요할 시`locales/`에 해당 언어의 `json` 파일의 내용을 수정합니다.