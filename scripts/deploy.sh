rm -Rf build
mkdir build
cd build
git init
git remote add origin https://github.com/chain-partners/pykl.io.git
git pull origin gh-pages
git checkout gh-pages
cd ../
npm run build
cd build

git add -A
git commit -a -m "Deployed at $(date)"
git push origin gh-pages

