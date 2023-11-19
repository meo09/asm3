function handleSubmit(){
  //lay gia tri cua input email va chuyen sang in thuong
  const emailValue=document.getElementById('email').value.toLocaleLowerCase();
  // lay element cua the p hien thi loi
  const enroremail=document.getElementById('enror-email');  
  
  //dieu kien de la mot email
  const checkMail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // dung match de kiem tra email vua nhap
  const check= emailValue.match(checkMail);
  //lay phan chua thong tin user
  const sectionContent= document.querySelector('#personal-info .info')
  const icons = document.querySelector('.personal-info-icon');
  console.log('check section', sectionContent);
  //lay element de kiem soat Submit
  const submitControl=document.querySelector('.submit-email')
  if(check){
// sectionContent.style.display='block';

sectionContent.classList.remove('hide');
icons.classList.remove('hide');

// submitControl.style.display='none';
submitControl.classList.add('hide');
console.log(enroremail);
enroremail.innerHTML ='';
  }else{
    enroremail.innerHTML='vui long nhap dung dinh dang email';
  }
  
}
function handleOnMouseOver(element){
  const viewMore=element.querySelector('.view-more');
  viewMore.style.display='inline-block';
}
function handleOnMouseOut(element){
  const viewMore=element.querySelector('.view-more');
  viewMore.style.display='none';
}
/*một chuổi sai lầm nối tiếp 
function handleViewMore(element){
  const parentElement=element.closest('.parent');
  const sectionContent=parentElement.querySelectorAll('.desc');
   sectionContent.forEach(element => {
    element.style.display='block';
  });
}
var listMore=document.querySelectorAll(".view-more");
var listLess=document.querySelectorAll(".view-less");
var info=document.querySelectorAll(".job-info");
for(let i=0; i< listMore.length; i++){
  listMore[i].addEventlistener("click"), function(){
    info[i].classList.remove("desc");
    listMore[i].classList.add("desc");
    listLess[i].classList.remove("desc");
  }
} */
// sổ thông tin nghề nghiệp khi click vào viewmorre
function handleViewMore(element){
  let content;
  if(element==1){
  content=document.querySelector("#content1");}
  else if(element==2){
    content=document.querySelector("#content2");
  }else if(element==3){
   content=document.querySelector("#content3");
  } else if(element==4){
     content=document.querySelector("#content4");
  } else if(element==5){
    content=document.querySelector("#content5");
  } else {
    content=document.querySelector("#content6");
  }
    content.classList.toggle("desc");
}
  
  
 