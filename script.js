let users = [['محمد','احمدی'],['سعید','کرمی'],['سمانه','محمدی'],['محمد','مرادی']];
const add = document.querySelector('.plus');
const list_content = document.querySelector('.list-content');
const drop_list = document.querySelector('.drop-list');
const family_input = document.getElementById('arrival-family');
const name_input = document.getElementById('arrival-name');
const Join = document.querySelector('.join');
let count = 0;

const Render = () => {

    users.forEach(item => {

        let user_box = document.createElement('div');
        let user_name = document.createElement('span');
        let user_family = document.createElement('span');
        user_name.classList.add('user-name');
        user_family.classList.add('user-family');
        user_box.classList.add('user-frame');
        user_name.textContent = item[0]
        user_family.textContent = item[1]
        user_box.appendChild(user_name);
        user_box.appendChild(user_family);
        list_content.appendChild(user_box)
    })
}
Render()

add.addEventListener('click',(e) => {

    e.target.classList.add('plus-ant');
    setTimeout(() => {
        e.target.classList.remove('plus-ant');
    },1000)

    if(count == 0)
    {
        drop_list.style = 'display:flex';
        drop_list.classList.add('drop-list-ant');
        drop_list.classList.remove('drop-list-ant-2');
        count = 1
    }
    else
    {
        drop_list.classList.add('drop-list-ant-2');
        drop_list.classList.remove('drop-list-ant');
        setTimeout(() => {
            drop_list.style = 'display:none'
        },500)
        count = 0

    }

})


Join.addEventListener('click',() => {
    
    if(!name_input.value)
    {
        alert('لطفا نام کاربر را وارد کنید')
    }
    else if(!family_input.value)
    {
        alert('لطفا نام خانوادگی کاربر را وارد کنید')
    }
    else if(name_input.value.length < 3)
    {
        alert('نام کاربر قابل قبول نمی باشد')
    }
    else if(family_input.value.length < 3)
    {
        alert('نام خانوادگی قابل قبول نمی باشد')
    }
    else
    {
        addUser(name_input.value,family_input.value)
    }
})


const addUser = (name,family) => {

    let names = users.map(item => item[0]);
    let familys = users.map(item => item[1])

    if( names.includes(name) && familys.includes(family) )
    {
        alert('اطلاعات کاربر موجود است')
    }
    else
    {
        users.push([name,family]);
        document.querySelectorAll('.user-frame').forEach(user => {
        user.remove()
        })
        Render()
    }
}

