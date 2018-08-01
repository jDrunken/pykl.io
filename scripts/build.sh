echo "\n\n\nInitializing build/"
rm -Rf build/
echo "\n\n\nGenerate static pages"
static-i18n -l en -i en -i ko -o build --outputDefault __lng__/__file__ pages/
echo "\n----- Done"
echo "\n\n\nCompiling SASS"
gulp sass
gulp autoprefix
echo "\n----- Done"
echo "\n\n\nMinifying js files"
gulp js:minify
echo "\n----- Done"
echo "\n\n\\nOptimizing and copying assets to build/"
gulp fonts
gulp img:minify
cp src/static/css/normalize.css build/static/css/normalize.css
cp src/static/css/webfont.css build/static/css/webfont.css
cp src/templates/index.html build/index.html
echo "\n----- Done"
echo "\n\n\n===Build Completed"