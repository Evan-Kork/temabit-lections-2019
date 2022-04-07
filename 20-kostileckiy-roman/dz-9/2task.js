document.write("<h1>Таблица умножения</h1>"); 
 
for (i = 1; i <= 10; i++){  
document.write("<div style='float: left; width: 70px;'>"); 
for (j = 1; j <=10; j++)  
{ 
document.write(i + "*" + j + "=" +(j*i) + "<br>"); 
 
}  
document.write ("</div>"); 
 
} 