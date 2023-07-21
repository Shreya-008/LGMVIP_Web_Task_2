// app.js
const getUsersButton = document.getElementById('getUsersButton');
const userContainer = document.getElementById('userContainer');
const loader = document.getElementById('loader');

const getUsers = async () => {
  try {
    getUsersButton.style.display = 'none'; // Hide the button
    loader.style.display = 'block'; // Show the loader while fetching data

    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();

    // Render user information
    userContainer.innerHTML = '';
    data.data.forEach((user) => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');

      const avatarImg = document.createElement('img');
      avatarImg.src = user.avatar;
      avatarImg.alt = `${user.first_name} ${user.last_name}`;

      const userInfo = document.createElement('div');
      userInfo.classList.add('user-info');

      const userName = document.createElement('h3');
      userName.textContent = `${user.first_name} ${user.last_name}`;

      const userEmail = document.createElement('p');
      userEmail.textContent = `Email: ${user.email}`;

      userInfo.appendChild(userName);
      userInfo.appendChild(userEmail);

      userCard.appendChild(avatarImg);
      userCard.appendChild(userInfo);

      userContainer.appendChild(userCard);
    });

    loader.style.display = 'none'; // Hide the loader after fetching data
  } catch (error) {
    console.error('Error fetching users:', error);
    loader.style.display = 'none'; // Hide the loader if there is an error
  }
};

getUsersButton.addEventListener('click', getUsers);

