rm -Rf build
npm run build
cd build
git init
git add -A
git commit -a -m "Deployed at $(date)"
git remote add origin https://github.com/chain-partners/pykl.io.git
git checkout gh-pages
git push origin gh-pages -f