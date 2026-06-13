flatpickr("#my-calendar-from, #my-calendar-to", {
	wrap: true,
	dateFormat: "Y-m-d",
	monthSelectorType: "static", 
	locale: {
		firstDayOfWeek: 1,
		weekdays: {
			shorthand: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], 
			longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		}
	},
});

function grid() {
document.getElementById('view-select').classList.add('grid-view');
}
function list() {
document.getElementById('view-select').classList.remove('grid-view');
} 