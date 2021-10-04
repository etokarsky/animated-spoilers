const block = document.querySelector('.block')

block.addEventListener('click', event => {
	const header = event.target.closest('.block__title')
	if (!header) return
	toggleSpoiler(header)
})

function toggleSpoiler(header) {
	collapseHeadersExcept(header)
	header.classList.toggle('open')

	const textBlock = header.nextElementSibling

	if (header.classList.contains('open')) {
		textBlock.style.maxHeight = textBlock.scrollHeight + 'px'
	} else {
		textBlock.style.maxHeight = 0
	}
}

function collapseHeadersExcept(header) {
	const headers = document.querySelectorAll('.block__title')

	for (const item of headers) {
		if (item !== header) {
			item.classList.remove('open')
			item.nextElementSibling.style.maxHeight = 0
		}
	}
}