oTech.service('GraphServices',
    ['$http', '$rootScope', '$timeout', '$location', '$q', function ( $http,  $location, $rootScope,  $timeout, $q) {
		var service = {};
		var token = sessionStorage.token;
		/*
			Function to get the device usage data
		*/
		service.GetDeviceUsageData = function(userId){
			var deferred = $q.defer();
			$.ajax({
				    url : oApp.config.BASE_URL + "rest/devices/deviceUsageData",
				    type: "POST",
					data : {token:token,userId:userId},
					headers :{
					'Content-Type': 'application/x-www-form-urlencoded'
					},
				    success: function(data)
				    {
						deferred.resolve(data);
				    },
				    error: function (err)
				    {
						deferred.reject(err);
				    }
			    });	
			return deferred.promise; 
		}
		/*
			Function to show Device usage graph
		*/
		service.DahsboardDevicesUsage = function(data){
			var labels = [];
			var activeData = [];
			var passiveData = [];
			angular.forEach(data, function(val, key) 
			{
				labels.push(val.date);
				activeData.push(val.activeCount);
				passiveData.push(val.passiveCount);
			});
			var date = [];
			for(var i = 0; i < labels.length; i++){
				date.push(labels[i].split('/')[1]);
			}
			for(var i = 0;i < date.length; i++){
				for(var j = i+1; j < date.length; j++){
					if(date[j] < date[i]){
						var tmp = date[i];
						date[i] = date[j];
						date[j] = tmp;
						tmp = labels[i];
						labels[i] = labels[j];
						labels[j] = tmp;
						tmp = activeData[i];
						activeData[i] = activeData[j];
						activeData[j] = tmp;
						tmp = passiveData[i];
						passiveData[i] = passiveData[j];
						passiveData[j] = tmp;
					}
				}
			}
			oApp.config.lineChartData.datasets[0].data = activeData;
			oApp.config.lineChartData.datasets[1].data = passiveData;
			oApp.config.lineChartData.labels = labels;
			var ctx = document.getElementById("canvas").getContext("2d");
			window.myLine = new Chart(ctx).Line(oApp.config.lineChartData, { responsive: true});
		}
		/*
			Function to get the device availability data
		*/
		service.GetDeviceAvailabilityData = function(userId){
			var deferred = $q.defer();
			$.ajax({
				    url : oApp.config.BASE_URL + "rest/devices/deviceAvailabilityData",
				    type: "POST",
					data : {token:token,userId:userId},
					headers :{
					'Content-Type': 'application/x-www-form-urlencoded'
					},
				    success: function(data)
				    {
						deferred.resolve(data);
				    },
				    error: function (err)
				    {
						deferred.reject(err);
				    }
			    });	
			return deferred.promise; 
		}
		/*
			Function to show Device availability graph
		*/
		service.DahsboardDevicesAvailability = function(data){
			var chartConfig = {
				chart: {
					type: 'pie'
				},
				credits: {
					enabled: false
				},
				title: {
					text: null
				},
				plotOptions: {
					series: {
						center: ['30%', '30%'],
						borderWidth: 0,
						dataLabels: {
							enabled: false
						}
					}
				},
				tooltip: {
					useHTML: true,
					formatter: function() {
						if(this.key != undefined)
							return ("<div class='toolti'>" + this.point.msg + ':  ' + this.key + "</div>");
						else
							return false;
					}
				},
				xAxis: {
					labels: {
						enabled: false
					}
				},
				yAxis: {
					labels: {
						enabled: false
					}
				},
				series: [
					{
						name: 'Inner',
						data: [],
						size: '8%',
						innerSize: '60%',
						slicedOffset: 0
					},
					{
						name: 'Outer',
						data: [],
						size: '21%',
						innerSize: '70%',
						slicedOffset: 0
					},
					{
						name: 'Outer1',
						data: [],
						size: '34%',
						innerSize: '80%',
						slicedOffset: 0
					},
					{
						name: 'Outer2',
						data: [],
						size: '47%',
						innerSize: '85%',
						slicedOffset: 0
					}
				]
			},
			rgb = function (color) {
				return 'rgb(' + color + ')';
			};

			var data = {
				inner: [{
					y: (351/data.registered)*100,
					msg: 1,
					color: rgb('255, 135, 97'),
					sliced: true,
					name:'Active'
				},
				{
					y: 100-((351/data.registered)*100),
					msg: 1,
					color: rgb('255,255,255'),
					sliced: true,
					name:''
				}],
				outer: [{
					y: (351/data.registered)*100, 
					msg: 1,
					color: rgb('87, 189, 222'),
					sliced: true,
					name:'Availabile'
				},
				{
					y: 100-((351/data.registered)*100),
					msg: 1,
					color: rgb('255,255,255'),
					sliced: true,
					name:''
				}],
				outer1: [{
					y: (data.approved/data.registered)*100, 
					msg: data.approved,
					color: rgb('177, 152, 220'),
					sliced: true,
					name:'Licenced'
				},
				{
					y: 100-((data.approved/data.registered)*100),
					msg: 1,
					color: rgb('255,255,255'),
					sliced: true,
					name:''
				}],
				outer2: [{
					y: data.registered, 
					msg: data.registered,
					color: rgb('255, 153, 0'),
					sliced: true,
					name:'Registered'
				}]
			};
			var chart1 = $.extend({}, chartConfig);

			chart1.series[0].data = data.inner;
			chart1.series[1].data = data.outer;
			chart1.series[2].data = data.outer1;
			chart1.series[3].data = data.outer2;

			$('#chart1').highcharts(chart1);
		}
		/*
			Function to get the Executive status data
		*/
		service.GetExecutiveStatusData = function(userId,date){
			var deferred = $q.defer();
			$.ajax({
				    url : oApp.config.BASE_URL + "rest/devices/execStatus",
				    type: "POST",
					data : {token:token,date:date},
					headers :{
					'Content-Type': 'application/x-www-form-urlencoded'
					},
				    success: function(data)
				    {
						deferred.resolve(data);
				    },
				    error: function (err)
				    {
						deferred.reject(err);
				    }
			    });	
			return deferred.promise; 
		}
		/*
			Function to show Executive status graph
		*/
		service.DahsboardExecutiveStatus = function(data){
			var labels = [];
			var keys = [];
			//var deviceId = [];
			keys[0]='';
		/*	angular.forEach(data.execStatusList, function(val, key) 
			{ 
				var row = [];
				row.push(key);
				angular.forEach(val, function(val1, key1) 
				{
					row.push(val1.completeStatus);
					row.push('Device Id:  ' + val1.deviceId);
				});
				labels.push(row);
			});
		*/	
			
	/*		var max = labels[0].length;
			for(var i = 1;i < labels.length;i++){
				if(labels[i].length > max)
					max = labels[i].length;
			}
			for(var i = 0;i < labels.length;i++){
				var j = max-labels[i].length;
				for(var k = 0;k < j/2;k++){
					labels[i].push(0);
					labels[i].push('');
				}
			}
			for(var i = 0;i < labels[0].length-1; i++)
				keys.push('');
			console.log(JSON.stringify(labels)); 
			*/
			function drawChart() {
				//var data = new google.visualization.DataTable();
				//data.addColumn('string', 'y');
				//data.addColumn('number', '');
				/*data.addColumn({type:'string',role:'tooltip'}); 
				data.addColumn('number', '');
				data.addColumn({type:'string',role:'tooltip'}); 
				data.addColumn('number', '');
				data.addColumn({type:'string',role:'tooltip'}); 
				data.addColumn('number', '');
				data.addColumn({type:'string',role:'tooltip'});*/
				//data.addRows(labels);
			   var data = new google.visualization.DataTable();
    data.addColumn('string', 'y');
    data.addColumn('number', 'r');
    data.addColumn({type:'string',role:'tooltip'});  
    data.addColumn('number', 'a');
     data.addColumn({type:'string',role:'tooltip'});  
    data.addColumn('number', 'a2');
				data.addRows([
      ['2004', 1000,'hi', 30,'second',50],
      ['2005', 1170,'hi', 630,'second',40],
      ['2006', 660 ,'hi', 630,'second',90],
      ['2007', 1030,'hi', 630,'second',30]
    ]);
			   
			   
				var chart= new google.visualization.ColumnChart(document.getElementById('chart_div'));
				//chart.draw(data, {width: 500,height: 190,});
				chart.draw(data);
				
			}
			//function createToolTip(val1,val2,val3,val4,val5){
			 // return val5+':'+val4;
			//}
			drawChart();
			
		}
		return service;
}])