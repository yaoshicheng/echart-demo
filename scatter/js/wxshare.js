/*
 * 注意：
 * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
 * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
 * 3. 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
 *
 * 如有问题请通过以下渠道反馈：
 * 邮箱地址：weixin-open@qq.com
 * 邮件主题：【微信JS-SDK反馈】具体问题
 * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
 */

//创建全局wxShare对象
var wxShare = {
	shareData:{
		title: document.title,
		desc: '',
		link: '',
		imgUrl: "http://www.windmoney.com.cn/GuessWeb/Page/Coupon/img/windfundlogo.png"
	},
	myurl : location.href.split('#')[0],	
}

//var dataTest = {
//appId:"wx00c50f7f57b98d97",
//jsapiTicket:"kgt8ON7yVITDhtdwci0qeRw5VRzOz3QNXpuUk-2YFoZZuA8GFUXnrh_YVZ0V-21napK2rFq_bTZUs7PYnLQrjQ",
//nonceStr:"29147c5f-36b7-42ba-804a-b174d241da21",
//signature:"151b2068edc1d9e29e605dce4e105a8236655898",
//timestamp:"1480557317"
//}
$.ajax({
    type: "get",
    url: "http://www.windmoney.com.cn/jfire/weixin/getWxConfig.do?requrl=" + encodeURIComponent(wxShare.myurl),
    //url:'http://10.102.16.66:8083/jfire/weixin/getWxConfig.do?requrl=' + encodeURIComponent(wxShare.myurl),
    dataType: "json",	
    jsonpCallback:"wxConfig",
    success: function (json) {
    	if (json != null) {
          var data = eval(json);
          //console.log(dataTest);
	        wx.config({
		        debug: false,
		        appId: data.appId,
		        timestamp: data.timestamp,
		        nonceStr: data.nonceStr,
		        signature: data.signature,
		        jsApiList: [		            
	            'onMenuShareTimeline',
	            'onMenuShareAppMessage',
	            'onMenuShareQQ',
	            'onMenuShareWeibo'
		        ]
	    	});	    
    	}
    },
    error: function (jsXHR, status, error) {
    	//log("getWxConfig is error. " + status);
    }
});

var jsonFriend = {
	title: wxShare.shareData.title,
	desc: wxShare.shareData.desc,
	link: wxShare.shareData.link,
	imgUrl: wxShare.shareData.imgUrl,
	success: function(res) {
		//alert('已分享');
	},
	cancel: function(res) {
		//alert('已取消');
	}
}

var jsonTimeline = {
	title: wxShare.shareData.title,
	link: wxShare.shareData.link,
	imgUrl: wxShare.shareData.imgUrl,
	success: function(res) {
		//alert('已分享');
	},
	cancel: function(res) {
		//alert('已取消');
	}
};

var jsonQQ = {
	title: wxShare.shareData.title,
	desc: wxShare.shareData.desc,
	link: wxShare.shareData.link,
	imgUrl: wxShare.shareData.imgUrl,
	success: function(res) {
		//alert('已分享');
	},
	cancel: function(res) {
		//alert('已取消');
	}
};

var jsonWB = {
	title: wxShare.shareData.title,
	desc: wxShare.shareData.desc,
	link: wxShare.shareData.link,
	imgUrl: wxShare.shareData.imgUrl,
	success: function(res) {
		//alert('已分享');
	},
	cancel: function(res) {
		//alert('已取消');
	}
};

var setwxshare = function(title, desc, url, logo){
	jsonFriend.title = title;
	jsonFriend.desc =desc;
	jsonFriend.link = url;
	jsonFriend.imgUrl = logo;
	
	jsonTimeline.title = title;
	jsonTimeline.link = url;
	jsonTimeline.imgUrl = logo;
	
	jsonQQ.title = title;
	jsonQQ.desc = desc;
	jsonQQ.link = url;
	jsonQQ.imgUrl = logo;
	
	jsonWB.title = title;
	jsonWB.desc = desc;
	jsonWB.link = url;
	jsonWB.imgUrl = logo;
}

wx.ready(function() {
	// 2. 分享接口
	// 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
	wx.onMenuShareAppMessage(jsonFriend);
	// 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
	wx.onMenuShareTimeline(jsonTimeline);
	// 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
	wx.onMenuShareQQ(jsonQQ);
	// 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
	wx.onMenuShareWeibo(jsonWB);
});

wx.error(function(res) {
	//alert(res.errMsg);
});