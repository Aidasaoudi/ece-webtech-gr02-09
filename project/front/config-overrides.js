const { aliasWebpack, aliasJest } = require('react-app-alias')
const { alias } = require('react-app-rewire-alias');

const options = {}; // default is empty for most cases

module.exports.jest = aliasJest(options)

module.exports = aliasWebpack(options)

module.exports = function override(config) {
	const fallback = config.resolve.fallback || {};
	alias({
		'@asset': 'src/asset',
		'@style': 'src/asset/style',
		'@image': 'src/asset/image',
		'@page': 'src/page'
	})(config);
	return config;
};
