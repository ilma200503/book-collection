# Projekt: Book Collection

**Ilma Majdanac**

## Projektbeskrivning
Projektet BookCollcetion ville jag testa på att göra efetrsom jag själv läser mycket böcker och vill ha en sida jag kan hitta upp och spara mina favorit böcker på. Jag ville göra den simpel till en början och implementerade verktyg som, 1. att man kan söka upp sin bok, 2. lägga till boken i sin personliga online samling, 3. lägga personliga kommentarer, 4.Samlingen samt kommentarer sparas i localStorage så att det finns kvar även efter en hard refresh. Jag har hittat en liknande sida vid namnet goodreads, därav kan jag samtidigt konstatera att behovet till en sån här sida finns. All min data hämtas från Open Library API, jag valde detta API:et eftersom den hade alla möjliga böcker listat, allt från super gamla böcker till de nysläppta böckerna. Obs: Skapade samma projekt men fick skrapa den och börja om pga många errors, så detta är en mer finslipad version av mitt första projekt.

## API
Open Library API: (https://openlibrary.org/developers/api)

## Instruktioner för att köra projektet

1. Klona mitt repot:
   git clone https://github.com/ilma200503/book-collection

2. Gå in i mappen:
   cd book-collection/book-collection

3. Installera beroenden:
   npm install

4. Starta projektet:
   npm run dev

5. Öppna sidan/projektet [http://localhost:5173] i webbläsaren.

## Implementerade features
-  Söka efter böcker via Open Library API
-  Visa detaljsida för varje bok
-  Spara böcker till sin personliga samling (Create)
-  Redigera kommentarer/anteckningar om böcker (Update)
-  Ta bort böcker från sin personliga samlingen (Delete)
-  Samlingen sparas i localStorage (finns kvar efter hard refresh)
-  Klickbara boktitlar i personliga samlingen

## Tekniker
- React + Vite
- React Router DOM
- Axios
- Open Library API
- localStorage

## Kända begränsningar
- Samlingen sparas endast lokalt i webbläsaren (ingen databas tillagd)
- Ändringar i Open Library API kan påverka projektet/webbsidan
- Lång väntetid när man söker på böcker
