docker run --rm --name enegrecer-web -p 3000:3000 -v "$PWD":/usr/src/app -w /usr/src/app -it enegrecer-web yarn test
