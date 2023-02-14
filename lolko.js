function hello() {
    var bidAmount = parseInt(document.getElementById("Bid").value);
    var lastBid = parseInt(document.querySelector(".price").textContent.replace(/\D/g, ''));
    var newBid = lastBid + bidAmount;
    document.querySelector(".price").textContent = "Last Bid: $" + newBid;
  }