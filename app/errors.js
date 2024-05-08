exports.handlePostgreErrors = (err, req, res, next) => {
	if (err.code === '23502' || err.code === '22P02') {
		res.status(400).send({ msg: 'Bad request.' });
	} else next(err);
};

exports.handleCustomErrors = (err, req, res, next) => {
	if (err.status === 400 || err.status === 404) {
		res.status(err.status).send({ msg: err.msg });
	} else next(err);
};

exports.handleServerErrors = (err, req, res, next) => {
	res.status(500).send({ msg: 'Server error.' });
};
