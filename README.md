# simple_mvc

Demotaan MVC-mallin mukaista REST APIA

## env
Jos halutaan omalla koneella ympäristömuuttujia, niin asennetaan paketti **dotenv**

Eli ajetaan komento **npm install dotenv**
Ja sitten tiedostoon, jossa tarvitaan ympäristömuuttujia rivit 
<pre>
const dotenv=require('dotenv');
dotenv.config();
</pre>
Ja luodaan sovelluksen juureen tiedosto **.env** ja sinne esimerkiksi rivi
<pre>
PORT=4000
</pre> 
jolloin muuttujaan viitataan nimellä **process.env.PORT**