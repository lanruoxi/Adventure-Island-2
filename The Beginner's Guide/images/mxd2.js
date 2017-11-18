var U = {
	gid: {
		videFlg: 0,
		showPopFlg: 0
	},
	bind: function (el, type, fn, unbind) {
		var f = (window.attachEvent) ? true : false;
		var methodName = f ? ((unbind ? 'detach' : 'attach') + 'Event') : ((unbind ? 'remove' : 'add') + 'EventListener');
		type = type.split(' ');
		for (var i = 0; i < type.length; i++) {
			if (type[i]) {
				type[i] = f ? ('on' + type[i]) : ('' + type[i]);
				el[methodName](type[i], fn, false);
			}
		}
	},
	unbind: function (el, type, fn) {
		U.bind(el, type, fn, true);
	},
	ready: function (fn) {
		var _ready = (function () {
			var readyList = null;
			var isFire = false;

			function fireReady() {
				if (!isFire) {
					var fn, i = 0;
					if (readyList) {
						while (fn = readyList[i++]) {
							fn();
						}
						readyList = null;
					}
					isFire = true;
				}
			}

			function doScrollCheck() {
				if (isFire) { return; }
				try {
					document.documentElement.doScroll("left");
				} catch (error) {
					setTimeout(doScrollCheck, 1);
					return;
				}
				fireReady();
			}

			function bindReady() {
				if (document.addEventListener) {
					document.addEventListener('DOMContentLoaded', function () {
						document.removeEventListener('DOMContentLoaded', arguments.callee, false);
						fireReady();
					}, false);
					window.addEventListener('load', fireReady, false);
				} else if (document.attachEvent) {
					document.attachEvent('onreadystatechange', function () {
						if (document.readyState === 'complete') {
							document.detachEvent('onreadystatechange', arguments.callee);
							fireReady();
						}
					});
					window.attachEvent('onload', fireReady);
				}

				var toplevel = false;
				try {
					toplevel = window.frameElement == null;
				} catch (e) { }

				if (document.documentElement.doScroll && toplevel) {
					doScrollCheck();
				}
			}

			bindReady();

			return function (fn) {
				if (!readyList) readyList = [];
				if (document.readyState == 'complete') {
					//console.log("ready")
					fn();
				} else {
					readyList.push(fn);
				}
			};
		})()
		typeof _ready != 'undefined' && _ready(fn);
	},
	removeClass: function (el, className) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	},
	addClass: function (el, className) {
		if (!U.hasClass(el, className)) {
			el.className += (el.className ? ' ' : '') + className;
		}
	},
	hasClass: function (el, className) {
		return !!el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
	},
	createEl: function (tag, classes) {
		var el = document.createElement(tag || 'div');
		if (classes) {
			el.className = classes;
		}
		return el;
	},
	id: function (id) {
		return document.getElementById(id);
	},
	tag: function (p, tag) {
		return p.getElementsByTagName(tag);
	},
	pt: {
		isIE: navigator.userAgent.indexOf("MSIE") != -1,
		isMobile: /iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser|blackberry/i.test(navigator.userAgent)
	},
	win: {
		width: (window.innerHeight) ? window.innerHeight : (document.documentElement && document.documentElement.clientHeight) ? document.documentElement.clientHeight : document.body.offsetHeight,
		height: (window.innerWidth) ? window.innerWidth : (document.documentElement && document.documentElement.clientWidth) ? document.documentElement.clientWidth : document.body.offsetWidth
	},
	script: function (u, charset) {
		var o = U.createEl('script');
		o.src = u;
		if (charset) o.setAttribute('charset', charset);
		o.type = 'text/javascript';
		U.tag(document, 'head')[0].appendChild(o);
		return o;
	},
	chkload: function (u, fn, param) {
		var e = U.script(u);
		if (U.pt.isIE) {
			e.onreadystatechange = function () {
				if (this.readyState && this.readyState == 'loading') {
					return;
				} else {
					if (typeof (fn) == 'function') fn(param);
				}
			}
		} else {
			e.onload = function () {
				if (typeof (fn) == 'function') fn(param);
			}
		}
	},
	showVid: function (tar, vid, w, h) {
		if (U.gid.videFlg) {
			U.createVideo(tar, vid, w, h)
		} else {
			U.chkload('//imgcache.gtimg.cn/tencentvideo_v1/tvp/js/tvp.player_v2.js', function () {
				U.createVideo(tar, vid, w, h);
				U.gid.videFlg = 1;
			}, '')
		}
	},
	createVideo: function (tar, vid, w, h) {
		var video = new tvp.VideoInfo();
		video.setVid(vid);
		var player = new tvp.Player();
		player.create({
			width: w,
			height: h,
			video: video,
			isVodFlashShowCfg: 0,
			isVodFlashShowSearchBar: 0,
			isVodFlashShowEnd: 0,
			autoplay: 1,
			vodFlashSkin: "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf",
			modId: tar
		});
	},
	showPop: function (tar) {
		if (U.gid.showPopFlg) {
			showDialog.show({
				id: tar,
				bgcolor: '#000',
				opacity: 70
			});
		} else {
			U.chkload('//ossweb-img.qq.com/images/js/comm/showDialog.min.js', function () {
				showDialog.show({
					id: tar,
					bgcolor: '#000',
					opacity: 70
				});
				U.gid.showPopFlg = 1;
			})
		}

	},
	qcBox: function () {
		var msel1 = U.id("qrBox");
		var bQrbox = U.id("bQrbox");
		U.bind(msel1, 'mouseover', function () {
			bQrbox.style.display = "block"
		});
		U.bind(msel1, 'mouseout', function () {
			bQrbox.style.display = "none"
		});
	}
};
amsCfg_384257 = {
	"iActivityId": 118053, //�id	
	"iFlowId": 384257, //����id
	"sData":{xhr:true},
	"fFlowSubmitEnd": function (res) {
		if (res.sOutValue1 == 1) {
			alert("��Ǹ������δ��ò�ɾ���ʸ���ܰ��ʾ������ѯϵͳ���ܴ���һ���ӳ٣����Ժ�������ѯ�������ѻ���ʸ�Ҳ��ֱ�ӵ�¼��Ϸ��");
		} else {
			alert("��ϲ������˲�ɾ���ʸ�8��30������������Ϸ�ﲻ����ɢŶ~");
		}
		return;
	},
	"fFlowSubmitFailed": function (res) {
		alert(res.sMsg);
	}
};

