document.getElementById('form').addEventListener('submit', (e)=>{
    e.preventDefault()
})



function amount() {
    const item = document.getElementById('item').value
    document.getElementById('amount').value = `GHC${item}`
    document.getElementById('price').textContent = `Place Order (GHC${item})`
}
