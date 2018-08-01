rm -Rf build/
static-i18n -l en -i en -i ko -o build --outputDefault __lng__/__file__ pages/
cp src/templates/index.html build/index.html
cp src/static/css/normalize.css build/static/css/normalize.css
cp src/static/css/webfont.css build/static/css/webfont.css
gulp sass
gulp autoprefix
gulp js:minify