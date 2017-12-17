/* função auto-executável */
(function(){
            
    var num = 0 + Math.random() * (5 - 0);
    num = parseInt(num);
    vet = Array("#FB44DF", "#606060","#FB4463", "#50D366", "#59D7F9");
    
    document.getElementById("neon-color").style.color = vet[num];
    
    document.getElementById("menu").style.background = vet[num];
            
})();
    