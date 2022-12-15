const cards = document.querySelectorAll('.llk .card')

for (let i of cards) {
  i.onclick = function () {
    if (this.className === 'card fan2') {
      this.className = 'card fan1'
    } else {
      this.className = 'card fan2'
    }
  }
}