const message = document.getElementById("message")

async function pay() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        message.textContent = "Payment Successful!"
    }, 2000);
    })
}

const paybtn = document.getElementById("paybtn")

paybtn.addEventListener("click", ()=>{
    message.textContent = "Processing Payment...."

    pay().then((text) => {
        message.textContent = text
        paybtn.disable = true
    })
})