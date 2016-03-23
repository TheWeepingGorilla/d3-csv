d3.text("https://gist.githubusercontent.com/d3noob/8952219/raw/d45ad0a7caf9c499d1a1e975b3760c90f5321072/bar-data.csv", function(data) {
	var parsedCSV = d3.csv.parseRows(data);

	var container = d3.select(".csvTable")
		.append("table")

		.selectAll("tr")
			.data(parsedCSV).enter()
			.append("tr")

			.selectAll("td")
				.data(function(d) { return d; }).enter()
				.append("td")
				.text(function(d) { return d; });
});