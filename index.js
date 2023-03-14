
var cnt1=0;

document.querySelector("#but1").addEventListener("click" , function()
{
cnt1++;
if(cnt1<=15)
{
document.querySelector("#but1").innerHTML=cnt1;
}
});


var cnt2=0;

document.querySelector("#but2").addEventListener("click" , function()
{
cnt2++;
if(cnt2<=15)
{
var count2=cnt2;
document.querySelector("#but2").innerHTML=count2;
}
});

document.querySelector("#minus1").addEventListener("click" , function()
{
    document.querySelector("#but1").innerHTML=cnt1--;
});

document.querySelector("#minus2").addEventListener("click" , function()
{
    document.querySelector("#but2").innerHTML=cnt2--;
});