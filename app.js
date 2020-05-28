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
					const li =document.createElement('li');
					li.appendChild(document.createTextNode(`${usernameInput.value} : ${emailInput.value} : ${passwordInput.value}`));


					userList.appendChild(li);

					// 	//Clear fields
					usernameInput.value = '';
					emailInput.value = '';
					passwordInput.value = '';



				  }
				  	
			}