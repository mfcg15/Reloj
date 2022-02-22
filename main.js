const secundos = document.getElementById("seconds")
const minutos = document.getElementById("minutes")
const horas = document.getElementById("hour")

function getHour() 
{
    let horas = new Date().getHours();
    let minutos = new Date().getMinutes();
    let segundos = new Date().getSeconds();

    if(horas >= 12)
    {
        hour = horas /12 *360;
    }
    else
    {
        hour = horas /24 *360;
    }
    
    hour += minutos/60*30;
    minutes = minutos/60+360;
    seconds = segundos/60*360;

    return [hour,minutes,seconds]
}
      
setInterval( function() 
{
      var time = getHour();
      horas.style.transform = "rotate("+time[0]+"deg)";
      minutos.style.transform = "rotate("+time[1]+"deg)";
      secundos.style.transform = "rotate("+time[2]+"deg)";
}, 1000);
