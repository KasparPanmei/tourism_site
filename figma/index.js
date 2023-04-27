const togglebtn = document.getElementsByClassName('toggle-btn')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]


togglebtn.addEventListener('click', () => 
{
    navbarlinks.classList.toggle('active')
})

// function switchtheme()
// {
//     const theme = document.getElementById("change-theme").value;
//                     document.getElementsByTagName("meta")[0].content = light;

// }

function drop()
{
    var drop_view = document.getElementById('display');
    drop_view.style.display="flex";
}

function none()
{
    var none_show = document.getElementById('none');
    none_show.style.display="none";
}



// function touchme()
// {
//     var clickme = document.getElementById('dislike');
//     var unclickme = document.getElementById('click');
//     clickme.style.color="green";
//     unclickme.style.color="white";
// }
// function dislikeme()
// {
//     var clickme = document.getElementById('dislike');
//     var unclickme = document.getElementById('click');
//     unclickme.style.color="none";
//     clickme.style.color="green";
// }