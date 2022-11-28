const main_text = document.getElementById("main_text");
const equals_sign = document.getElementById("sign_equals");
const del_sign = document.getElementById("sign_del");
//const buttons = [];

let s_firstNum = "", s_secondNum = "";
let activeSign = "";


for (let i = 0; i <= 9; i++)
{
  const button = document.getElementById(`btn_${i}`);
  //buttons.push(button);


  button.addEventListener("click", (event) =>
  {
    if (activeSign == "")
    {
      if (s_firstNum == "0")
        s_firstNum = "";
      
      s_firstNum += button.textContent;
      main_text.textContent = s_firstNum;
    }
    else
    {
      if (s_secondNum == "0")
        s_secondNum = "";
      
      s_secondNum += button.textContent;
      main_text.textContent = s_secondNum;
    }
    
    console.log(s_firstNum, s_secondNum);
  });
}

for (let s of "/*+-")
{
  const sign = document.getElementById(`sign_${s}`);

  sign.addEventListener("click", (event) =>
  {
    activeSign = s;

    console.log(activeSign);
  });
}

equals_sign.addEventListener("click", (event) =>
{
  let result = "0";

  if (activeSign != "")
  {
    eval(`result=${s_firstNum}${activeSign}${s_secondNum}`);

    main_text.textContent = result;
    activeSign = "";
    s_firstNum = result;
    s_secondNum = "";
  }
});

del_sign.addEventListener("click", (event) =>
{
  if (s_secondNum != "")
  {
    if (s_secondNum.length > 1)
      s_secondNum = s_secondNum.slice(0, -1);
    else
      s_secondNum = "0";
    
    main_text.textContent = s_secondNum;
  }
  else if (activeSign != "")
  {
    activeSign = "";
    main_text.textContent = s_firstNum;
  }
  else if (s_firstNum.length != "")
  {
    if (s_firstNum.length > 1)
      s_firstNum = s_firstNum.slice(0, -1);
    else
      s_firstNum = "0";
    
    main_text.textContent = s_firstNum;
  }
  else
  {
    main_text.textContent = "0";
  }
});



/*
for (let i = 0; i <= 9; i++)
{
  buttons.push(document.getElementById(`btn_${i}`));

  buttons[i].addEventListener("click", (event) =>
    main_text.textContent = parseInt(main_text.textContent) + parseInt(buttons[i].textContent));
}
*/
