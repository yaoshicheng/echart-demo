var MyChart = {
	data: 0,
	createBarChart: function(date) {
		this.getData();
	},
	getData: function() {
		//初始化渲染主题
		var that = this;
		var theme = '',
			jsonData;
		var myChart = echarts.init(document.getElementById('myChart'), theme);
		//获取并解析数据
		if (myChart) {
			myChart.clear();
			var theme = '';
			myChart = echarts.init(document.getElementById('myChart'), theme);
		}
		if (that.data != 0) {
			that.render(myChart, that.data);
		} else {
			var data2 = {"title": "那些年错过的牛股", "dataList": [
				{"data":[{"name":"方大炭素","value":39.9},{"name":"苏泊尔","value":42.6},{"name":"古井贡酒","value":57.3},{"name":"贵州茅台","value":58.5},{"name":"格力电器","value":80.6},{"name":"恒瑞医药","value":85.0},{"name":"三安光电","value":86.1},{"name":"长春高新","value":100.3},{"name":"恒生电子","value":107.1},{"name":"华夏幸福","value":128.8}],"date":"2006年1月"},{"data":[{"name":"片仔癀","value":39.5},{"name":"苏泊尔","value":42.3},{"name":"古井贡酒","value":54.0},{"name":"贵州茅台","value":56.4},{"name":"格力电器","value":73.1},{"name":"恒瑞医药","value":86.4},{"name":"三安光电","value":88.7},{"name":"恒生电子","value":96.0},{"name":"长春高新","value":105.2},{"name":"华夏幸福","value":128.8}],"date":"2006年2月"},{"data":[{"name":"方大炭素","value":36.7},{"name":"苏泊尔","value":39.8},{"name":"贵州茅台","value":42.6},{"name":"古井贡酒","value":49.7},{"name":"格力电器","value":65.0},{"name":"三安光电","value":88.7},{"name":"恒瑞医药","value":93.0},{"name":"长春高新","value":96.7},{"name":"恒生电子","value":102.5},{"name":"华夏幸福","value":129.8}],"date":"2006年3月"},{"data":[{"name":"苏泊尔","value":40.0},{"name":"方大炭素","value":42.0},{"name":"贵州茅台","value":42.6},{"name":"古井贡酒","value":51.7},{"name":"格力电器","value":61.9},{"name":"恒瑞医药","value":69.4},{"name":"三安光电","value":93.6},{"name":"长春高新","value":105.5},{"name":"恒生电子","value":106.9},{"name":"华夏幸福","value":129.5}],"date":"2006年4月"},{"data":[{"name":"古井贡酒","value":37.1},{"name":"通策医疗","value":41.6},{"name":"中天金融","value":44.6},{"name":"方大炭素","value":51.3},{"name":"恒瑞医药","value":56.0},{"name":"格力电器","value":60.8},{"name":"恒生电子","value":99.7},{"name":"长春高新","value":103.7},{"name":"三安光电","value":122.2},{"name":"华夏幸福","value":129.5}],"date":"2006年5月"},{"data":[{"name":"通策医疗","value":30.7},{"name":"中航资本","value":32.1},{"name":"中天金融","value":32.3},{"name":"方大炭素","value":38.8},{"name":"恒瑞医药","value":46.4},{"name":"格力电器","value":55.1},{"name":"长春高新","value":64.3},{"name":"恒生电子","value":65.8},{"name":"三安光电","value":76.4},{"name":"华夏幸福","value":129.5}],"date":"2006年6月"},{"data":[{"name":"古井贡酒","value":29.3},{"name":"中航资本","value":30.0},{"name":"中天金融","value":30.9},{"name":"方大炭素","value":36.7},{"name":"恒瑞医药","value":41.9},{"name":"格力电器","value":47.5},{"name":"长春高新","value":53.1},{"name":"恒生电子","value":57.4},{"name":"三安光电","value":64.5},{"name":"华夏幸福","value":75.0}],"date":"2006年7月"},{"data":[{"name":"片仔癀","value":29.1},{"name":"古井贡酒","value":32.1},{"name":"中航资本","value":32.7},{"name":"方大炭素","value":38.3},{"name":"恒瑞医药","value":41.0},{"name":"格力电器","value":52.0},{"name":"长春高新","value":58.5},{"name":"恒生电子","value":64.5},{"name":"华夏幸福","value":75.0},{"name":"三安光电","value":83.6}],"date":"2006年8月"},{"data":[{"name":"小天鹅A","value":27.0},{"name":"中航资本","value":31.7},{"name":"古井贡酒","value":32.2},{"name":"方大炭素","value":38.6},{"name":"恒瑞医药","value":40.4},{"name":"格力电器","value":51.6},{"name":"长春高新","value":53.7},{"name":"恒生电子","value":54.4},{"name":"华夏幸福","value":77.1},{"name":"三安光电","value":89.5}],"date":"2006年9月"},{"data":[{"name":"小天鹅A","value":25.9},{"name":"中航资本","value":28.5},{"name":"方大炭素","value":29.3},{"name":"古井贡酒","value":29.9},{"name":"恒瑞医药","value":35.2},{"name":"格力电器","value":52.7},{"name":"恒生电子","value":54.6},{"name":"长春高新","value":57.3},{"name":"三安光电","value":59.5},{"name":"华夏幸福","value":75.9}],"date":"2006年10月"},{"data":[{"name":"仁和药业","value":25.3},{"name":"片仔癀","value":26.6},{"name":"中航资本","value":29.7},{"name":"古井贡酒","value":31.2},{"name":"恒瑞医药","value":33.2},{"name":"格力电器","value":48.7},{"name":"恒生电子","value":48.8},{"name":"长春高新","value":54.0},{"name":"华夏幸福","value":73.0},{"name":"三安光电","value":73.4}],"date":"2006年11月"},{"data":[{"name":"仁和药业","value":25.3},{"name":"通策医疗","value":25.7},{"name":"古井贡酒","value":26.1},{"name":"中航资本","value":31.7},{"name":"恒瑞医药","value":32.3},{"name":"格力电器","value":37.6},{"name":"恒生电子","value":49.4},{"name":"长春高新","value":56.7},{"name":"华夏幸福","value":75.7},{"name":"三安光电","value":82.6}],"date":"2006年12月"}
				,{"data":[{"name":"恒瑞医药","value":23.0},{"name":"通策医疗","value":23.3},{"name":"方大炭素","value":23.6},{"name":"仁和药业","value":25.3},{"name":"中航资本","value":34.3},{"name":"格力电器","value":35.4},{"name":"恒生电子","value":41.4},{"name":"长春高新","value":51.9},{"name":"华夏幸福","value":74.3},{"name":"三安光电","value":103.1}],"date":"2007年1月"},{"data":[{"name":"东方雨虹","value":19.4},{"name":"平潭发展","value":20.0},{"name":"恒瑞医药","value":21.0},{"name":"格力电器","value":24.3},{"name":"仁和药业","value":25.3},{"name":"恒生电子","value":28.9},{"name":"中航资本","value":29.3},{"name":"长春高新","value":32.3},{"name":"华夏幸福","value":63.6},{"name":"三安光电","value":91.5}],"date":"2007年2月"},{"data":[{"name":"东方雨虹","value":19.4},{"name":"恒瑞医药","value":19.9},{"name":"中航资本","value":20.0},{"name":"平潭发展","value":20.0},{"name":"长春高新","value":22.0},{"name":"格力电器","value":24.6},{"name":"仁和药业","value":25.3},{"name":"恒生电子","value":26.9},{"name":"华夏幸福","value":53.3},{"name":"三安光电","value":65.1}],"date":"2007年3月"},{"data":[{"name":"顺发恒业","value":17.4},{"name":"古井贡酒","value":17.9},{"name":"长春高新","value":18.0},{"name":"东方雨虹","value":19.4},{"name":"恒生电子","value":19.7},{"name":"平潭发展","value":20.0},{"name":"恒瑞医药","value":21.1},{"name":"格力电器","value":24.6},{"name":"华夏幸福","value":31.1},{"name":"三安光电","value":56.8}],"date":"2007年4月"},{"data":[{"name":"大华股份","value":15.0},{"name":"科大讯飞","value":15.2},{"name":"格力电器","value":15.5},{"name":"顺发恒业","value":17.4},{"name":"古井贡酒","value":17.9},{"name":"恒瑞医药","value":18.4},{"name":"东方雨虹","value":19.4},{"name":"平潭发展","value":20.0},{"name":"华夏幸福","value":27.9},{"name":"三安光电","value":37.4}],"date":"2007年5月"},{"data":[{"name":"恒生电子","value":14.4},{"name":"长春高新","value":14.8},{"name":"大华股份","value":15.0},{"name":"科大讯飞","value":15.2},{"name":"顺发恒业","value":17.4},{"name":"古井贡酒","value":17.9},{"name":"东方雨虹","value":19.4},{"name":"平潭发展","value":20.0},{"name":"华夏幸福","value":21.0},{"name":"三安光电","value":37.4}],"date":"2007年6月"},{"data":[{"name":"美年健康","value":14.2},{"name":"大华股份","value":15.0},{"name":"科大讯飞","value":15.2},{"name":"顺发恒业","value":17.4},{"name":"恒生电子","value":19.1},{"name":"东方雨虹","value":19.4},{"name":"长春高新","value":19.7},{"name":"平潭发展","value":20.0},{"name":"三安光电","value":37.4},{"name":"华夏幸福","value":44.4}],"date":"2007年7月"},{"data":[{"name":"鱼跃医疗","value":13.2},{"name":"恒生电子","value":14.7},{"name":"大华股份","value":15.0},{"name":"科大讯飞","value":15.2},{"name":"长春高新","value":16.0},{"name":"顺发恒业","value":17.4},{"name":"东方雨虹","value":19.4},{"name":"平潭发展","value":20.0},{"name":"华夏幸福","value":34.4},{"name":"三安光电","value":37.4}],"date":"2007年8月"},{"data":[{"name":"先导智能","value":12.2},{"name":"鱼跃医疗","value":13.2},{"name":"长春高新","value":14.5},{"name":"大华股份","value":15.0},{"name":"科大讯飞","value":15.2},{"name":"顺发恒业","value":17.4},{"name":"东方雨虹","value":19.4},{"name":"平潭发展","value":20.0},{"name":"华夏幸福","value":26.5},{"name":"三安光电","value":37.4}],"date":"2007年9月"},{"data":[{"name":"恒瑞医药","value":13.2},{"name":"鱼跃医疗","value":13.2},{"name":"大华股份","value":15.0},{"name":"科大讯飞","value":15.2},{"name":"顺发恒业","value":17.4},{"name":"长春高新","value":17.8},{"name":"东方雨虹","value":19.4},{"name":"平潭发展","value":20.0},{"name":"华夏幸福","value":27.4},{"name":"三安光电","value":37.4}],"date":"2007年10月"},{"data":[{"name":"鱼跃医疗","value":13.2},{"name":"片仔癀","value":13.6},{"name":"大华股份","value":15.0},{"name":"科大讯飞","value":15.2},{"name":"顺发恒业","value":17.4},{"name":"东方雨虹","value":19.4},{"name":"平潭发展","value":20.0},{"name":"长春高新","value":20.7},{"name":"华夏幸福","value":33.6},{"name":"三安光电","value":37.4}],"date":"2007年11月"},{"data":[{"name":"鱼跃医疗","value":13.2},{"name":"片仔癀","value":14.3},{"name":"大华股份","value":15.0},{"name":"科大讯飞","value":15.2},{"name":"顺发恒业","value":17.4},{"name":"东方雨虹","value":19.4},{"name":"平潭发展","value":20.0},{"name":"长春高新","value":20.5},{"name":"华夏幸福","value":30.8},{"name":"三安光电","value":37.4}],"date":"2007年12月"}
				,{"data":[{"name":"先导智能","value":12.2},{"name":"鱼跃医疗","value":13.2},{"name":"大华股份","value":15.0},{"name":"科大讯飞","value":15.2},{"name":"长春高新","value":16.8},{"name":"顺发恒业","value":17.4},{"name":"东方雨虹","value":19.4},{"name":"平潭发展","value":20.0},{"name":"华夏幸福","value":25.7},{"name":"三安光电","value":37.4}],"date":"2008年1月"},{"data":[{"name":"片仔癀","value":12.3},{"name":"鱼跃医疗","value":13.2},{"name":"大华股份","value":15.0},{"name":"科大讯飞","value":15.2},{"name":"顺发恒业","value":17.4},{"name":"东方雨虹","value":19.4},{"name":"平潭发展","value":20.0},{"name":"长春高新","value":20.3},{"name":"华夏幸福","value":30.8},{"name":"三安光电","value":37.4}],"date":"2008年2月"},{"data":[{"name":"片仔癀","value":12.5},{"name":"鱼跃医疗","value":13.2},{"name":"大华股份","value":15.0},{"name":"科大讯飞","value":15.2},{"name":"顺发恒业","value":17.4},{"name":"长春高新","value":18.6},{"name":"东方雨虹","value":19.4},{"name":"平潭发展","value":20.0},{"name":"华夏幸福","value":26.7},{"name":"三安光电","value":37.4}],"date":"2008年3月"},{"data":[{"name":"鱼跃医疗","value":13.2},{"name":"片仔癀","value":14.5},{"name":"大华股份","value":15.0},{"name":"科大讯飞","value":15.2},{"name":"顺发恒业","value":17.4},{"name":"东方雨虹","value":19.4},{"name":"平潭发展","value":20.0},{"name":"长春高新","value":21.2},{"name":"华夏幸福","value":27.1},{"name":"三安光电","value":37.4}],"date":"2008年4月"},{"data":[{"name":"先导智能","value":12.2},{"name":"金证股份","value":12.5},{"name":"大华股份","value":15.0},{"name":"片仔癀","value":15.1},{"name":"科大讯飞","value":15.2},{"name":"顺发恒业","value":17.4},{"name":"东方雨虹","value":19.4},{"name":"长春高新","value":24.5},{"name":"华夏幸福","value":25.6},{"name":"三安光电","value":37.4}],"date":"2008年5月"},{"data":[{"name":"先导智能","value":12.2},{"name":"科大讯飞","value":12.4},{"name":"通策医疗","value":12.9},{"name":"大华股份","value":13.4},{"name":"片仔癀","value":16.9},{"name":"顺发恒业","value":17.4},{"name":"东方雨虹","value":19.4},{"name":"长春高新","value":24.8},{"name":"华夏幸福","value":26.5},{"name":"三安光电","value":37.4}],"date":"2008年6月"},{"data":[{"name":"科大讯飞","value":15.4},{"name":"金证股份","value":15.5},{"name":"顺发恒业","value":17.4},{"name":"大华股份","value":17.7},{"name":"片仔癀","value":19.2},{"name":"东方雨虹","value":19.4},{"name":"通策医疗","value":20.5},{"name":"华夏幸福","value":27.4},{"name":"三安光电","value":37.4},{"name":"长春高新","value":39.1}],"date":"2008年7月"},{"data":[{"name":"金证股份","value":13.6},{"name":"阳光城","value":14.4},{"name":"科大讯飞","value":15.1},{"name":"大华股份","value":15.8},{"name":"通策医疗","value":17.0},{"name":"顺发恒业","value":17.4},{"name":"片仔癀","value":18.7},{"name":"东方雨虹","value":19.4},{"name":"华夏幸福","value":27.3},{"name":"长春高新","value":29.9}],"date":"2008年8月"},{"data":[{"name":"金证股份","value":17.4},{"name":"美年健康","value":17.7},{"name":"阳光城","value":17.9},{"name":"大华股份","value":18.0},{"name":"东方雨虹","value":19.4},{"name":"通策医疗","value":21.3},{"name":"科大讯飞","value":21.9},{"name":"片仔癀","value":25.0},{"name":"长春高新","value":40.1},{"name":"华夏幸福","value":49.4}],"date":"2008年9月"},{"data":[{"name":"伊利股份","value":19.0},{"name":"古井贡酒","value":19.4},{"name":"大华股份","value":20.7},{"name":"通策医疗","value":22.9},{"name":"阳光城","value":23.3},{"name":"东方雨虹","value":25.1},{"name":"片仔癀","value":27.3},{"name":"科大讯飞","value":29.7},{"name":"长春高新","value":46.3},{"name":"华夏幸福","value":56.4}],"date":"2008年10月"},{"data":[{"name":"伊利股份","value":25.9},{"name":"金证股份","value":26.0},{"name":"科大讯飞","value":26.2},{"name":"通策医疗","value":26.8},{"name":"美年健康","value":27.7},{"name":"片仔癀","value":27.7},{"name":"东方雨虹","value":29.2},{"name":"阳光城","value":30.5},{"name":"长春高新","value":49.3},{"name":"华夏幸福","value":89.6}],"date":"2008年11月"},{"data":[{"name":"大华股份","value":21.8},{"name":"阳光城","value":22.2},{"name":"伊利股份","value":23.0},{"name":"金证股份","value":23.1},{"name":"通策医疗","value":23.1},{"name":"美年健康","value":23.5},{"name":"科大讯飞","value":26.0},{"name":"片仔癀","value":27.2},{"name":"长春高新","value":42.7},{"name":"华夏幸福","value":77.3}],"date":"2008年12月"}
				,{"data":[{"name":"浪潮信息","value":18.8},{"name":"古井贡酒","value":19.6},{"name":"科大讯飞","value":19.9},{"name":"美年健康","value":20.2},{"name":"通策医疗","value":20.6},{"name":"伊利股份","value":22.2},{"name":"金证股份","value":22.4},{"name":"片仔癀","value":24.1},{"name":"长春高新","value":28.4},{"name":"华夏幸福","value":66.5}],"date":"2009年1月"},{"data":[{"name":"大华股份","value":16.4},{"name":"通策医疗","value":17.2},{"name":"美年健康","value":17.3},{"name":"顺发恒业","value":17.4},{"name":"古井贡酒","value":18.1},{"name":"科大讯飞","value":18.2},{"name":"伊利股份","value":19.2},{"name":"长春高新","value":19.7},{"name":"片仔癀","value":21.4},{"name":"华夏幸福","value":58.7}],"date":"2009年2月"},{"data":[{"name":"伊利股份","value":15.3},{"name":"美年健康","value":16.1},{"name":"古井贡酒","value":16.4},{"name":"通策医疗","value":16.4},{"name":"大华股份","value":16.7},{"name":"顺发恒业","value":17.4},{"name":"科大讯飞","value":18.7},{"name":"长春高新","value":18.8},{"name":"片仔癀","value":20.2},{"name":"华夏幸福","value":53.1}],"date":"2009年3月"},{"data":[{"name":"浪潮信息","value":12.9},{"name":"伊利股份","value":14.1},{"name":"古井贡酒","value":14.1},{"name":"美年健康","value":14.3},{"name":"科大讯飞","value":15.0},{"name":"大华股份","value":15.1},{"name":"长春高新","value":15.2},{"name":"顺发恒业","value":17.4},{"name":"片仔癀","value":18.7},{"name":"华夏幸福","value":41.4}],"date":"2009年4月"},{"data":[{"name":"先导智能","value":12.2},{"name":"美年健康","value":12.2},{"name":"通策医疗","value":12.7},{"name":"古井贡酒","value":13.0},{"name":"科大讯飞","value":13.8},{"name":"大华股份","value":15.7},{"name":"长春高新","value":16.5},{"name":"顺发恒业","value":17.4},{"name":"片仔癀","value":19.6},{"name":"华夏幸福","value":44.7}],"date":"2009年5月"},{"data":[{"name":"恒瑞医药","value":11.6},{"name":"伊利股份","value":11.9},{"name":"美年健康","value":12.0},{"name":"先导智能","value":12.2},{"name":"科大讯飞","value":13.9},{"name":"长春高新","value":14.6},{"name":"大华股份","value":14.8},{"name":"顺发恒业","value":17.4},{"name":"片仔癀","value":19.0},{"name":"华夏幸福","value":39.5}],"date":"2009年6月"},{"data":[{"name":"中科曙光","value":11.4},{"name":"伊利股份","value":11.5},{"name":"美年健康","value":11.6},{"name":"通策医疗","value":12.1},{"name":"先导智能","value":12.2},{"name":"科大讯飞","value":14.0},{"name":"大华股份","value":14.9},{"name":"长春高新","value":15.4},{"name":"片仔癀","value":17.6},{"name":"华夏幸福","value":35.0}],"date":"2009年7月"},{"data":[{"name":"伊利股份","value":10.6},{"name":"恒瑞医药","value":10.7},{"name":"中航资本","value":11.1},{"name":"通策医疗","value":11.3},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"大华股份","value":13.2},{"name":"片仔癀","value":14.8},{"name":"华夏幸福","value":23.5}],"date":"2009年8月"},{"data":[{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"长春高新","value":12.3},{"name":"浪潮信息","value":12.6},{"name":"通策医疗","value":12.7},{"name":"金证股份","value":13.1},{"name":"片仔癀","value":15.5},{"name":"大华股份","value":15.6},{"name":"华夏幸福","value":24.5}],"date":"2009年9月"},{"data":[{"name":"浪潮信息","value":11.2},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"长春高新","value":11.6},{"name":"金证股份","value":12.1},{"name":"先导智能","value":12.2},{"name":"片仔癀","value":13.0},{"name":"大华股份","value":14.1},{"name":"通策医疗","value":14.5},{"name":"华夏幸福","value":22.9}],"date":"2009年10月"},{"data":[{"name":"浪潮信息","value":10.4},{"name":"金证股份","value":10.8},{"name":"片仔癀","value":11.0},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"通策医疗","value":11.5},{"name":"先导智能","value":12.2},{"name":"大华股份","value":13.5},{"name":"华夏幸福","value":20.5}],"date":"2009年11月"},{"data":[{"name":"东方财富","value":9.5},{"name":"长春高新","value":9.5},{"name":"隆基股份","value":9.6},{"name":"大华股份","value":10.0},{"name":"片仔癀","value":10.5},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":18.2}],"date":"2009年12月"}
				,{"data":[{"name":"东方财富","value":9.5},{"name":"隆基股份","value":9.6},{"name":"通策医疗","value":9.7},{"name":"爱尔眼科","value":9.8},{"name":"片仔癀","value":10.8},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":17.2}],"date":"2010年1月"},{"data":[{"name":"东方财富","value":9.5},{"name":"隆基股份","value":9.6},{"name":"通策医疗","value":9.9},{"name":"爱尔眼科","value":10.9},{"name":"片仔癀","value":11.0},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":19.0}],"date":"2010年2月"},{"data":[{"name":"上海钢联","value":9.5},{"name":"东方财富","value":9.5},{"name":"隆基股份","value":9.6},{"name":"爱尔眼科","value":9.7},{"name":"片仔癀","value":10.8},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":16.0}],"date":"2010年3月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"立讯精密","value":9.4},{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"片仔癀","value":11.7},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":12.5}],"date":"2010年4月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"立讯精密","value":9.4},{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"片仔癀","value":10.3},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":17.7}],"date":"2010年5月"},{"data":[{"name":"立讯精密","value":9.4},{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"片仔癀","value":9.6},{"name":"金证股份","value":10.4},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":22.6}],"date":"2010年6月"},{"data":[{"name":"隆基股份","value":9.6},{"name":"东方财富","value":10.3},{"name":"片仔癀","value":10.7},{"name":"金证股份","value":10.9},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"通策医疗","value":11.4},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":24.1}],"date":"2010年7月"},{"data":[{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"片仔癀","value":9.7},{"name":"金证股份","value":10.0},{"name":"东方财富","value":10.4},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":21.9}],"date":"2010年8月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"立讯精密","value":9.4},{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"东方财富","value":10.7},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":21.8}],"date":"2010年9月"},{"data":[{"name":"同花顺","value":9.4},{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"立讯精密","value":10.0},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"东方财富","value":12.0},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":24.2}],"date":"2010年10月"},{"data":[{"name":"立讯精密","value":8.5},{"name":"牧原股份","value":9.1},{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"东方财富","value":10.5},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":25.2}],"date":"2010年11月"},{"data":[{"name":"平治信息","value":8.1},{"name":"牧原股份","value":9.1},{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"东方财富","value":10.2},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":25.4}],"date":"2010年12月"}
				,{"data":[{"name":"同花顺","value":8.2},{"name":"牧原股份","value":9.1},{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"东方财富","value":10.4},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":28.1}],"date":"2011年1月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"同花顺","value":9.8},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"东方财富","value":12.1},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":27.3}],"date":"2011年2月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"同花顺","value":9.1},{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"东方财富","value":11.7},{"name":"先导智能","value":12.2},{"name":"华夏幸福","value":25.4}],"date":"2011年3月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"同花顺","value":9.9},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"东方财富","value":13.5},{"name":"华夏幸福","value":25.4}],"date":"2011年4月"},{"data":[{"name":"派生科技","value":9.2},{"name":"上海钢联","value":9.5},{"name":"隆基股份","value":9.6},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"同花顺","value":11.8},{"name":"先导智能","value":12.2},{"name":"东方财富","value":15.3},{"name":"华夏幸福","value":22.9}],"date":"2011年5月"},{"data":[{"name":"金证股份","value":9.6},{"name":"隆基股份","value":9.6},{"name":"派生科技","value":10.4},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"同花顺","value":12.8},{"name":"东方财富","value":16.5},{"name":"华夏幸福","value":19.4}],"date":"2011年6月"},{"data":[{"name":"网宿科技","value":9.7},{"name":"上海钢联","value":10.1},{"name":"派生科技","value":10.5},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"同花顺","value":13.1},{"name":"华夏幸福","value":14.3},{"name":"东方财富","value":16.5}],"date":"2011年7月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"隆基股份","value":9.6},{"name":"派生科技","value":10.5},{"name":"华夏幸福","value":10.7},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"同花顺","value":13.4},{"name":"东方财富","value":16.1}],"date":"2011年8月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"网宿科技","value":9.1},{"name":"隆基股份","value":9.6},{"name":"派生科技","value":10.6},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"同花顺","value":14.1},{"name":"东方财富","value":15.6}],"date":"2011年9月"},{"data":[{"name":"上海钢联","value":9.7},{"name":"网宿科技","value":10.2},{"name":"卫宁健康","value":10.7},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"派生科技","value":12.0},{"name":"先导智能","value":12.2},{"name":"同花顺","value":15.8},{"name":"东方财富","value":19.6}],"date":"2011年10月"},{"data":[{"name":"上海钢联","value":9.0},{"name":"牧原股份","value":9.1},{"name":"隆基股份","value":9.6},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"派生科技","value":11.7},{"name":"先导智能","value":12.2},{"name":"同花顺","value":14.9},{"name":"东方财富","value":16.8}],"date":"2011年11月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"隆基股份","value":9.6},{"name":"网宿科技","value":9.6},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":12.3},{"name":"同花顺","value":15.5},{"name":"东方财富","value":17.3}],"date":"2011年12月"}
				,{"data":[{"name":"网宿科技","value":9.5},{"name":"隆基股份","value":9.6},{"name":"信维通信","value":9.7},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":14.7},{"name":"同花顺","value":19.4},{"name":"东方财富","value":20.0}],"date":"2012年1月"},{"data":[{"name":"金证股份","value":10.0},{"name":"网宿科技","value":10.6},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"信维通信","value":11.9},{"name":"先导智能","value":12.2},{"name":"派生科技","value":15.5},{"name":"同花顺","value":20.7},{"name":"东方财富","value":21.7}],"date":"2012年2月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"隆基股份","value":9.6},{"name":"信维通信","value":10.5},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":14.0},{"name":"东方财富","value":16.5},{"name":"同花顺","value":16.8}],"date":"2012年3月"},{"data":[{"name":"金证股份","value":9.4},{"name":"隆基股份","value":9.6},{"name":"信维通信","value":9.8},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":16.2},{"name":"东方财富","value":19.3},{"name":"同花顺","value":19.3}],"date":"2012年4月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"信维通信","value":9.4},{"name":"隆基股份","value":10.5},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":15.6},{"name":"东方财富","value":16.0},{"name":"同花顺","value":17.5}],"date":"2012年5月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"信维通信","value":9.4},{"name":"隆基股份","value":11.0},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":14.9},{"name":"东方财富","value":16.6},{"name":"同花顺","value":17.3}],"date":"2012年6月"},{"data":[{"name":"金证股份","value":9.7},{"name":"信维通信","value":10.9},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"隆基股份","value":12.1},{"name":"先导智能","value":12.2},{"name":"派生科技","value":12.4},{"name":"同花顺","value":17.3},{"name":"东方财富","value":20.3}],"date":"2012年7月"},{"data":[{"name":"利亚德","value":10.8},{"name":"中航资本","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":13.7},{"name":"信维通信","value":15.2},{"name":"同花顺","value":16.0},{"name":"隆基股份","value":17.2},{"name":"东方财富","value":22.5}],"date":"2012年8月"},{"data":[{"name":"中际旭创","value":9.8},{"name":"利亚德","value":10.2},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":12.4},{"name":"信维通信","value":12.7},{"name":"隆基股份","value":16.6},{"name":"同花顺","value":17.4},{"name":"东方财富","value":23.1}],"date":"2012年9月"},{"data":[{"name":"中际旭创","value":10.5},{"name":"利亚德","value":10.9},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"信维通信","value":13.1},{"name":"派生科技","value":13.7},{"name":"隆基股份","value":16.4},{"name":"同花顺","value":21.5},{"name":"东方财富","value":23.5}],"date":"2012年10月"},{"data":[{"name":"信维通信","value":10.0},{"name":"中际旭创","value":10.9},{"name":"利亚德","value":10.9},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":14.3},{"name":"隆基股份","value":16.6},{"name":"同花顺","value":22.2},{"name":"东方财富","value":26.3}],"date":"2012年11月"},{"data":[{"name":"中科曙光","value":11.4},{"name":"上海钢联","value":12.0},{"name":"先导智能","value":12.2},{"name":"利亚德","value":12.6},{"name":"中际旭创","value":12.7},{"name":"信维通信","value":12.8},{"name":"派生科技","value":16.1},{"name":"隆基股份","value":18.1},{"name":"同花顺","value":25.2},{"name":"东方财富","value":31.2}],"date":"2012年12月"}
				,{"data":[{"name":"中际旭创","value":9.8},{"name":"上海钢联","value":10.0},{"name":"信维通信","value":11.0},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":14.0},{"name":"隆基股份","value":15.9},{"name":"同花顺","value":22.6},{"name":"东方财富","value":25.7}],"date":"2013年1月"},{"data":[{"name":"利亚德","value":9.9},{"name":"中际旭创","value":10.4},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"信维通信","value":11.5},{"name":"先导智能","value":12.2},{"name":"隆基股份","value":12.8},{"name":"派生科技","value":13.2},{"name":"同花顺","value":21.0},{"name":"东方财富","value":24.1}],"date":"2013年2月"},{"data":[{"name":"中际旭创","value":9.7},{"name":"上海钢联","value":10.0},{"name":"康泰生物","value":11.3},{"name":"信维通信","value":11.4},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"隆基股份","value":12.4},{"name":"派生科技","value":12.5},{"name":"东方财富","value":16.9},{"name":"同花顺","value":20.0}],"date":"2013年3月"},{"data":[{"name":"上海钢联","value":10.2},{"name":"利亚德","value":10.4},{"name":"中际旭创","value":10.5},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":14.0},{"name":"隆基股份","value":14.9},{"name":"东方财富","value":16.7},{"name":"同花顺","value":20.1}],"date":"2013年4月"},{"data":[{"name":"牧原股份","value":9.1},{"name":"中际旭创","value":9.8},{"name":"上海钢联","value":11.2},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"隆基股份","value":14.4},{"name":"东方财富","value":14.6},{"name":"派生科技","value":14.8},{"name":"同花顺","value":21.3}],"date":"2013年5月"},{"data":[{"name":"平治信息","value":8.1},{"name":"中际旭创","value":8.8},{"name":"牧原股份","value":9.1},{"name":"东方财富","value":10.9},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"隆基股份","value":11.6},{"name":"先导智能","value":12.2},{"name":"派生科技","value":13.1},{"name":"同花顺","value":17.1}],"date":"2013年6月"},{"data":[{"name":"世纪华通","value":9.0},{"name":"牧原股份","value":9.1},{"name":"南极电商","value":9.2},{"name":"中际旭创","value":10.5},{"name":"隆基股份","value":11.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":15.4},{"name":"同花顺","value":17.0}],"date":"2013年7月"},{"data":[{"name":"信维通信","value":8.4},{"name":"隆基股份","value":8.9},{"name":"世纪华通","value":9.0},{"name":"牧原股份","value":9.1},{"name":"中际旭创","value":10.5},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"同花顺","value":11.5},{"name":"先导智能","value":12.2},{"name":"派生科技","value":14.8}],"date":"2013年8月"},{"data":[{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"世纪华通","value":8.3},{"name":"牧原股份","value":9.1},{"name":"中际旭创","value":9.7},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"同花顺","value":11.8},{"name":"先导智能","value":12.2},{"name":"派生科技","value":13.8}],"date":"2013年9月"},{"data":[{"name":"平治信息","value":8.1},{"name":"世纪华通","value":8.4},{"name":"信维通信","value":8.5},{"name":"中际旭创","value":9.0},{"name":"牧原股份","value":9.1},{"name":"同花顺","value":9.8},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"派生科技","value":12.7}],"date":"2013年10月"},{"data":[{"name":"世纪华通","value":8.0},{"name":"平治信息","value":8.1},{"name":"牧原股份","value":9.1},{"name":"中际旭创","value":9.5},{"name":"康泰生物","value":11.3},{"name":"信维通信","value":11.4},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"同花顺","value":12.4},{"name":"派生科技","value":13.8}],"date":"2013年11月"},{"data":[{"name":"至纯科技","value":7.4},{"name":"世纪华通","value":8.0},{"name":"平治信息","value":8.1},{"name":"牧原股份","value":9.1},{"name":"信维通信","value":10.1},{"name":"派生科技","value":11.3},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"同花顺","value":11.8},{"name":"先导智能","value":12.2}],"date":"2013年12月"}
				,{"data":[{"name":"至纯科技","value":7.4},{"name":"世纪华通","value":8.0},{"name":"平治信息","value":8.1},{"name":"牧原股份","value":9.1},{"name":"信维通信","value":9.2},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"派生科技","value":11.8},{"name":"先导智能","value":12.2},{"name":"同花顺","value":12.5}],"date":"2014年1月"},{"data":[{"name":"华友钴业","value":6.9},{"name":"至纯科技","value":7.4},{"name":"信维通信","value":7.9},{"name":"平治信息","value":8.1},{"name":"牧原股份","value":10.2},{"name":"派生科技","value":10.5},{"name":"同花顺","value":10.8},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2}],"date":"2014年2月"},{"data":[{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"隆基股份","value":8.1},{"name":"信维通信","value":8.3},{"name":"牧原股份","value":9.0},{"name":"派生科技","value":10.9},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"同花顺","value":12.9}],"date":"2014年3月"},{"data":[{"name":"至纯科技","value":7.4},{"name":"隆基股份","value":7.7},{"name":"平治信息","value":8.1},{"name":"信维通信","value":9.0},{"name":"牧原股份","value":10.2},{"name":"派生科技","value":10.7},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2},{"name":"同花顺","value":13.8}],"date":"2014年4月"},{"data":[{"name":"美年健康","value":7.5},{"name":"隆基股份","value":7.5},{"name":"信维通信","value":7.6},{"name":"平治信息","value":8.1},{"name":"牧原股份","value":8.9},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"派生科技","value":11.7},{"name":"先导智能","value":12.2},{"name":"同花顺","value":12.7}],"date":"2014年5月"},{"data":[{"name":"美年健康","value":7.2},{"name":"至纯科技","value":7.4},{"name":"隆基股份","value":7.5},{"name":"牧原股份","value":7.9},{"name":"平治信息","value":8.1},{"name":"同花顺","value":11.1},{"name":"派生科技","value":11.2},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2}],"date":"2014年6月"},{"data":[{"name":"华友钴业","value":6.9},{"name":"牧原股份","value":6.9},{"name":"美年健康","value":7.0},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"派生科技","value":9.8},{"name":"同花顺","value":10.5},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2}],"date":"2014年7月"},{"data":[{"name":"信维通信","value":6.7},{"name":"兆易创新","value":6.8},{"name":"华友钴业","value":6.9},{"name":"同花顺","value":7.3},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"派生科技","value":9.6},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2}],"date":"2014年8月"},{"data":[{"name":"药石科技","value":6.1},{"name":"花园生物","value":6.2},{"name":"兆易创新","value":6.8},{"name":"华友钴业","value":6.9},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"派生科技","value":8.8},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2}],"date":"2014年9月"},{"data":[{"name":"药石科技","value":6.1},{"name":"花园生物","value":6.2},{"name":"兆易创新","value":6.8},{"name":"华友钴业","value":6.9},{"name":"派生科技","value":7.3},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2}],"date":"2014年10月"},{"data":[{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"华友钴业","value":6.9},{"name":"派生科技","value":7.1},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3},{"name":"中科曙光","value":11.4},{"name":"先导智能","value":12.2}],"date":"2014年11月"},{"data":[{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"派生科技","value":6.4},{"name":"兆易创新","value":6.8},{"name":"华友钴业","value":6.9},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3},{"name":"先导智能","value":12.2}],"date":"2014年12月"}
				,{"data":[{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"牧原股份","value":6.9},{"name":"华友钴业","value":6.9},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"派生科技","value":8.9},{"name":"康泰生物","value":11.3},{"name":"先导智能","value":12.2}],"date":"2015年1月"},{"data":[{"name":"牧原股份","value":5.8},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"华友钴业","value":6.2},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"派生科技","value":8.3},{"name":"康泰生物","value":11.3},{"name":"先导智能","value":12.2}],"date":"2015年2月"},{"data":[{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"派生科技","value":7.7},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3},{"name":"先导智能","value":12.2}],"date":"2015年3月"},{"data":[{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"派生科技","value":6.2},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3},{"name":"先导智能","value":12.2}],"date":"2015年4月"},{"data":[{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3},{"name":"先导智能","value":12.2}],"date":"2015年5月"},{"data":[{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2015年6月"},{"data":[{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2015年7月"},{"data":[{"name":"派生科技","value":5.1},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2015年8月"},{"data":[{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"派生科技","value":7.1},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2015年9月"},{"data":[{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"派生科技","value":7.1},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2015年10月"},{"data":[{"name":"派生科技","value":5.4},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2015年11月"},{"data":[{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2015年12月"}
				,{"data":[{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2016年1月"},{"data":[{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"派生科技","value":6.3},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2016年2月"},{"data":[{"name":"派生科技","value":5.5},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2016年3月"},{"data":[{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2016年4月"},{"data":[{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2016年5月"},{"data":[{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2016年6月"},{"data":[{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2016年7月"},{"data":[{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"兆易创新","value":6.8},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2016年8月"},{"data":[{"name":"建科院","value":4.4},{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2016年9月"},{"data":[{"name":"建科院","value":4.4},{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2016年10月"},{"data":[{"name":"建科院","value":4.4},{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2016年11月"},{"data":[{"name":"建科院","value":4.4},{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"至纯科技","value":7.4},{"name":"平治信息","value":8.1},{"name":"康泰生物","value":11.3}],"date":"2016年12月"}
				,{"data":[{"name":"普利制药","value":4.3},{"name":"建科院","value":4.4},{"name":"泛微网络","value":5.0},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"至纯科技","value":7.4},{"name":"康泰生物","value":11.3}],"date":"2017年1月"},{"data":[{"name":"长川科技","value":3.7},{"name":"昭衍新药","value":3.9},{"name":"普利制药","value":4.3},{"name":"建科院","value":4.4},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1},{"name":"康泰生物","value":11.3}],"date":"2017年2月"},{"data":[{"name":"艾德生物","value":3.4},{"name":"长川科技","value":3.7},{"name":"昭衍新药","value":3.9},{"name":"普利制药","value":4.3},{"name":"建科院","value":4.4},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"寒锐钴业","value":6.1},{"name":"药石科技","value":6.1}],"date":"2017年3月"},{"data":[{"name":"开立医疗","value":3.1},{"name":"深南电路","value":3.1},{"name":"艾德生物","value":3.4},{"name":"长川科技","value":3.7},{"name":"昭衍新药","value":3.9},{"name":"建科院","value":4.4},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"药石科技","value":6.1}],"date":"2017年4月"},{"data":[{"name":"杭州园林","value":3.0},{"name":"东方通信","value":3.1},{"name":"深南电路","value":3.1},{"name":"艾德生物","value":3.4},{"name":"昭衍新药","value":3.9},{"name":"建科院","value":4.4},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"药石科技","value":6.1}],"date":"2017年5月"},{"data":[{"name":"华大基因","value":3.0},{"name":"深南电路","value":3.1},{"name":"东方通信","value":3.3},{"name":"艾德生物","value":3.4},{"name":"昭衍新药","value":3.9},{"name":"建科院","value":4.4},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"江丰电子","value":5.6},{"name":"药石科技","value":6.1}],"date":"2017年6月"},{"data":[{"name":"天风证券","value":3.0},{"name":"华大基因","value":3.0},{"name":"深南电路","value":3.1},{"name":"东方通信","value":3.3},{"name":"艾德生物","value":3.4},{"name":"昭衍新药","value":3.9},{"name":"建科院","value":4.4},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"药石科技","value":6.1}],"date":"2017年7月"},{"data":[{"name":"阿石创","value":2.8},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"深南电路","value":3.1},{"name":"艾德生物","value":3.4},{"name":"东方通信","value":3.4},{"name":"昭衍新药","value":3.9},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"药石科技","value":6.1}],"date":"2017年8月"},{"data":[{"name":"掌阅科技","value":2.6},{"name":"中新赛克","value":2.7},{"name":"阿石创","value":2.8},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"东方通信","value":3.1},{"name":"深南电路","value":3.1},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"药石科技","value":6.1}],"date":"2017年9月"},{"data":[{"name":"新疆交建","value":2.3},{"name":"长城军工","value":2.5},{"name":"东方通信","value":2.6},{"name":"中新赛克","value":2.7},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"深南电路","value":3.1},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"药石科技","value":6.1}],"date":"2017年10月"},{"data":[{"name":"新疆交建","value":2.3},{"name":"长城军工","value":2.5},{"name":"中新赛克","value":2.7},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"东方通信","value":3.0},{"name":"深南电路","value":3.1},{"name":"贵州燃气","value":5.6},{"name":"中石科技","value":5.6},{"name":"药石科技","value":6.1}],"date":"2017年11月"},{"data":[{"name":"宇信科技","value":2.0},{"name":"贝通信","value":2.1},{"name":"金力永磁","value":2.3},{"name":"新疆交建","value":2.3},{"name":"长城军工","value":2.5},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"东方通信","value":3.0},{"name":"深南电路","value":3.1},{"name":"中石科技","value":5.6}],"date":"2017年12月"}
				,{"data":[{"name":"中公教育","value":2.0},{"name":"宇信科技","value":2.0},{"name":"贝通信","value":2.1},{"name":"金力永磁","value":2.3},{"name":"新疆交建","value":2.3},{"name":"长城军工","value":2.5},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"东方通信","value":3.0},{"name":"中石科技","value":4.5}],"date":"2018年1月"},{"data":[{"name":"华林证券","value":1.9},{"name":"中公教育","value":1.9},{"name":"宇信科技","value":2.0},{"name":"贝通信","value":2.1},{"name":"金力永磁","value":2.3},{"name":"新疆交建","value":2.3},{"name":"长城军工","value":2.5},{"name":"康龙化成","value":2.8},{"name":"东方通信","value":2.9},{"name":"天风证券","value":3.0}],"date":"2018年2月"},{"data":[{"name":"中公教育","value":1.9},{"name":"通产丽星","value":2.0},{"name":"宇信科技","value":2.0},{"name":"贝通信","value":2.1},{"name":"金力永磁","value":2.3},{"name":"新疆交建","value":2.3},{"name":"长城军工","value":2.5},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"东方通信","value":3.5}],"date":"2018年3月"},{"data":[{"name":"华林证券","value":1.9},{"name":"中公教育","value":1.9},{"name":"宇信科技","value":2.0},{"name":"贝通信","value":2.1},{"name":"金力永磁","value":2.3},{"name":"新疆交建","value":2.3},{"name":"长城军工","value":2.5},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"东方通信","value":3.5}],"date":"2018年4月"},{"data":[{"name":"宇信科技","value":2.0},{"name":"通产丽星","value":2.0},{"name":"贝通信","value":2.1},{"name":"正邦科技","value":2.1},{"name":"金力永磁","value":2.3},{"name":"新疆交建","value":2.3},{"name":"长城军工","value":2.5},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"东方通信","value":3.4}],"date":"2018年5月"},{"data":[{"name":"华林证券","value":1.9},{"name":"宇信科技","value":2.0},{"name":"贝通信","value":2.1},{"name":"通产丽星","value":2.1},{"name":"金力永磁","value":2.3},{"name":"新疆交建","value":2.3},{"name":"长城军工","value":2.5},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"东方通信","value":3.9}],"date":"2018年6月"},{"data":[{"name":"宇信科技","value":2.0},{"name":"正邦科技","value":2.0},{"name":"贝通信","value":2.1},{"name":"金力永磁","value":2.3},{"name":"新疆交建","value":2.3},{"name":"长城军工","value":2.5},{"name":"通产丽星","value":2.6},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"东方通信","value":5.0}],"date":"2018年7月"},{"data":[{"name":"华林证券","value":1.9},{"name":"正邦科技","value":2.0},{"name":"宇信科技","value":2.0},{"name":"贝通信","value":2.1},{"name":"金力永磁","value":2.3},{"name":"新疆交建","value":2.3},{"name":"长城军工","value":2.5},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"东方通信","value":4.8}],"date":"2018年8月"},{"data":[{"name":"华林证券","value":1.9},{"name":"宇信科技","value":2.0},{"name":"贝通信","value":2.1},{"name":"市北高新","value":2.1},{"name":"正邦科技","value":2.2},{"name":"金力永磁","value":2.3},{"name":"新疆交建","value":2.3},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"东方通信","value":4.7}],"date":"2018年9月"},{"data":[{"name":"华林证券","value":1.9},{"name":"正邦科技","value":2.0},{"name":"通产丽星","value":2.0},{"name":"宇信科技","value":2.0},{"name":"贝通信","value":2.1},{"name":"市北高新","value":2.2},{"name":"新疆交建","value":2.3},{"name":"康龙化成","value":2.8},{"name":"天风证券","value":3.0},{"name":"东方通信","value":5.0}],"date":"2018年10月"},{"data":[{"name":"华林证券","value":1.9},{"name":"通产丽星","value":2.0},{"name":"宇信科技","value":2.0},{"name":"正邦科技","value":2.0},{"name":"贝通信","value":2.1},{"name":"风范股份","value":2.1},{"name":"新疆交建","value":2.3},{"name":"康龙化成","value":2.8},{"name":"市北高新","value":2.8},{"name":"东方通信","value":5.8}],"date":"2018年11月"},{"data":[{"name":"隆利科技","value":1.4},{"name":"蔚蓝生物","value":1.4},{"name":"新乳业","value":1.6},{"name":"新疆交建","value":1.7},{"name":"雄韬股份","value":1.7},{"name":"风范股份","value":1.9},{"name":"华林证券","value":1.9},{"name":"通产丽星","value":2.1},{"name":"康龙化成","value":2.8},{"name":"东方通信","value":4.0}],"date":"2018年12月"}
			]};
			setTimeout(function(){
				that.render(myChart, data2)
			},200)
			
