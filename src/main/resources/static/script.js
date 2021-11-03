//STEP 1
let btn1 = document.getElementById("btn1");
btn1.onclick = () => {
  let fname = document.getElementById("fname");
  let dob = document.getElementById("dob");
  let gen = document.getElementById("gend");
  let fnameu = document.getElementById("fnameu");
  let fdobu = document.getElementById("dobu");
  let flag = true;

  if (fname.value.length == 0) {
    fname.style = "border:2px solid red;outline:none;";
    fnameu.innerHTML = "* PLEASE ENTER YOUR NAME";
    flag = false;
  } else {
    reg = /[a-z]|[A-Z]|\s/;
    for (i = 0; i < fname.value.length; i++) {
      if (reg.exec(fname.value[i]) == null) {
        fname.style = "border:2px solid red;outline:none;";
        fnameu.innerHTML = "* NON ALPHABETS ARE NOT ALLOWED";
        flag = false;
        break;
      }
    }
    if (flag) {
      fname.style = "border:2px solid black;";
      fnameu.innerHTML = "";
    }
  }

  if (dob.value.length == 0) {
    dob.style = "border:2px solid red;outline:none;";
    fdobu.innerHTML = "* PLEASE ENTER YOUR DATE OF BIRTH";
    flag = false;
  } else if (flag == true && dob.value.length > 0) {
    dob.style = "border:2px solid black;";
    fdobu.innerHTML = "";
  }

  if (flag) {
    document.getElementById("step1").style = "transform:translateY(-600px)";
    document.getElementById("step2").style = "transform:translateY(-600px)";
    document.getElementById("step3").style = "transform:translateY(-600px)";
    document.getElementById("step4").style = "transform:translateY(-600px)";
    console.log("NAME :- " + fname.value);
    console.log("DOB :- " + dob.value);
    console.log("GENDER :- " + gend.value);
  }
};

//STEP 2
let back1 = document.getElementById("back1");
back1.onclick = () => {
  document.getElementById("step1").style = "transform:translateY(0px)";
  document.getElementById("step2").style = "transform:translateY(0px)";
  document.getElementById("step3").style = "transform:translateY(0px)";
  document.getElementById("step4").style = "transform:translateY(0px)";
};

let btn2 = document.getElementById("btn2");
btn2.onclick = () => {
  let cadd = document.getElementById("cadd");
  let padd = document.getElementById("padd");
  let cadu = document.getElementById("cadu");
  let padu = document.getElementById("padu");

  let flag = true;
  if (cadd.value.length == 0) {
    cadd.style = "border:2px solid red;outline:none";
    cadu.innerHTML = "* PLEASE ENTER YOUR CURRENT ADDRESS";
    flag = false;
  } else {
    cadd.style = "border:2px solid black";
    cadu.innerHTML = "";
  }

  if (padd.value.length == 0) {
    padd.style = "border:2px solid red;outline:none";
    padu.innerHTML = "* PLEASE ENTER YOUR CURRENT ADDRESS";
    flag = false;
  } else if (padd.value.length > 0 && flag == true) {
    padd.style = "border:2px solid black";
    padu.innerHTML = "";
  }

  if (flag) {
    document.getElementById("step1").style = "transform:translateY(-1100px)";
    document.getElementById("step2").style = "transform:translateY(-1100px)";
    document.getElementById("step3").style = "transform:translateY(-1100px)";
    document.getElementById("step4").style = "transform:translateY(-1100px)";
    console.log("CURRENT ADDRESS :- " + cadd.value);
    console.log("PERMANENT ADDRESS :- " + padd.value);
  }
};

//STEP3
let back2 = document.getElementById("back2");
back2.onclick = () => {
  document.getElementById("step1").style = "transform:translateY(-600px)";
  document.getElementById("step2").style = "transform:translateY(-600px)";
  document.getElementById("step3").style = "transform:translateY(-600px)";
  document.getElementById("step4").style = "transform:translateY(-600px)";
};

