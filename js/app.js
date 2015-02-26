$(document).ready(function() {
	$("#container").hide();
	var recipeSearch = {
		foodInput: $("#foodItem"),
		search_button: $("#searchButton"),
		searchForRecipe: function() {
			var input = recipeSearch.foodInput.val().trim();
			console.log(input);
			var apiKey = "dvxyiUOc22gu8hr24Ie4Y7DKSn0U6r66";
			var url = "http://api.bigoven.com/recipes?&pg=1&rpp=25&title_kw=" + input + "&api_key=" + apiKey;
			$.ajax({ 
				type: "GET",
				dataType: 'json',
				cache: false,
				url: url,
				success: function (data) {
					console.log(data.Results);
					$.each(data.Results, function (i, response) {
						$("#container").show();
						$("<li id='list'><a href="  + response.WebURL + " target=_blank>" + response.Title + "</a></li>").appendTo("#recipes");
						$("#recipes").appendTo("#container");
						});
					}	
			}).fail(function(error) {
				$('#error').html('<p>"An error occured. Try again!"</p>');
			})
		}
	};
	recipeSearch.search_button.click(recipeSearch.searchForRecipe);
});