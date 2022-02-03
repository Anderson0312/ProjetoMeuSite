const body = document.querySelector('body'),
      sidebar = body.querySelector('.sidebar'),
      toggle = body.querySelector('.toggle'),
      search = body.querySelector('.search-box'),
      modeSwitch = body.querySelector('.toggle-switch'),
      modeText = body.querySelector('.mode-text');
      login = body.querySelector('.login');

      toggle.addEventListener('click', () =>{
            sidebar.classList.toggle('close');

            login.classList.toggle('hide-login');
      });

      search.addEventListener('click', () =>{
            sidebar.classList.remove('close');
      });

      modeSwitch.addEventListener('click', () =>{
            body.classList.toggle('dark');

            if(body.classList.contains('dark')){
                  modeText.innerHTML = 'Light Mode'
            } else {
                  modeText.innerHTML = 'Dark Mode'
            }
      });



      