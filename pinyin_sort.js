var pinyin = require('pinyin');
var _ = require('lodash');


var nameList = ['张三','李四','王五'];

var list = _.sortBy(nameList, function(name){
	return (_.head(_.head(pinyin(name.substr(0, 1), {
			style: pinyin.STYLE_FIRST_LETTER,
			heteronym: true
	}))));
});

console.log(list);
