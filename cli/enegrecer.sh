case "$1"
 in
 b) docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -it enegrecer-web ../node_modules/.bin/react-scripts build;;
 ws) docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -it enegrecer-web ../node_modules/.bin/esw -w src;;
 l) docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -it enegrecer-web ../node_modules/.bin/eslint src;;
 t) docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -it enegrecer-web ../node_modules/.bin/react-scripts test --env=jsdom;;
 s) docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -it enegrecer-web yarn start-local;;
 *)
            echo $"Usage: $0 {b|ws|l|t|s}"
            exit 1
esac
