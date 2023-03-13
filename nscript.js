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
    window.location.href = `${p}.html`
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

const Add=()=>{
    const getData = async () => {
        response = await fetch('Academic Awardees.json');
        data = await response.json();
        return data
    }
    getData()
        .then(data => {
            ol = document.querySelector(".grid");
            for (i of data){
                namer = i["Full name (According to ISP)"]
                formClass = i["Form Class in 2022"]
                ResponseId = i["Response ID"]
                var directory = `Academic Awardee/RefNo ${ResponseId}`;
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open('GET',directory,false);
                xmlHttp.send(null);
                var ret = xmlHttp.responseText;
                var fileList = ret.split('\n')
                for (i = 0; i < fileList.length-1; i++){
                    var fileInfo = fileList[i].split(' ');
                    var nextFileInfo = fileList[i+1].split(' ');
                    if (fileInfo.length > 2){
                        if ((fileInfo[1].includes('.jpg')||fileInfo[1].includes('.JPG')||fileInfo[1].includes('.jpeg')||fileInfo[1].includes('.png')||fileInfo[1].includes('.PNG')||fileInfo[1].includes('.pdf'))&&(nextFileInfo[1].includes('.jpg')||nextFileInfo[1].includes('.JPG')||nextFileInfo[1].includes('.jpeg')||nextFileInfo[1].includes('.png')||nextFileInfo[1].includes('.PNG')||nextFileInfo[1].includes('.pdf'))){
                            path = fileInfo[1].substring(fileInfo[1].indexOf('href="/')+7,fileInfo[1].length-1);
                        }
                    }
                }
                li = document.createElement("div");
                li.classList.add("obj");
                img = document.createElement("img");
                img.src = path;
                p = document.createElement("p");
                br = document.createElement("br");
                p.append(document.createTextNode(namer.toUpperCase()));
                p.append(br);
                p.append(document.createTextNode(`Class ${formClass.toUpperCase()} in 2022`));
                li.append(img);
                li.append(p);
                ol.append(li);
                }
            })
}