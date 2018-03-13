var express = require('express'); // express 모듈 가져오기
var app = express();  // app 에 express 객체를 할당해줍니다.
var path = require('path'); // path 를 사용할거니 모듈 가져오기
app.set('view engine', 'ejs');  // view engine 을 ejs 로 하겠다.
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
	// req 에는 클라이언트 쪽에서 보낸 요청, res 에는 서버에서 클라이언트로 응답을 해주는 것
	// res.send('Hello Express');  // 서버에서 클라이언트로 send 하여 화면을 그려준다.
	res.render('index', {title: '메인페이지 입니다. 저는 ejs 텔플릿엔진을 사용합니다.'});
});
app.get('/login', function(req, res) {
	res.render('login', {member: ['a', 'p', 'q', 'e', 'a', 'r']});
});
app.get('/join', function(req, res) {
	res.send('Join Page');
});

app.listen(8080, function() {
	console.log('Server Run... 8080');
});