let btn3 = document.getElementById("btn3");
btn3.onclick = () => {
  let deg = document.getElementById("deg");
  let ins = document.getElementById("ins");
  let score = document.getElementById("score");
  let year = document.getElementById("year");
  let insu = document.getElementById("insu");
  let scoreu = document.getElementById("scoreu");
  let yearu = document.getElementById("yearu");

  let flag = true;
  if (ins.value.length == 0) {
    ins.style = "border:2px solid red;outline:none";
    insu.innerHTML = "* PLEASE ENTER YOUR INSTITUTE NAME";
    flag = false;
  } else {
    ins.style = "border:2px solid black;";
    insu.innerHTML = "";
  }

  if (score.value.length == 0) {
    score.style = "border:2px solid red;outline:none;";
    scoreu.innerHTML = "* PLEASE ENTER YOUR SCORE";
    flag = false;
  } else {
    reg = /[0-9]|\./;
    for (i = 0; i < score.value.length; i++) {
      if (reg.exec(score.value[i]) == null) {
        score.style = "border:2px solid red;outline:none;";
        scoreu.innerHTML = "* NON NUMERICS ARE NOT ALLOWED";
        flag = false;
        break;
      }
    }
    if (flag) {
      score.style = "border:2px solid black;";
      scoreu.innerHTML = "";
    }
  }

  if (year.value.length == 0) {
    year.style = "border:2px solid red;outline:none";
    yearu.innerHTML = "* ENTER YOUR DEGREE COMPLETION DATE";
    flag = false;
  } else {
    year.style = "border:2px solid black";
    yearu.innerHTML = "";
  }

  if (flag) {
    document.getElementById("step1").style = "transform:translateY(-1650px)";
    document.getElementById("step2").style = "transform:translateY(-1650px)";
    document.getElementById("step3").style = "transform:translateY(-1650px)";
    document.getElementById("step4").style = "transform:translateY(-1650px)";
    console.log("HIGHEST DEGREE :- " + deg.value);
    console.log("INSTITUTE :- " + ins.value);
    console.log("SCORE :- " + score.value);
    console.log("COMPLETION DATE :- " + year.value);
  }
  let;
};

//STEP4
let back3 = document.getElementById("back3");
back3.onclick = () => {
  document.getElementById("step1").style = "transform:translateY(-1100px)";
  document.getElementById("step2").style = "transform:translateY(-1100px)";
  document.getElementById("step3").style = "transform:translateY(-1100px)";
  document.getElementById("step4").style = "transform:translateY(-1100px)";
};

let submit = document.getElementById("submit");
submit.onclick = () => {
  let ph = document.getElementById("ph");
  let email = document.getElementById("email");
  let hobby = document.getElementById("hobby");
  let phu = document.getElementById("phu");
  let emailu = document.getElementById("emailu");
  let hou = document.getElementById("hou");

  let flag = true;
  if (ph.value.length != 10) {
    ph.style = "border:2px solid red;outline:none;";
    phu.innerHTML = "* PLEASE ENTER 10 DIGIT PHONE NUMBER";
    flag = false;
  } else {
    reg = /[0-9]|\./;
    for (i = 0; i < ph.value.length; i++) {
      if (reg.exec(ph.value[i]) == null) {
        ph.style = "border:2px solid red;outline:none;";
        phu.innerHTML = "* NON NUMERICS ARE NOT ALLOWED";
        flag = false;
        break;
      }
    }
    if (flag) {
      ph.style = "border:2px solid black;";
      phu.innerHTML = "";
    }
  }

  if (email.value.length == 0) {
    email.style = "border:2px solid red;outline:none";
    emailu.innerHTML = "* PLEASE ENTER YOUR EMAIL ADDRESS";
    flag = false;
  } else {
    email.style = "border:2px solid black;";
    emailu.innerHTML = "";
  }

  if (hobby.value.length == 0) {
    hobby.style = "border:2px solid red;outline:none";
    hou.innerHTML = "* PLEASE ENTER YOUR EMAIL ADDRESS";
    flag = false;
  } else {
    hobby.style = "border:2px solid black;";
    hou.innerHTML = "";
  }

  if (flag) {
    console.log("PHONE NUMBER :- " + ph.value);
    console.log("EMAIL :- " + email.value);
    console.log("HOBBY :- " + hobby.value);
    document.getElementById("form_submit").click();
    alert("SUCCESSFULLY SUBMITTED 😊😊");
  }
};
