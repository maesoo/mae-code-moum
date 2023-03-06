/**
*Exampe from https://kottenator.github.io/jquery-circle-progress/
*/
var progressBarOptions = {
	startAngle: -1.55,
	size: 200,
    value: 0.75,
    fill: {
		color: '#ffa500'
	}
}

$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
	$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});

$('#circle-b').circleProgress({
	value : 0.25,
	fill: {
		color: '#FF0000'
	}
});

$('#circle-c').circleProgress({
	value : 0.100,
	fill: {
		color: '#008000'
	}
});
