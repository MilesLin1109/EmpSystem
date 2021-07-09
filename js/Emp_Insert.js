// 觸發事件->fumction
document.getElementById("ename").onblur = checkName;
document.getElementById("hiredate").onblur = checkDate;
document.getElementById("salary").onblur = checkSalary;

var FinalFlag1 = false;
var FinalFlag2 = false;
var FinalFlag3 = false;

//判斷人名輸入
function checkName() {
  let nameV = document.getElementById("ename").value;
  let sp1 = document.getElementById("idsp1");  //input後面的驗證顯示
  let flag1 = true;  //驗證
  if (nameV == "" || nameV == undefined || nameV == null) {
    sp1.innerHTML = "<img src='../img/X.png'/>" + " 提示: 1.不可空白";
    sp1.className = "error";
  } else if (nameV.length >= 2) {
    for (let i = 0; i < nameV.length; i++) {
      let strObj = new String(nameV);
      let nameAsc = strObj.charCodeAt(i);
      if (nameAsc <= 0x4e00 || nameAsc >= 0x9fff) flag1 = false;
    }
      if (flag1) {
        sp1.innerHTML = "<img src='../img/V.png'/>" + "輸入正確";
        sp1.className = "ok";
        FinalFlag1 = true ;
      } else {
        sp1.innerHTML =
          "<img src='../img/X.png'/>" + " 提示: 3.必須全部為中文字";
        sp1.className = "error";
      }
    
  } else {
    sp1.innerHTML =
      "<img src='../img/X.png'/>" + " 提示: 2.至少兩個字以上";
    sp1.className = "error";
  }
}
//判斷日期輸入
function checkDate() {
  let sp2 = document.getElementById("idsp2");
  var dateV = document.getElementById("hiredate").value;
  // console.log(typeof strDate);
  // console.log(dateV);
  // 定義月天數數組
  var DA = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //統一日期格式
  strDate = dateV.replace(/-/g, "/");
  //判斷日期格式
  if (strDate.indexOf("/") == -1) {
    sp2.innerHTML =
      "<img src='../img/X.png'/>" +
      " 請輸入 yyyy-M-d、yyyy-MM-dd、yyyy/M/d、yyyy/MM/dd 格式。";
    sp2.className = "error";
  }
  //年月日
  arrD = strDate.split("/");
  if (arrD.length != 3)
    sp2.innerHTML = "<img src='../img/X.png'/>" + " 無此日期";
  sp2.className = "error";
  y = parseInt(arrD[0], 10);
  m = parseInt(arrD[1], 10);
  d = parseInt(arrD[2], 10);
  if (isNaN(y) || isNaN(m) || isNaN(d)) return false;
  //年月日是否是數字
  else if (m > 12 || m < 1) {
    //月份是否在1-12之間
    sp2.innerHTML = "<img src='../img/X.png'/>" + " 無此日期";
    sp2.className = "error";
  } else if (d > DA[m]) {
    //判斷輸入的日是否超過瞭當月月份的總天數。
    sp2.innerHTML = "<img src='../img/X.png'/>" + " 無此日期";
    sp2.className = "error";
  } else {
    sp2.innerHTML = "<img src='../img/V.png'/>" + " 日期正確";
    sp2.className = "ok";
    FinalFlag2 = true ;
  }
}

//驗證薪水
function checkSalary() {
  let sp3 = document.getElementById("idsp3");
  var salaryV = document.getElementById("salary").value;
  let flag1 = false;
  var n =0;
if (salaryV == "" || salaryV == undefined || salaryV == null) {
  sp3.innerHTML = "<img src='../img/X.png'/>" + " 提示: 1.不可空白";
  sp3.className = "error";
} else {
    var checkOK = "0123456789";  
    for (let i = 0; i < salaryV.length; i++) {       
      flag1 = false;
        let ch = salaryV.charAt(i);
        for(j=0; j < checkOK.length; j++ ){
          if (ch == checkOK.charAt(j)) flag1 = true;
          console.log("ch: "+ch);
          console.log("checkOk: "+checkOK.charAt(j));
        } 
        if(flag1){
          n = n +1;
        }
    } 
    if(n != salaryV.length){
      console.log()
      sp3.innerHTML ="<img src='../img/X.png'/>" + " 提示: 2.必須為數字";
            sp3.className = "error";
    }else {
      sp3.innerHTML = "<img src='../img/V.png'/>" + "輸入正確";
      sp3.className = "ok";
      FinalFlag3 = true ;
    } 
  } 
}
function check(){
  alert("aa");
  if(FinalFlag1 && FinalFlag2 && FinalFlag3){
    return true;
  }
  return false;
}