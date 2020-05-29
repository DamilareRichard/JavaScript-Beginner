		const myForm = document.querySelector('#my-form');
		const usernameInput = document.querySelector('#username');
		const emailInput = document.querySelector('#email');
		const passwordInput = document.querySelector('#password');
		const msg = document.querySelector('.msg');
		const userList = document.querySelector('#users');

		myForm.addEventListener('submit', onSubmit);

			function onSubmit(e) {
				e.preventDefault();

				if(usernameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
					msg.classList.add('error');
					msg.innerHTML = 'Please enter all fields';

				setTimeout(() => msg.remove(), 3000);

				} else {
					const ul = document.querySelector('ul.items');

				const items = [usernameInput.value, emailInput.value, passwordInput.value];

				let html = '';

				items.forEach(item => {
					html += `<li>${item}</li>`;

				ul.innerHTML = html;

				});

					// 	//Clear fields
					usernameInput.value = '';
					emailInput.value = '';
					passwordInput.value = '';
				  }
				  	
			}