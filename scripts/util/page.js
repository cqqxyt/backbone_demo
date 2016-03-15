define(['stringUtil',  'underscore', 'purl'], function(string,  _, purl) {
	var page = {};
	//ajax分页选项
	page.setAjaxPage = function(pCur, intSize, intCount, url) {
		url = url || 'javascript:void(0)';
		pCur = +pCur;
		intSize = +intSize;
		intCount = +intCount;
		if (pCur <= 0) return "";
		var str = [];
		var pLast = (intCount % intSize > 0) ? (intCount / intSize + 1) : (intCount / intSize);
		pLast = Math.floor(pLast);
		if (pCur <= 0) {
            pCur = 1;
        }else if (pCur > pLast) {
            pCur = pLast;
        }
        if (intCount >= 0) {
            str.push(string.format('<span>查询到<b>{0}</b>条信息，共<b>{1}</b>页，每页<b>{2}</b>条</span>', intCount, pLast, intSize));
        }
		if (pCur > 1) {
            str.push(string.format('<a href="{0}" name="1">首页</a><a href="{0}" name="{1}">上一页</a>', url, (pCur - 1)));
        }else {
            str.push(string.format('<span>首页</span><span>上一页</span>'));
        }
		var pSize = 9;
		var cur = (pCur === 1) ? '<span class="cur">1</span>' : string.format('<a href="{0}" name="1">1</a>', url);
        str.push(cur);
        if (pCur > pSize) {
            str.push('…');
        }
		var end = (pCur + pSize - 1);
		var start = (pCur - pSize) > 0 ? (pCur - pSize) : 2;
		// console.log('start:' + start);
		// console.log('pSize:' + pSize);
		// console.log('pCur:' + pCur);
		// console.log('end:' + (pCur + pSize - 1));
		// console.log('pLast:' + pLast);
		for (var p = start; p < end; p++) {
			if (p <= 1) {
				continue;
            }
			if (p >= pLast) {
                break;
            }
			if (pCur === p) {
                str.push(string.format('<span class="cur">{0}</span>', p));
            }else {
                str.push(string.format('<a href="{0}" name="{1}">{1}</a>', url, p));
            }
		}
		if (pLast >= (pCur + pSize)) {
            str.push("…");
        }
		if (pLast <= 1)
        {
        }else if (pCur === pLast) {
            str.push(string.format('<span class="cur">{0}</span>', pLast));
        }else {
            str.push(string.format('<a href="{0}" name="{1}">{1}</a>', url, pLast));
        }
        if (pCur < pLast && pCur > 0) {
            str.push(string.format('<a href="{0}" name="{1}">下一页</a><a href="{0}" name="{2}">尾页</a>', url, (pCur + 1), pLast));
        }else {
            str.push('<span>下一页</span><span>尾页</span>');
        }
		
		return str.join('');
	};
	//根据url设置分页模式
	page.setHrefPageFormat = function(p) {
		var url = purl(unescape(location.href));
		var attrs = url.param();
		var host = url.attr('host');
		var path = url.attr('path');
		var query = [];
		var keys = _.keys(attrs);
		if(!_.contains(keys, 'p') && !p) {
			query.push('p=1');
		}else {
			attrs['p'] = p;
			for(var key in attrs) {
				var format = string.format('{0}={1}', key, escape(attrs[key]));
				query.push(format);
			}
		}
		return string.format('http://{0}{1}?{2}', host, path, query.join('&'));
	};
	return page;
});