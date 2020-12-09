let arr = []

$(function() {
	$('.terminal').on('click', function() {
  	 $('#input').focus();
  });

  $('#input').on('keydown', function search(e) {
		if(e.keyCode == 13) {
    	$('#history').append('>>> ' + $(this).val().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") + '<br/>');
      
      if (!($('#input').val().indexOf("0") === -1)) {
        $("#history").append("We found a \"0\" in your query and we could not find any results. Did you mean: 1?<br>");
      } else if ($('#input').val().substring(0, 4) === "cls" || $(this).val().substring(0, 6) === "clear") {
      	$("#history").empty();
      } else if (!($('#input').val().indexOf("skid") === -1)) {
        for (let i=0;i<1000;i++) {
          arr.push(Math.floor(Math.random() * 2))
        }
        $('#history').append(arr.join(" "))
      } else if ($('#input').val() === "") {
        return 1;
      } else {
      	$('#history').append('Lua runtime error: attempt to call a strong value<br/>');
      }
      
      $('#input').val('');
      
    }
  });
});