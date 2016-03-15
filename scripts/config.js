// Author: Pwstrick <pwstrick@163.com>
// Filename: config.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
var require = {
  urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    jquery: '../../libs/jquery/jquery',
    jqueryCookie: '../../libs/jquery/jquery.cookie',
	jqueryMobile: '../../libs/jquery/jquery.mobile',
	jqueryEasing: '../../libs/jquery/jquery.easing',
    jqueryScrollLoading: '../../libs/jquery/jquery.scrollLoading',
	jqueryKinSlideshow: '../../libs/jquery/jquery.KinSlideshow',
	jqueryMarquee: '../../libs/jquery/jquery.marquee',
    jqueryIEMarquee: '../../libs/jquery/jquery.ie.marquee',
	purl: '../../libs/purl/purl',
	mustache: '../../libs/mustache/mustache',
	backbone: '../../libs/backbone/backbone',
	underscore: '../../libs/underscore/underscore',
	kindeditor: '../../libs/kindeditor/kindeditor',
	kindeditorZh: '../../libs/kindeditor/lang/zh_CN',
	iscroll: '../../libs/iscroll/iscroll',
	masonry: '../../libs/masonry/jquery.masonry',
	camera: '../../libs/camera/camera',
    templates: '../../../templates',
	adminKeywordListModel: '../../models/admin_keyword/listModel',
	adminIndexView: '../../views/admin_index/indexView',
	adminKeywordListView: '../../views/admin_keyword/listView',
	scrollView: '../../views/libs/scrollView',
	shortcutView: '../../views/util/shortcutView',
	wapDialogView: '../../views/libs/wapDialogView',
	pageView: '../../views/util/pageView',
	jqueryMobileDialog: '../../libs/dialog/dialog',
	artDialog: '../../libs/artDialog/dialog',
	dialogPopup: '../../libs/artDialog/popup',
	dialogConfig: '../../libs/artDialog/dialog-config',
	dialogPlus: '../../libs/artDialog/dialog-plus',
	dialogDrag: '../../libs/artDialog/drag',
	enumUtil: '../../util/enum',
    constUtil: '../../util/const',
	stringUtil: '../../util/string',
	pageUtil: '../../util/page',
	objectUtil: '../../util/object'
  },
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
	'camera': {
            deps: ['jquery', 'jqueryMobile', 'jqueryEasing']
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
			deps: ['jquery', 'jqueryMobile']
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
};