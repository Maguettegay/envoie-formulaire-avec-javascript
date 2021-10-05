
// $("#submit").click(function(){
//     var nom = $("#nom").val();
//     var courriel = $("#courriel").val();
//     var mdp = $("#mdp").val();
    

//     if(nom == '' || courriel == '' || mdp ==''){
//         alert("Desolé ! Mais il est obligatoire de remplir tous les champs");

    
//     }else{
    var nom = document.getElementById('nom').value;
    var courriel = document.getElementById('courriel').value;
    var mdp = document.getElementById('mdp').value;

        document.getElementById('compte').addEventListener("submit", ()=>{
        var page2=document.getElementById("page2");
        page2.classList.add("page2");

        document.getElementById("page2").innerHTML="<h1 style='color:green'>Merci!</h1> Votre compte a été créé avec succès."
    });