//			$.get('json/data_asc1.json', function(data) {
//				that.data = data;
//				that.render(myChart, data)
//			})
		}
	},
	render: function(myChart, data) {
		if ($('#loading_mask')) {
			$('#loading_mask').hide()
		}
		var dataList = data.dataList.reverse();
		//dataList = dataList.reverse()
		var title = navigator.userAgent.match(/mobile/i) ? '' : data.title;
		var dataLength = dataList.length - 1;
		var _array = [],
			intervalTime, isAnimation;

		var u = navigator.userAgent;
		if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
			intervalTime = 200
			isAnimation = false;
		} else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
			intervalTime = 200;
			isAnimation = true;
		} else {
			intervalTime = 200;
			isAnimation = true;
		}
		u = null;

		option = {
			baseOption: {
				timeline: {
					axisType: 'category',
					orient: 'vertical',
					autoPlay: true,
					inverse: true,
					loop: false,
					playInterval: intervalTime,
					left: null,
					right: 0,
					top: 20,
					bottom: 20,
					width: 55,
					height: null,
					label: {
						normal: {
							
							textStyle: {
								color: '#fff',
								
							}
						},
						emphasis: {
							textStyle: {
								color: '#fff'
							}
						}
					},
					symbol: 'none',
					lineStyle: {
						color: '#555'
					},
					checkpointStyle: {
						color: '#bbb',
						borderColor: '#777',
						borderWidth: 2
					},
					controlStyle: {
						show: false,
						showNextBtn: false,
						showPrevBtn: false
					},
					data: [],
					show: false
				},
				//backgroundColor: '#333',
				title: [{
					text: "",
					textAlign: 'left',
					left: 5,
					top: 5,
					textStyle: {
						fontSize: 55,
						color: 'rgba(255, 255, 255, 0.7)'
					}
				}, {
					text: title,
					left: 'center',
					top: 10,
					textStyle: {
						color: '#ccc',
						fontWeight: 'normal',
						fontSize: $(window).width() > $(window).height() ? 30 : 50
					}
				}],
				tooltip: {
					padding: 5,
					backgroundColor: '#222',
					borderColor: '#777',
					borderWidth: 1,
					formatter: function(params) {
						return params.data.name + " : " + Number(params.data.value).toFixed(1) + "倍";
					},
					textStyle: {
						fontSize: $(window).width() > $(window).height() ? 18 : 28
					}
				},
				grid: {
					left: $(window).width() > $(window).height() ? 20 : 60,
					right: $(window).width() > $(window).height() ? -120 : -210,
					bottom: '3%',
					top: 80,
					containLabel: true
				},
				xAxis: {
					type: 'value',
					name: "",
					nameGap: 25,
					nameLocation: 'middle',
					//		            position:'top',
					nameTextStyle: {
						fontSize: $(window).width() > $(window).height() ? 18 : 28,
					},
					splitLine: {
						show: false
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: '#ccc',
							width: 2
						}
					},
					axisLabel: {
						show: true,
						formatter: function(value, index) {
							return value + '倍'
						},
						textStyle: {
							fontSize: $(window).width() > $(window).height() ? 18 : 28,
						},
					},
					axisTick: {
						show: false
					}
				},
				yAxis: {
					type: 'category',
					data: ['', '', '', '', '', '', '', '', '', '']
				},
				/*graphic: [{
					type: 'image',
					id: 'logo',
					right: 100,
					top: 0,
					z: -10,
					bounding: 'raw',
					origin: [75, 75],
					style: {
						image: 'images/calendar.png',
						width: $(window).width() > $(window).height() ? 182 : 250,
						height: $(window).width() > $(window).height() ? 52 : 80
					}
				}],*/
				series: [{
					type: 'bar',
					barCategoryGap: '40%',
				}],
				animation: isAnimation,
				animationDuration: 0,
				animationDurationUpdate: intervalTime,
				animationEasingUpdate: 'quinticInOut'
			},
			options: []
		};
		for (var n = 0; n < dataList.length; n++) {
			option.baseOption.timeline.data.push(dataList[n].date);
			var item = dataList[n].data;
			var aaa = [];
			var colors = [
				"#6c4322", "#874f28", "#b4680e", "#c5710d", "#e38006", "#fb8c01", "#ff9900", "#ac0e4c", "#b91555", '#c2195b'
			];
			for (var i = 0; i < item.length; i++) {
				aaa.push(item[i].value);

				//var color = i < 7 ? 'rgba(	255,140,0,' + (0.2 + 0.08 * i) + ')' : 'rgba(194,53,63,' + (1 - 0.2 * (item.length - 1 - i)) + ')';
				item[i].itemStyle = {
					
					normal: {
						show: true,
						barBorderRadius: 50,
						color: colors[i],
						borderColor: '#f88bb5',
						borderWidth: i > 6 ? 3 : 0,
						borderType: 'solid'
					}
				}
				item[i].label = {
					normal: {
						show: true
						//						,fontWeight:i>6?'boloder':'normal'						
					}
				}
			}

			var tmp_series = {
				type: 'bar',
				data: dataList[n].data,
				barWidth: $(window).width() > $(window).height() ? 30 : 80,
				label: {
					normal: {
						show: true,
						fontSize: $(window).width() > $(window).height() ? 14 : 40,
						position: 'insideLeft',
						formatter: function(param) {
							return "  " + param.data.name;
						}
					}
				}
			}
			option.options.push({
				title: {
					show: true,
					'text': dataList[n].date + " 至今涨幅",
					left:'center',
					textStyle:{
						align:'center',
						width:'100%'
					}
				},
				yAxis: [{
					type: 'category',
					name: "",
					nameTextStyle: {
						color: '#ccc',
						fontSize: $(window).width() > $(window).height() ? 18 : 28
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: '#ccc',
							width: 2
						}
					},
					splitLine: {
						show: false
					},
					axisLabel: {
						align: 'right',
						fontSize: $(window).width() > $(window).height() ? 18 : 28,
						formatter: function(value, index) {
							if (index > 6) {
								return '{value2|' + (10 - index) + '}';
							} else {
								return '{value3|' + (10 - index) + '}';
							}
						},
						rich: {
							value2: {
								align: 'center',
								backgroundColor: '#947497',
								borderRadius: 18,
								width: $(window).width() > $(window).height() ? 30 : 80,
								height: $(window).width() > $(window).height() ? 30 : 80,
								fontSize: $(window).width() > $(window).height() ? 18 : 48,
							},
							value3: {
								align: 'center',
								borderColor: '#947497',
								borderWidth: 3,
								borderRadius: 18,
								width: $(window).width() > $(window).height() ? 30 : 80,
								height: $(window).width() > $(window).height() ? 30 : 80,
								//backgroundColor:'rgba(0,0,0,0.1)',
								fontSize: $(window).width() > $(window).height() ? 18 : 48,
							}
						}
					},
					axisTick: {
						show: false
					},
					data: ['', '', '', '', '', '', '', '', '', '']
				}, {
					type: 'category',
					name: "",
					nameTextStyle: {
						color: '#ccc',
						fontSize: $(window).width() > $(window).height() ? 18 : 28
					},
					axisLine: {
						show: false,
						lineStyle: {
							color: '#ccc',
							width: 2
						}
					},
					splitLine: {
						show: false
					},
					axisLabel: {
						show: true,
						fontWeight: 'bolder',
						formatter: function(value, index) {
							if (index > 6) {
								return Number(value).toFixed(1) + '倍';
							} else {
								return;
							}
						},
						align: 'right',
						margin: 230,
						fontSize: $(window).width() > $(window).height() ? 28 : 48
					},
					axisTick: {
						show: false
					},
					data: aaa
				}],
				series: tmp_series
			});

			_array.push([item[9], dataList[n].date])
			//					_tmp=null;
			item = null;
			tmp_series = null;
			aaa = null;

		}
		myChart.setOption(option);

		//$('body').css('backgroundColor','#333')
		option = null;
		dataList = null;

		_array = _array.sort(function(a, b) {
			return b[0].value - a[0].value;
		});
		//		$('#numone_name').html(_array[0][0].name);
		//		$('#numone_date').html(_array[0][1]);
		//		$('#numone_gain').html('+'+_array[0][0].value*100+'%');
		$('#zongjie').html('在' + _array[0][1] + '，买入' + _array[0][0].name +
			'并</br><span style="font-weight: bold;font-size:60px">持有至今</span>，可获取' + (_array[0][0].value.toFixed(0) - 1) +
			'倍收益');

		_array = null;

		myChart.on('timelinechanged', function() {
			var index = myChart.getOption().timeline[0].currentIndex;
			if (index == dataLength) {
				if ($(window).width() < $(window).height() && ($(window).height() / $(window).width() >= 1)) {
					$('#exContainer').css('display', 'block');
				}
				//				$('#maskContainer').css('display','block');
				$('#maskContainer').fadeIn(1000);
			}
		})
	}

}
