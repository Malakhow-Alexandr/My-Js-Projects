import BSN from 'bootstrap.native';

 const refs = {
    modal: document.querySelector('#exampleModal'),
    primBtn: document.querySelector('#prim-btn'),
 }


const modal = new BSN.Modal('#exampleModal');


const PROMPT_DELAY = 2000;
const MAX_PROMPT_ATTEMPTS = 4;

let promptCounter = 0;
let hasSubacribed = false;

timeoutForModal();

refs.modal.addEventListener('hide.bs.modal', timeoutForModal)
refs.primBtn.addEventListener('click', ()=>{
    hasSubacribed = true;
    modal.hide()
    setTimeout(()=>{
        alert("thanks for subscribing!")
    },500)
})

function timeoutForModal () {
        setTimeout(()=>{
        if(promptCounter === MAX_PROMPT_ATTEMPTS || hasSubacribed){
            return
        }
        modal.show();
        promptCounter += 1;
    }, PROMPT_DELAY)
}