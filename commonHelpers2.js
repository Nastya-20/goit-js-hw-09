import"./assets/styles-48915209.js";const e={email:"",message:""},r=document.querySelector(".feedback-form"),s=localStorage.getItem("feedback-form-state");if(s){const t=JSON.parse(s);e.email=t.email||"",e.message=t.message||"",r.email.value=e.email,r.message.value=e.message}r.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});r.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Будь ласка, заповніть усі поля форми");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",r.reset()});const a=document.querySelector("input");a&&(a.addEventListener("focus",()=>{a.setAttribute("placeholder","Type area")}),a.addEventListener("blur",()=>{a.removeAttribute("placeholder")}));
//# sourceMappingURL=commonHelpers2.js.map