function mxd2Init(fn) {
	if (U.id("qrBox")) {
		U.qcBox();
	}
	U.ready(function () {
		U.chkload('//tajs.qq.com/stats?sId=54709507', function () {
			U.chkload('//pingjs.qq.com/tcss.ping.https.js', function () {
				if (typeof (pgvMain) == 'function') {
					//console.log("pvinti")
					pgvMain();
					if (fn) fn();
				};
			})
		});
	})
	U.bind(window, 'load', function () {
		U.chkload('//ossweb-img.qq.com/images/js/title.js', function () {
			if (typeof (ostb_int) == 'function') ostb_int();
		});
		if (U.id("unlogin")) {
			U.chkload('//ossweb-img.qq.com/images/js/login/loginmanagerv3.js', function () {
				function loginFunc() {
					LoginManager.login();
				}
				LoginManager.checkLogin(function () {
					var unlogin = document.getElementById('unlogin');
					var logined = document.getElementById('logined');
					unlogin.style.display = 'none';
					logined.style.display = 'block';
					document.getElementById('login_qq_span').innerText = LoginManager.getUserUin();
				});
			});
		}

		if (U.id("yzBtn")) {
			var reportingFlag = 0;
			U.bind(U.id("yzBtn"), 'click', function () {
				if (typeof milo == "undefined") {
					U.chkload('//ossweb-img.qq.com/images/js/milo/milo.js', function () {
						U.chkload('//ossweb-img.qq.com/images/ams/atm/reporting.js?action=118053', function () {
							amsSubmit(118053, 384257);
							reportingFlag = 1;
						});
					});
				} else {
					if (!reportingFlag) {
						amsSubmit(118053, 384257);
					} else {
						U.chkload('//ossweb-img.qq.com/images/ams/atm/reporting.js?action=118053', function () {
							amsSubmit(118053, 384257);
							reportingFlag = 1
						});
					}
				}
			});


		}
	});

}

function mxd2MobileInit(fn) {
	U.ready(function () {
		U.chkload('//tajs.qq.com/stats?sId=54709507', function () {
			U.chkload('https://pingjs.qq.com/tcss.ping.https.js', function () {
				if (typeof (pgvMain) == 'function') {
					pgvMain();
				};
				if (fn) fn();
			})
		});
	});
} /*  |xGv00|ece73987880b369aee26ede81c7c460e */