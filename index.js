document.getElementById("myform").addEventListener("submit" , calc);


function calc(e){
    const numOutlets = document.getElementById("num-outlets").value;
    const apc = document.getElementById("apc").value;
    
    const openservice = document.getElementById("open-service").value;
    const turnaround = document.getElementById("table-turnaround").value;
    const operationdays = document.getElementById("operation-days").value;
    const mismatch = document.getElementById("mis-orders").value;
    const avgcust = document.getElementById("avg-cust").value;
    const digi = document.getElementById("digi-cost").value;
    const waiters = document.getElementById("num-waiters").value;
    const ipad = document.getElementById("refur-ipad").value;

    
    var earnings = parseFloat(numOutlets) * parseFloat(apc) * parseFloat(openservice) * parseFloat(turnaround) * parseFloat(avgcust) * parseFloat(operationdays);
    var saved = (parseFloat(mismatch) * 300) + (parseFloat(digi) * 5000) + (parseFloat(waiters) * 18000 * 12);
    var upsell = 0.03 * earnings;
    var ipadcost = parseFloat(ipad) * 17000;
    var profit = upsell + (parseFloat(digi) * 5000) + (parseFloat(mismatch) * 300) + (parseFloat(waiters) * 18000 * 12) - ipadcost;
    
    
    document.getElementById("earn").innerHTML = "Rs." + earnings;
    document.getElementById("saved").innerHTML = "Rs." + saved;
    document.getElementById("profit").innerHTML = "Rs." + profit;
    e.preventDefault();


}