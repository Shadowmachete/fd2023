const openside = () =>{
    document.getElementById('msidebar').style.width = '250px';
    document.querySelector('.container').classList.add('opened');
    document.querySelector('.container').classList.add('change')
}
const closeside = () =>{
    document.getElementById('msidebar').style.width = '0px';
    document.querySelector('.container').classList.remove('opened');
    document.querySelector('.container').classList.remove('change')
}
let open=false;
const xclick = () =>{
    if(open==true){
        closeside();
        open=false;
    }
    else if(open==false){
        openside();
        open=true;
    }
}

const page = (p) => {
    if (pagedata[p] == undefined){
        page('Error 404')
    }
    else {
        window.location.href = `${p}.html`
    }
    searchbaractive();
    closeside();
    pictures = document.querySelectorAll(".obj");
    for (i of pictures) {
        i.addEventListener('click'||'touchstart', (e)=>{
            if(e.target.classList.contains('obj')){
                e.target.children[2].classList.toggle("hide");
            }
            else{
                e.target.parentElement.children[2].classList.toggle("hide");
            }
        })
    }
}
sidebar = `<div style="margin-top: 50px;">${/*<a class="fordrop" style="color: black;">Prize-Giving Ceremony</a>
<div class="dropdown" style="display: none;">
    <a class="option" id='Principal Address'>Principal's Address</a>
    <a class="option" id='Alumnus Speech'>Alumni's Speeches</a>
    <a class="option" id='Prize Giving'>Prize Giving</a>
    <a class="option" id='Valedictorian Speech'>Valedictorian's Speech</a>
    <a class="option" id='Gratitude Video'>Gratitude Video</a>
</div>*/''}
</div>
<div><a class="fordrop" style="color: black;">Awards</a>
  <div class="dropdown" style="display: none;">
    ${/*<a class="option" id='IHC Award'>IHC Award</a>
    <a class="option" id='Xue Yong Shu Model Student Award'>Xue Yong Shu Model Student Award</a>
    <a class="option" id='Zheng An Lun Model Student Award'>Zheng An Lun Model Student Award</a>
    <a class="option" id='All-Round Excellence Award'>ARE</a>*/''}
    <a class="option" id='Outstanding Student Award'>OSA</a>
    ${/*<a class="option" id='Huangfu Award'>Huangfu Award</a>
    <a class="option" id='Chew Hean Swee Award'>Chew Hean Swee Award</a>*/''}
  </div>
</div>
<div><a class="fordrop" style="color: black;">Academic Awards</a>
  <div class="dropdown" style="display: none;">
  ${/*<a class="option" id='Top in Level'>Top in Level</a>
    <a class="option" id='Top in Subject'>Top in Subject</a>
    <a class="option" id='Bilingual Award'>Bilingual Award</a>
    <a class="option" id='Trilingual Award'>Trilingual Award</a>*/''}
    <a class="option" id='Academic Award'>Academic Award</a>
  </div>
</div>`
document.querySelector('#msidebar').innerHTML = sidebar
dropdownOptions = document.querySelectorAll(".fordrop");
for (i of dropdownOptions) {
    i.addEventListener('click'||'touchstart', (e)=>{
        if(e.target.style.color == 'rgb(166, 119, 210)'){
            e.target.style.color='black';
            e.target.parentElement.children[1].style.display='none';
        }
        else{
            e.target.style.color = '#A677D2';
            e.target.parentElement.children[1].style.display='block';
            e.target.parentElement.children[1].classList.add='show';
        }
    })
}

options = document.querySelectorAll(".option");
document.querySelector("#Home").addEventListener('click'||'touchstart', (e)=>{
    page(e.target.id);
});
for (i of options) {
    i.addEventListener('click'||'touchstart', (e)=>{
        page(e.target.id);
    })
}

document.querySelector(".container").addEventListener('click'||'touchstart', ()=>{
    xclick(this);
});

const searchbaractive=()=>{
    if(document.querySelector('.searchbar')!=undefined){
        document.querySelector('.searchbar').addEventListener('keyup'||'input', ()=>{
            let input, items, name, text;
            input = document.querySelector('.searchbar').value.toUpperCase();
            items = document.querySelectorAll('.obj');
            if(input==""){
                for (let i = 0; i < items.length; i++) {
                    items[i].style.display = "";
                }
                document.getElementById('closebtn').style.display='none';
            }
            else{
                for (let i = 0; i < items.length; i++) {
                    name = items[i].getElementsByTagName("p")[0];
                    text = name.textContent || name.innerText;
                    if (text.toUpperCase().includes(input)) {
                        items[i].style.display = "";
                    } else {
                        items[i].style.display = "none";
                    }
                }
                document.getElementById('closebtn').style.display='block';
            }
        })
        document.getElementById('closebtn').addEventListener('click',(e)=>{
            items = document.querySelectorAll('.obj');
            document.querySelector('.searchbar').value = '';
            e.target.style.display = 'none';
            for (i = 0; i < items.length; i++) {
                items[i].style.display = "";
            }
        });
    }
} 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

