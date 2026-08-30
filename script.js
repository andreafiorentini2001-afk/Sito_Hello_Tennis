document.addEventListener("DOMContentLoaded", () => {
	const prenotaButton = document.querySelector(
		"#prenotaButton, #prenota-btn, .prenota-button, button"
	);

	if (prenotaButton) {
		prenotaButton.addEventListener("click", () => {
			window.location.href = "prenota.html";
		});
	}