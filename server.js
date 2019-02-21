const browserSync = require('browser-sync');
const express = require('express');

const app = express();
const port = 3000;

app.use('/', express.static('public/'));
app.listen(port, () => {
	browserSync({
		files: ['public/**/*.{html,js,css}'],
		proxy: `localhost:${port}`,
		open: false,
	});
});
