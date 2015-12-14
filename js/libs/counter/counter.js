$('.count').waypoint(function() {
    $(this).countTo();
     }, {
     triggerOnce: true,
     offset: 'bottom-in-view'
});
$('#countwithdecimals').waypoint(function() {
	$(this).countTo({
		decimals: 1
	});
	}, {
	triggerOnce: true,
	offset: 'bottom-in-view'
});