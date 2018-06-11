var fn_index = async (ctx, next) => {
	ctx.response.body = `
		<h1>Index Page</h1>
		<form action='/signin' method='post'>
			<p>Name: <input name="name" value="koa"></p>
      <p>Password: <input name="password" type="password"></p>
      <p><input type="submit" value="Submit"></p>
		</form>
	`
}

var fn_signin = async (ctx, next) => {
	let name = ctx.request.body.name || ''
	let password = ctx.request.body.password || ''

	console.log(`Signin with name: ${name}, password: ${password}`)

	if(name == 'koa' && password == '12345'){
		ctx.response.body = `Welcome, ${name}`
	}else{
		ctx.response.body = `
			<h1>Login failed!</h1>
			<a href='/'>Please try again</a>
		`
	}
}

module.exports = {
	'GET /': fn_index,
	'POST /signin': fn_signin
}