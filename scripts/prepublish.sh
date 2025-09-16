cd ./cli
npm run build
./scripts/js_to_mjs.sh
cd ../
npm run scss:build
npm run build
