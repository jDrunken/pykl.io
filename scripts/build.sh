echo "\n\n\nInitializing build/"
rm -rf build
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

# resource copy
cp src/static/css/normalize.css build/static/css/normalize.css
cp src/static/css/webfont.css build/static/css/webfont.css
cp src/templates/index.html build/index.html
cp -rf src/static/conf build/static

src/static/conf/PYKL_Introduction_For_Advertiser.pdf

echo "\n----- Done"
echo "\n\n\n===Build Completed"
