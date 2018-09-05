function navigate()
{
    var x = window.event.clientX;
    var y = window.event.clientY; 
    document.getElementById('mouse').style.top = y + 2; 
    document.getElementById('mouse').style.left = x + 5; 

}


function dropDown1()
{
    if(document.getElementById('option1').style.display == "none" &&
    document.getElementById('option2').style.display == "none")
    {
        document.getElementById('option1').style.display = "block"; 
        document.getElementById('option2').style.display = "block";
    }
    else
    {
        document.getElementById('option1').style.display = "none";
        document.getElementById('option2').style.display = "none";
    }
}

function dropUp()
{
    document.getElementById('option1').style.display = "none";
    document.getElementById('option2').style.display = "none"; 
}