({
    appDir: './',
    baseUrl: './',
	dir: '../optimize',
	optimizeCss: 'standard',
	urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		jquery: 'libs/jquery/jquery',
		jqueryMobile: 'libs/jquery/jquery.mobile',
		jqueryCookie: 'libs/jquery/jquery.cookie',
		jqueryScrollLoading: 'libs/jquery/jquery.scrollLoading',
		jqueryKinSlideshow: 'libs/jquery/jquery.KinSlideshow',
		jqueryMarquee: 'libs/jquery/jquery.marquee',
		jqueryEasing: 'libs/jquery/jquery.easing',
        jqueryIEMarquee: 'libs/jquery/jquery.ie.marquee',
		mustache: 'libs/mustache/mustache',
		iscroll: 'libs/iscroll/iscroll',
		underscore: 'libs/underscore/underscore',
		kindeditor: 'libs/kindeditor/kindeditor',
		kindeditorZh: 'libs/kindeditor/lang/zh_CN',
		masonry: 'libs/masonry/jquery.masonry',
		jqueryMobileDialog: 'libs/dialog/dialog',
		camera: 'libs/camera/camera',
		artDialog: 'libs/artDialog/dialog',
		dialogPopup: 'libs/artDialog/popup',
		dialogConfig: 'libs/artDialog/dialog-config',
		dialogPlus: 'libs/artDialog/dialog-plus',
		dialogDrag: 'libs/artDialog/drag',
		purl: 'libs/purl/purl',
		backbone: 'libs/backbone/backbone',
		enumUtil: 'util/enum',
		constUtil: 'util/const',
		stringUtil: 'util/string',
		pageUtil: 'util/page',
		objectUtil: 'util/object',
		adminKeywordListModel: 'models/admin_keyword/listModel',
		adminIndexView: 'views/admin_index/indexView',
		adminKeywordListView: 'views/admin_keyword/listView',
		indexView: 'views/index/indexView',
		shortcutView: 'views/util/shortcutView',
		wapDialogView: 'views/libs/wapDialogView',
		pageView: 'views/util/pageView',
		scrollView: 'views/libs/scrollView'
	},
    modules: [
		{name: 'app/admin_index/main'},
		{name: 'app/admin_keyword/main'}
    ],
	fileExclusionRegExp: /^(r|build|jasmine|optimize)\.{0,1}(js|bat){0,1}$/,
	shim: {
		'backbone': {
				//These script dependencies should be loaded before loading
				//backbone.js
				deps: ['underscore', 'jquery'],
				//Once loaded, use the global 'Backbone' as the
				//module value.
				exports: 'Backbone'
		},
		'underscore': {
            exports: '_'
		},
		// 'kindeditor': {
            // exports: 'KE'
		// },
		'kindeditorZh': {
            deps: ['kindeditor']
		},
		'jqueryCookie': {
				deps: ['jquery']
		},
		'jqueryEasing': {
            deps: ['jquery']
		},
		'masonry': {
            deps: ['jquery']
		},
		'jqueryScrollLoading': {
				deps: ['jquery']
		},
		'jqueryKinSlideshow': {
				deps: ['jquery']
		},
		'jqueryMarquee': {
				deps: ['jquery']
		},
		'camera': {
            deps: ['jquery', 'jqueryMobile', 'jqueryEasing']
		},
        'jqueryIEMarquee': {
                deps: ['jquery']
        },
		'purl': {
				deps: ['jquery']
		},
		'jqueryMobile': {
				deps: ['jquery']
		},
		'jqueryMobileDialog': {
				deps: ['jquery']
		},
		'artDialog': {  
			deps: ["jquery", "dialogPopup", "dialogConfig"]  
		},
		'dialogPlus': {  
			deps: ["artDialog"]  
		},
		'scrollView': {
			deps: ['jqueryScrollLoading']
		}
	}
})
