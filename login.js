function run()
{
var input = document.getElementById("input").value;
var result = document.getElementById("result");
var trya= document.getElementById("trya");
if(input=="Sabari")
{
    result.textContent="Home";
    result.href="home.html";
}
else
{
    trya.textContent="Sorry, Try again";
}

}