function updateDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();
    document.getElementById('date').textContent = `${day}/${month}/${year}`;
}
updateDate();