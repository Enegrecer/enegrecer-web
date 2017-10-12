case "$1"
 in
 b) docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -it enegrecer-web yarn build;;
 ws) docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -it enegrecer-web yarn watch-lint;;
 l) docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -it enegrecer-web yarn lint;;
 t) docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -it enegrecer-web yarn test;;
 *)
            echo $"Usage: $0 {b|ws|l|t}"
            exit 1
esac
