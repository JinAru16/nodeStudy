const http = require('http');

const express = require('express');
const app = express();

const users = ['Tom', 'Andy', 'Jessica', 'Paul'];
//
// let server = http.createServer(function (request, response) {
//     if(request.url === '/') {
//         response.end('<h1>Welcom!</h1>');
//     } else if(request.url === '/users'){
//         response.end('<h1>' + users + '</h1>');
//     }
//      /*
//         '/user/1'.split('/)을 해주면 '/'을 경계로 나눠서 리스트 형식으로 출력이 됨
//         ->[ '', 'users', '1' ]...............(1)
//         그럼 users는 1번 인덱스인거고 '1'은 2번인덱스임 이걸 이용해서 라우팅에 사용할 숫자를 채울거임
//          */
//     else if (request.url.split('/')[1] === 'users') {
//         /*
//         해석해보면 요청받은 url을 '/'단위로 나눌건데, 거기서 1번 인덱스 가진놈을 우리는 users라고
//         인식하기로 우리는 합의를 했어 라는 뜻임.
//          */
//
//         let userIdx = request.url.split('/')[2];
//         /*
//         유저 인덱스라는걸 우리가 지정을 해줄건데, 요청받은 url을 '/'을 기준으로 나눠서 리스트 형식으로 표현할거야.
//         거기서 2번 인덱스 가진애가 유저의 인덱스야
//          */
//
//         let userName = users[userIdx - 1];
//         /*
//         url에 적히는 숫자는 1부터 시작을 하게되는데 인덱스의 숫자는 0부터 시작하니깐  1을 빼주는거임
//         */
//
//
//         response.end('<h1>' + userName +'</h1>');
//
//     } else{
//         response.end('<h1>Page Not Available</h1>');
//     }
// });
//
//
// server.listen(3000);

app.get('/', (request, response) => {
    response.end(`<h1>${users}</h1>`);
});

app.get('/users', (request, response) =>{
    response.end(`<h1>${userName}</h1>`)
});

app.get('/users/:id', (request, response) =>{

    /*
    users/:id에서 :id는 id라는 문자열을 의미하는것이 아니라 :id 위체에 들어오는 값을 id라는 속성에다가
    담으라는 express 많의 표기법이다.

    console.log(request.params);를 출력해보면
    127.0.0.1:3000/users/1로 접속시 { id: '1' }가 출력이 된다.

     */
    const userName = users[request.params.id - 1];
    // 즉 해석해보면 users뒤에 오는 변수를 params로 두는거다. 그리고 그걸 id라는 속성에다가 묶는거임
    // users/n에서
    // n을 params.id로 표시하게 되는거다.
    response.end(`<h1>${userName}</h1>`);
});

app.get('*', (request, response) => {
    response.end('<h1>Page Not Available</h1>');
});

app.listen(3000);

