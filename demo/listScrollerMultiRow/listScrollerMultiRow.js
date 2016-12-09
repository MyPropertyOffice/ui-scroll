angular.module('application', ['ui.scroll', 'ui.scroll.jqlite'])
	.factory('datasource', ['$log', '$timeout',
		function (console, $timeout) {

			var get = function (index, count, success) {
				$timeout(function () {
					var result = [];
					var hex;
					var min = 1;
                	var max = 1000;
					for (var i = index; i <= index + count - 1; i++) {
						if(i < min || i > max) { 
                        	continue;
                    	}
						hex = i.toString(16);
						if (hex.length == 1) {
							hex = "0" + hex;
						}
						result.push({
							caption: "item #" + i,
							hex: hex
						});
					}
					success(result);
				}, 100);
			};

			return {
				get: get
			};
		}
	]);
