$(document).ready(function() {

	var $textArea = $(".text-area");

	$.ajax({
		type: "GET",
		url: "api/paragraphs/2",
		dataType: "text",
		success: function(data) {
			data = JSON.parse(data);

			console.log(data.paragraphs);
			displayFillerText(data.paragraphs);
		}
	});


	$(".fill-text-area").click(function() {
		$textArea.toggleClass("hidden");
	});

	function displayFillerText(paragraphs) {
		var content = "";

		for (var i = 0; i < paragraphs.length; i++) {
			content += "<p>" + paragraphs[i] + "</p>";
		}

		$textArea.html(content);
	}
});