//取消炫光特效方法

require.config({
    paths: {
        echarts: '/resource/judgmentAnalysis/js/echarts/build/dist'
    }
});
//地图对象
var myChartForMap;    
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/map' // 使用柱状图就加载bar模块，按需加载
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
        	var mapHeight = $(document).height()-100;
        	if($(".mapMod").height() == 0 || $(".mapMod").height() == null){
        		$('#mapMainOfDetail').height(mapHeight);
        	}else{
        		$('#mapMainOfDetail').height($(".mapMod").height());
        	}
            myChartForMap = ec.init($('#mapMainOfDetail')[0]); 
            var MPATH = "/resource/judgmentAnalysis/js/echarts/";//自定义地图geojson数据加载路径
			var cityMap = {
				"阿坝藏族羌族自治州": MPATH+"json/阿坝藏族羌族自治州",
				"凉山彝族自治州":  MPATH+"json/凉山彝族自治州",
				"甘孜藏族自治州":  MPATH+"json/甘孜藏族自治州",
				"绵阳市":  MPATH+"json/绵阳市",
				"泸州市":  MPATH+"json/泸州市",
				"达州市":  MPATH+"json/达州市",
				"广元市":  MPATH+"json/广元市",
				"雅安市":  MPATH+"json/雅安市",
				"宜宾市":  MPATH+"json/宜宾市",
				"乐山市":  MPATH+"json/乐山市",
				"南充市":  MPATH+"json/南充市",
				"巴中市":  MPATH+"json/巴中市",
				"成都市":  MPATH+"json/成都市",
				"资阳市":  MPATH+"json/资阳市",
				"攀枝花市":  MPATH+"json/攀枝花市",
				"眉山市":  MPATH+"json/眉山市",
				"广安市": MPATH+"json/广安市",
				"德阳市": MPATH+"json/德阳市",
				"内江市": MPATH+"json/内江市",
				"遂宁市": MPATH+"json/遂宁市",
				"自贡市": MPATH+"json/自贡市",
				//广安市下所有乡镇
				"广安区": MPATH+"json/广安市广安区",
				"华蓥市": MPATH+"json/广安市华蓥市",
				"邻水县": MPATH+"json/广安市邻水县",
				"武胜县": MPATH+"json/广安市武胜县",
				"岳池县": MPATH+"json/广安市岳池县",
				//资阳市下所有乡镇
				"简阳市": MPATH+"json/资阳简阳市",
				"乐至县": MPATH+"json/资阳乐至县",
				"安岳县": MPATH+"json/资阳安岳县",
				"雁江区": MPATH+"json/资阳雁江区",
				//乐山市下所有乡镇
				"峨边彝族自治县": MPATH+"json/乐山峨边彝族自治县",
				"峨眉山市": MPATH+"json/乐山峨眉山市",
				"夹江县": MPATH+"json/乐山夹江县",
				"犍为县": MPATH+"json/乐山犍为县",
				"金口河区": MPATH+"json/乐山金口河区",
				"井研县": MPATH+"json/乐山井研县",
				"马边彝族自治县": MPATH+"json/乐山马边彝族自治县",
				"沐川县": MPATH+"json/乐山沐川县",
				"沙湾区": MPATH+"json/乐山沙湾区",
				"乐山市中区": MPATH+"json/乐山市中区",
				"五通桥区": MPATH+"json/乐山五通桥区",
				//凉山彝族自治州下所有乡镇
				"布拖县": MPATH+"json/凉山布拖县",
				"德昌县": MPATH+"json/凉山德昌县",
				"甘洛县": MPATH+"json/凉山甘洛县",
				"会东县": MPATH+"json/凉山会东县",
				"会理县": MPATH+"json/凉山会理县",
				"金阳县": MPATH+"json/凉山金阳县",
				"雷波县": MPATH+"json/凉山雷波县",
				"美姑县": MPATH+"json/凉山美姑县",
				"冕宁县": MPATH+"json/凉山冕宁县",
				"宁南县": MPATH+"json/凉山宁南县",
				"普格县": MPATH+"json/凉山普格县",
				"喜德县": MPATH+"json/凉山喜德县",
				"西昌市": MPATH+"json/凉山西昌市",
				"盐源县": MPATH+"json/凉山盐源县",
				"越西县": MPATH+"json/凉山越西县",
				"昭觉县": MPATH+"json/凉山昭觉县",
				"木里藏族自治县" : MPATH+"json/凉山木里藏族自治县",
				//巴中市下所有乡镇
				"巴州区":MPATH+"json/巴中市巴州区",
				"南江县":MPATH+"json/巴中市南江县",
				"平昌县":MPATH+"json/巴中市平昌县",
				"通江县":MPATH+"json/巴中市通江县",
				//眉山市下所有乡镇
				"丹棱县":MPATH+"json/眉山市丹棱县",
				"东坡区":MPATH+"json/眉山市东坡区",
				"洪雅县":MPATH+"json/眉山市洪雅县",
				"彭山区":MPATH+"json/眉山市彭山区",
				"青神县":MPATH+"json/眉山市青神县",
				"仁寿县":MPATH+"json/眉山市仁寿县",
				//雅安市下所有乡镇
				"宝兴县":MPATH+"json/雅安市宝兴县",
				"汉源县":MPATH+"json/雅安市汉源县",
				"芦山县":MPATH+"json/雅安市芦山县",
				"名山区":MPATH+"json/雅安市名山区",
				"石棉县":MPATH+"json/雅安市石棉县",
				"天全县":MPATH+"json/雅安市天全县",
				"荥经县":MPATH+"json/雅安市荥经县",
				"雨城区":MPATH+"json/雅安市雨城区",
				//成都市下所有乡镇
				"成华区":MPATH+"json/成都市成华区",
				"崇州市":MPATH+"json/成都市崇州市",
				"大邑县":MPATH+"json/成都市大邑县",
				"都江堰市":MPATH+"json/成都市都江堰市",
				"金牛区":MPATH+"json/成都市金牛区",
				"金堂县":MPATH+"json/成都市金堂县",
				"锦江区":MPATH+"json/成都市锦江区",
				"龙泉驿区":MPATH+"json/成都市龙泉驿区",
				"彭州市":MPATH+"json/成都市彭州市",
				"郫县":MPATH+"json/成都市郫县",
				"蒲江县":MPATH+"json/成都市蒲江县",
				"青白江区":MPATH+"json/成都市青白江区",
				"青羊区":MPATH+"json/成都市青羊区",
				"邛崃市":MPATH+"json/成都市邛崃市",
				"双流县":MPATH+"json/成都市双流县",
				"温江区":MPATH+"json/成都市温江区",
				"武侯区":MPATH+"json/成都市武侯区",
				"新都区":MPATH+"json/成都市新都区",
				"新津县":MPATH+"json/成都市新津县",
				//德阳市下所有乡镇
				"广汉市":MPATH+"json/德阳市广汉市",
				"旌阳区":MPATH+"json/德阳市旌阳区",
				"罗江县":MPATH+"json/德阳市罗江县",
				"绵竹市":MPATH+"json/德阳市绵竹市",
				"什邡市":MPATH+"json/德阳市什邡市",
				"中江县":MPATH+"json/德阳市中江县",
				//阿坝下所有乡镇
				"阿坝县":MPATH+"json/阿坝阿坝县",
				"黑水县":MPATH+"json/阿坝黑水县",
				"红原县":MPATH+"json/阿坝红原县",
				"金川县":MPATH+"json/阿坝金川县",
				"九寨沟县":MPATH+"json/阿坝九寨沟县",
				"理县":MPATH+"json/阿坝理县",
				"马尔康县":MPATH+"json/阿坝马尔康县",
				"茂县":MPATH+"json/阿坝茂县",
				"壤塘县":MPATH+"json/阿坝壤塘县",
				"若尔盖县":MPATH+"json/阿坝若尔盖县",
				"松潘县":MPATH+"json/阿坝松潘县",
				"汶川县":MPATH+"json/阿坝汶川县",
				"小金县":MPATH+"json/阿坝小金县",
				//甘孜下所有乡镇
				"巴塘县":MPATH+"json/甘孜巴塘县",
				"白玉县":MPATH+"json/甘孜白玉县",
				"丹巴县":MPATH+"json/甘孜丹巴县",
				"道孚县":MPATH+"json/甘孜道孚县",
				"稻城县":MPATH+"json/甘孜稻城县",
				"德格县":MPATH+"json/甘孜德格县",
				"得荣县":MPATH+"json/甘孜得荣县",
				"甘孜县":MPATH+"json/甘孜甘孜县",
				"九龙县":MPATH+"json/甘孜九龙县",
				"康定县":MPATH+"json/甘孜康定县",
				"理塘县":MPATH+"json/甘孜理塘县",
				"泸定县":MPATH+"json/甘孜泸定县",
				"炉霍县":MPATH+"json/甘孜炉霍县",
				"色达县":MPATH+"json/甘孜色达县",
				"石渠县":MPATH+"json/甘孜石渠县",
				"乡城县":MPATH+"json/甘孜乡城县",
				"新龙县":MPATH+"json/甘孜新龙县",
				"雅江县":MPATH+"json/甘孜雅江县",
				//广元市所有乡镇
				"苍溪县":MPATH+"json/广元苍溪县",
				"朝天区":MPATH+"json/广元朝天区",
				"剑阁县":MPATH+"json/广元剑阁县",
				"利州区":MPATH+"json/广元利州区",
				"青川县":MPATH+"json/广元青川县",
				"旺苍县":MPATH+"json/广元旺苍县",
				"昭化区":MPATH+"json/广元昭化区",
				//绵阳市所有乡镇
				"安县":MPATH+"json/绵阳安县",
				"北川羌族自治县":MPATH+"json/绵阳北川羌族自治县",
				"涪城区":MPATH+"json/绵阳涪城区",
				"江油市":MPATH+"json/绵阳江油市",
				"平武县":MPATH+"json/绵阳平武县",
				"三台县":MPATH+"json/绵阳三台县",
				"盐亭县":MPATH+"json/绵阳盐亭县",
				"游仙区":MPATH+"json/绵阳游仙区",
				"梓潼县":MPATH+"json/绵阳梓潼县",
				//遂宁市所有乡镇
				"安居区":MPATH+"json/遂宁安居区",
				"船山区":MPATH+"json/遂宁船山区",
				"大英县":MPATH+"json/遂宁大英县",
				"蓬溪县":MPATH+"json/遂宁蓬溪县",
				"射洪县":MPATH+"json/遂宁射洪县",
				//泸州市所有乡镇
				"古蔺县":MPATH+"json/泸州市古蔺县",
				"合江县":MPATH+"json/泸州市合江县",
				"江阳区":MPATH+"json/泸州市江阳区",
				"龙马潭区":MPATH+"json/泸州市龙马潭区",
				"泸县":MPATH+"json/泸州市泸县",
				"纳溪区":MPATH+"json/泸州市纳溪区",
				"叙永县":MPATH+"json/泸州市叙永县",
				//内江市所有乡镇
				"东兴区":MPATH+"json/内江市东兴区",
				"隆昌县":MPATH+"json/内江市隆昌县",
				"内江市中区":MPATH+"json/内江市市中区",
				"威远县":MPATH+"json/内江市威远县",
				"资中县":MPATH+"json/内江市资中县",
				//宜宾市所有乡镇
				"翠屏区":MPATH+"json/宜宾市翠屏区",
				"高县":MPATH+"json/宜宾市高县",
				"珙县":MPATH+"json/宜宾市珙县",
				"江安县":MPATH+"json/宜宾市江安县",
				"南溪区":MPATH+"json/宜宾市南溪区",
				"屏山县":MPATH+"json/宜宾市屏山县",
				"兴文县":MPATH+"json/宜宾市兴文县",
				"宜宾县":MPATH+"json/宜宾市宜宾县",
				"筠连县":MPATH+"json/宜宾市筠连县",
				"长宁县":MPATH+"json/宜宾市长宁县",
				//自贡市所有乡镇
				"大安区":MPATH+"json/自贡市大安区",
				"富顺县":MPATH+"json/自贡市富顺县",
				"贡井区":MPATH+"json/自贡市贡井区",
				"荣县":MPATH+"json/自贡市荣县",
				"沿滩区":MPATH+"json/自贡市沿滩区",
				"自流井区":MPATH+"json/自贡市自流井区",
				//南充市下所有乡镇
				"高坪区":MPATH+"json/南充市高坪区",
				"嘉陵区":MPATH+"json/南充市嘉陵区",
				"阆中市":MPATH+"json/南充市阆中市",
				"南部县":MPATH+"json/南充市南部县",
				"蓬安县":MPATH+"json/南充市蓬安县",
				"顺庆区":MPATH+"json/南充市顺庆区",
				"西充县":MPATH+"json/南充市西充县",
				"仪陇县":MPATH+"json/南充市仪陇县",
				"营山县":MPATH+"json/南充市营山县",
				//达州市下所有乡镇
				"达川区":MPATH+"json/达州市达川区",
				"大竹县":MPATH+"json/达州市大竹县",
				"开江县":MPATH+"json/达州市开江县",
				"渠县":MPATH+"json/达州市渠县",
				"通川区":MPATH+"json/达州市通川区",
				"万源市":MPATH+"json/达州市万源市",
				"宣汉县":MPATH+"json/达州市宣汉县",
				//攀枝花市下所有乡镇
				"东区":MPATH+"json/攀枝花东区",
				"米易县":MPATH+"json/攀枝花米易县",
				"仁和区":MPATH+"json/攀枝花仁和区",
				"西区":MPATH+"json/攀枝花西区",
				"盐边县":MPATH+"json/攀枝花盐边县"
			};
			var curIndx = 0;
			var mapType = [];
			mapGeoData = require('echarts/util/mapData/params');
			if(organizationName != "四川省" && organizationName != "中国"){
				mapTypeStatisticsToUserOrg = organizationName;
			}
			for (var city in cityMap) {
				mapType.push(city);
				// 自定义扩展图表类型
				mapGeoData.params[city] = {
					getGeoJson: (function (c) {
						var geoJsonName = cityMap[c];
						if(geoJsonName == null || geoJsonName == ""  ||  geoJsonName == undefined){
							return;
						}
						return function (callback) {
							$.getJSON(geoJsonName + '.json', callback);
						}
					})(city)
				}
			}
			
			ecConfig = require('echarts/config');
			zrEvent = require('zrender/tool/event');
			
			optionMap = {
				tooltip : {
					enterable:true,//默认false表示鼠标不能停留在提示框上   true可以停留可做提示框内部点击事件及跳转等
					trigger: 'item'
				},
				dataRange: {//地图数据控件、拖拉控件显示地图数据
					x: 'left',
			        y: 'center',
			        min: 0,
			        max: initMaxStatisticsNum,
			        text:['高','低'],
			        realtime: false,
			        calculable : true,
			        color: ['#FB7B7A','#FBC77B','#F9FA7A','#7BE1F8','#B0FAAD'],
			        textStyle:{
			            color:'#fff'
			        }
			    },
				series : [//定义地图显示数据
					{
						name: '任务清单地图',
						type: 'map',
						mapType: mapTypeStatisticsToUserOrg,
						roam:true,
						selectedMode : 'single',
						itemStyle:{  
		                    normal:{
		                           label:{
		                        	   show:true,
		                        	   textStyle: {
				                           color: "#333"
				                        }
		                           } ,
		                           //地图默认是灰色color: '#66CCFF', //刚才说的图例颜色设置  
		                           borderColor:"#5da4e0"
		                    },
		                    emphasis:{label:{show:true}},
			                emphasis: {                 // 地图选中样式
			                    borderWidth:2,
			                    borderColor:'#fff',
			                    color: '#FF6600',
			                    label: {
			                        show: true,
			                        textStyle: {
			                            color: '#fff'
			                        }
			                    }
			                }
		                },
		                data:mapStatisticsData,//设置地图数据
		                //各市区经纬度用于定位显示闪动效果或做地图标记
						geoCoord: mapStatisticsCenter
					}
				]
			};
			myChartForMap.setOption(optionMap); 
        }
    );
