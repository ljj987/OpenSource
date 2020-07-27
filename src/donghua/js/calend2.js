var currentTime="";   //当前时间年月日
var dom=document.querySelector("#calendarElement");       //承载元素
var color="";
getCurrentTime();
randomColor();
showDay();
function getCurrentTime(){ //获取当前时间
 var time=new Date();
 var year=time.getFullYear();
 var month=time.getMonth()+1;
 var day=time.getDate();
 if(month<10){
  month="0"+month;
 }
 var data=year+ "-" +month;
 currentTime=year+ "-" +month+"-"+day;
 document.querySelector(".date").innerHTML=data;
}
dom.addEventListener("click",function(e){
 if(e.target.className=="previ" || e.target.className=="prev"){
  getMonths("prev");
 }else if(e.target.className=="nexti" || e.target.className=="next"){
  getMonths("next");
 }
});
function showDay(){
 var html="";
 var MonthOne=currentTime;
 var yearMonth=currentTime.split('-').slice(0,2);
 yearMonth=yearMonth.join('-');
 document.querySelector(".date").innerHTML=yearMonth;
 MonthOne=MonthOne.split('');
 MonthOne.splice(8,2,"01");
 MonthOne=MonthOne.join('');
 var monthLen=getMonthLength(MonthOne);  //每月有多少天
 var weekMany=new Date(MonthOne).getDay();  //每月一号是星期几
 html+=getPrevMonthHtml(weekMany);
 html+=getNowMonthHtml(monthLen);
 html+=getNextMonthHtml(weekMany,monthLen);
 document.querySelector(".weekMany").innerHTML=html;
}
function getPrevMonthHtml(weekMany){
 var html="";
 var lastMonth=currentTime.substring(0, 7);  //得出年月
 lastMonth=lastMonth.split('-');
 if(lastMonth[1]-1==0){
  lastMonth[1]=12;
  lastMonth[0]=lastMonth[0]-1;
 }else if(lastMonth[1]-1<10){
  lastMonth[1]="0"+(lastMonth[1]-1);
 }
 lastMonth=lastMonth.join('-');
 var monthLen=getMonthLength(lastMonth);
 var start=monthLen-weekMany;
 for(var i=start+1;i<=monthLen;i++){
  html+='<div class="otherMonth day" data-date="'+lastMonth+'-'+i+'">'+i+'</div>';
 }
 return html;
}
function getNowMonthHtml(monthLen){
 var html="";
 var MonthOne=currentTime.substring(0, 7);  //得出年月
 var today=currentTime.split('-')[2];
 for(var i=1;i<=monthLen;i++){
  if(i<10){
   var q = "0"+i;
  }else{
   var q = i;
  }
  if(i==today){
   html += '<div class="thisMonth day" style="background-color:'+color+';color:#fff" data-date="'+MonthOne+'-'+q+'">'+i+'</div>';
  }else{
   html+='<div class="thisMonth day" data-date="'+MonthOne+'-'+q+'">'+i+'</div>';
  }
 }
 return html;
}
function getNextMonthHtml(weekMany,monthLen){
 var html="";
 var daynum=weekMany+monthLen;
 if(daynum % 7 == 0){
  return html;
 }else{
  var num= daynum % 7;
  var lessNum=7-num;  //差几天
  var lowerMonth=currentTime.substring(0, 7);  //得出年月
  lowerMonth=lowerMonth.split('-');
  if(lowerMonth[1]+1==13){
   lowerMonth[1]="0"+1;
   lowerMonth[0]=+lowerMonth[0]+1;
  }else{
   lowerMonth[1]=+lowerMonth[1]+1;
   if(lowerMonth[1]<10){
    lowerMonth[1]="0"+lowerMonth[1];
   }
  }
  lowerMonth=lowerMonth.join('-');
  for(var i=1;i<=lessNum;i++){
   if(i<10){
    var q="0"+i;
   }
   html+='<div class="otherMonth day" data-date="'+lowerMonth+'-'+q+'">'+i+'</div>';
  }
 }
 return html;
}
function getMonths(around){
 if(around=="prev"){
  currentTime=currentTime.split('-');
  currentTime[1]=currentTime[1]-1;
  if(currentTime[1]==0){
   currentTime[1]="12";
   currentTime[0]=+currentTime[0]-1;
  }
  if(currentTime[1]<10){
   currentTime[1]="0"+currentTime[1];
  }
  currentTime=currentTime.join('-');
  showDay();
 }else if(around=="next"){
  currentTime=currentTime.split('-');
  currentTime[1]=+currentTime[1]+1;
  if(currentTime[1]==13){
   currentTime[1]="1";
   currentTime[0]=+currentTime[0]+1;
  }
  if(currentTime[1]<10){
   currentTime[1]="0"+currentTime[1];
  }
  currentTime=currentTime.join('-');
  showDay();
 }
}
 
function getMonthLength(date) {  // 获取每月有多少天
 let d = new Date(date);
 // 将日期设置为下月一号
 d.setMonth(d.getMonth()+1);
 d.setDate('1');
 // 获取本月最后一天
 d.setDate(d.getDate()-1);
 return d.getDate();
}
function randomColor(){   //随机颜色
 color = '#'+Math.floor(Math.random()*16777215).toString(16); 
 if(color.length==6){
  color+="0";
 }
 document.querySelector(".header").style.backgroundColor=color;
 document.querySelector(".week").style.backgroundColor=color;
}