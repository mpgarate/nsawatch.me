$(document).ready(function() {

	var $textArea = $(".text-area");

	$(".fill-text-area").click(function() {
		updateFillerText();
		$textArea.removeClass("hidden");
	});

	function displayFillerText(paragraphs) {
		var content = "";

		for (var i = 0; i < paragraphs.length; i++) {
			content += "<p>" + paragraphs[i] + "</p>";
		}

		$textArea.html(content);
	}

	function updateFillerText() {
		$.ajax({
			type: "GET",
			url: "api/paragraphs/2",
			dataType: "text",
			success: function(data) {
				data = JSON.parse(data);
				displayFillerText(data);
			}
		});
	}
});