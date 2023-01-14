const users = [
    {
        name: 'Misbahur Rahman',
        email: 'misbahbd@gmail.com',
        password: 'misbah88$',
        designation: 'Mentor',
        img: './images/misbahbd.jpg'
    },
    {
        name: 'Rihad Jahan Opu',
        email: 'opubhai@gmail.com',
        password: 'opubhai88$',
        designation: 'Front-End Developer',
        img: './images/opu.jpg'
    },
    {
        name: 'Abdul Aziz',
        email: 'abdulaziz@gmail.com',
        password: 'abdul88$',
        designation: 'Front-End Developer',
        img: './images/aziz.jpg'

    },
    {
        name: 'Shanju',
        email: 'shanju@gmail.com',
        password: 'shanju88$',
        designation: 'Front-End Developer',
        img: './images/shanju.jpg'
    },
    {
        name: 'Rahin',
        email: 'rahin@gmail.com',
        password: 'rahin88$',
        designation: 'Front-End Developer',
        img: './images/user.png'
    },
    {
        name: 'Sadia Jannat',
        email: 'sadia@gmail.com',
        password: 'sadia88$',
        designation: 'Front-End Developer',
        img: './images/sadia.jpg'
    },
    {
        name: 'Tasmina',
        email: 'tasmina@gmail.com',
        password: 'tasmina88$',
        designation: 'Front-End Developer',
        img: './images/tasmi.jpg'
    },
    {
        name: 'Habibur Rahman',
        email: 'habib@gmail.com',
        password: 'habib88$',
        designation: 'Front-End Developer',
        img: './images/user.png'
    },
    {
        name: 'Mamun Khan',
        email: 'mamun@gmail.com',
        password: 'mamun88$',
        designation: 'Front-End Developer',
        img: './images/mamun.jpg'
    },
    {
        name: 'Polash Dhar',
        email: 'polash@gmail.com',
        password: 'polash88$',
        designation: 'Front-End Developer',
        img: './images/polash.jpg'
    },
    {
        name: 'Tanvir Bin Siraj',
        email: 'tanvir@gmail.com',
        password: 'tanvir88$',
        designation: 'Front-End Developer',
        img: './images/tanvir.jpg'
    }

]


const emailField = document.querySelector('#email');
// console.log(emailField);
const passField = document.querySelector('#password');
// console.log(passField);

const buttonField = document.querySelector('#submit');
// console.log(buttonField);

buttonField.addEventListener('click', () => {
    const userEmail = emailField.value;
    const userPassWord = passField.value;
    console.log(userEmail, userPassWord);
    users.forEach(user => {
        // console.log(user.name);
        if (userEmail == user.email && userPassWord == user.password) {
            // console.log('success');
            document.querySelector('.container').innerHTML =
                `
        <div class="login-form">
            <div class="user">
                <img src="${user.img}" alt="">
            </div>
            <h1 class="title">${user.name}</h1>
            <p class="sub-title">${user.designation}</p>
            
        </div>
            
        `;
        }
        else if (userEmail == user.email && userPassWord != user.password) {
            alert('Your Password is incorrect');
        }
        else if (userEmail != user.email && userPassWord == user.password) {
            alert('Your Email is incorrect');
        }

        /* else {
            alert('Type Valid Email and Password');
        } */
        /*  else if (userEmail != user.email && userPassWord != user.password) {
             alert('Type Valid Email and Password');
         } */

    })


})