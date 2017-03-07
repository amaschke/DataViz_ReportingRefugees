// Load the Visualization API and the corechart package.
			google.charts.load('current', {
				'packages' : ['corechart']
			});

			// This says: Once you get a 'call back' from Google, giving you the corechart package, please execute
			// the drawChart function below.
			google.charts.setOnLoadCallback(DrawAllViz);

			// The function begins with creating the table the chart will be based on.
			function DrawAllViz() {
				Visual1();
				Visual2();
			}

			function Visual1() {

				// This line of code is calling up the DataTable function to let me create a new table.
				var chart_data = new google.visualization.DataTable();
				// These lines of code specify the columns of the rows(each line equals one column),
				// including the data type to be expected in that column and the column name.
				chart_data.addColumn('string', 'Country');
				chart_data.addColumn('number', 'Number of Refugees');
				
				//Now, I'm referring to it by it's variable down here
				chart_data.addRows(visual1data);

				// This variable sets the parameters for how my chart is going to look on the page:
				// What's its title? What are it's dimension? This is where I define that.
				var design = {
					'chart_title' : 'Afghan Refugees by Host Country',
					'width' : 500,
					'height' : 250,
					'bar':{
						'groupWidth':40
					}
				};

				// This line of code will initiate the actual drawing of the chart which includes the kind of chart
				// I will be drawing, in this case: a pie chart.
				var viz = new google.visualization.BarChart(document.getElementById('Visual1'));
				viz.draw(chart_data, design);
			}

			// This is a new visualization with the name Visual2, which is a line chart that represents the 
			// total number of refugees over the past ten years
			function Visual2() {

				// This line of code is calling up the DataTable function to let me create a new table.
				var chart_data = new google.visualization.DataTable();
				// These lines of code specify the columns of the rows(each line equals one column),
				// including the data type to be expected in that column and the column name.
				chart_data.addColumn('string', 'Year');
				chart_data.addColumn('number', 'Number of Refugees');
				
				// These lines of are used to add rows, and fill in their values in the order and data type specified
				// in the variable above
				chart_data.addRows(visual2data);

				// This variable sets the parameters for how my chart is going to look on the page:
				// What's its title? What are it's dimension? This is where I define that.
				var design = {
					'chart_title' : 'Afghan Refugees by Host Country',
					'width' : 500,
					'height' : 250
				};

				// This line of code will initiate the actual drawing of the chart which includes the kind of chart
				// I will be drawing, in this case: a pie chart.
				var viz = new google.visualization.LineChart(document.getElementById('Visual2'));
				viz.draw(chart_data, design);
			}