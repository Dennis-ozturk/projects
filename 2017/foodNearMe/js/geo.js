var restaurants = [
    //MCDONALDS
    {     
        name: "McDonalds Liljeholmstorget", address: "Liljeholmstorget 94, 117 61 Stockholm", img: "img/mcdonalds.png", 
        info:"måndag 06–00 </br> tisdag 06–00 </br> onsdag 06–00 </br> torsdag 06–00 </br> fredag 06–00 </br> lördag 07–00 </br> söndag 07–00", 
        lat: 59.310432, lon: 18.023019
    },
    {
        name: "McDonalds Katarinavägen", address: "Katarinavägen 1-3, 116 45 Stockholm", img: "img/mcdonalds.png",
        info:"måndag 06–00 </br> tisdag 07–00 </br> onsdag 07–00 </br> torsdag 07–00 </br> fredag 07–04 </br> lördag 07–04</br> söndag 07–00",      
        lat: 59.319471, lon: 18.072991
    },
    {
        name: "McDonalds Sankt Eriksgatan", address: "Sankt Eriksgatan 32, 112 34 Stockholm", img: "img/mcdonalds.png",
        info:"Öppet dygnet runt",       
        lat: 59.333479, lon: 18.032347
    },
    {
        name: "McDonalds Regeringsgatan", address: "Regeringsgatan 20, 111 53 Stockholm", img: "img/mcdonalds.png",
        info:"måndag 07–21 </br> tisdag 07–21 </br> onsdag 07–21 </br> torsdag 07–21 </br> fredag 07–21 </br> lördag 08-20</br> söndag 08-20",       
        lat: 59.331091, lon: 18.068576
    },
    {
        name: "McDonalds Sveavägen", address: "Sveavägen 71, 113 50 Stockholm", img: "img/mcdonalds.png",
        info:"Öppet dygnet runt",        
        lat: 59.343290, lon: 18.055591
    },
     {
        name: "McDonalds Kungsgatan", address: "Kungsgatan 50, 111 35 Stockholm", img: "img/mcdonalds.png",
        info:"måndag 07–00 </br> tisdag 07–00 </br> onsdag 07–00 </br> torsdag 07–00 </br> fredag 07–05 </br> lördag 07-05</br> söndag 07-00",        
        lat: 59.334984, lon: 18.060913
    },
    {
        name: "McDonalds Folkungagatan", address: "Folkungagatan 50, 116 22 Stockholm", img: "img/mcdonalds.png",
        info:"måndag 07–04 </br> tisdag 07–04 </br> onsdag 07–04 </br> torsdag 07–04 </br> fredag 07–00 </br>Öppet dygnet runt</br> söndag 06–04",       
        lat: 59.314108, lon: 18.074012
    },
     {
        name: "McDonalds Götgatan", address: "Götgatan 91, 116 62 Stockholm", img: "img/mcdonalds.png",
        info:"måndag 07–00 </br> tisdag 07–00 </br> onsdag 07–00 </br> torsdag 07–00 </br> fredag 07–04 </br>lördag 07–04</br> söndag 07–00",        
        lat: 59.309030, lon: 18.076226
    },
     {
        name: "McDonalds Hornsgatan", address: "Hornsgatan 88, 118 21 Stockholm", img: "img/mcdonalds.png",
        info:"måndag 09–00 </br> tisdag 09–00 </br> onsdag 09–00</br> torsdag  09–00 </br> fredag  09–04 </br>lördag 09–04</br> söndag 09–00",         
        lat: 59.317912, lon: 18.053704
    },
     {
        name: "McDonalds Centralplan", address: "Centralplan 15, 111 20 Stockholm", img: "img/mcdonalds.png",
        info:"måndag 09–00 </br> tisdag 09–00 </br> onsdag 09–00</br> torsdag  09–00 </br> fredag  09–04 </br>lördag 09–04</br> söndag 09–00",          
        lat: 59.330668, lon: 18.057932
    }, 
     {
        name: "McDonalds Karlaplan", address: "Karlaplan 13, 115 20 Stockholm", img: "img/mcdonalds.png",
        info:"måndag 07–23 </br> tisdag 07–23  </br> onsdag 07–23 </br> torsdag  07–23</br> fredag  07–23</br>lördag 07–23</br> söndag 07–23",           
        lat: 59.330668, lon: 18.057932
    },   
     {
        name: "McDonalds Sergelgatan", address: "Sergelgatan 4, 111 57 Stockholm", img: "img/mcdonalds.png",
        info:"måndag 07–22 </br> tisdag 07–22 </br> onsdag 07–22 </br> torsdag  07–22 </br> fredag  07–23</br>lördag Stängt</br> söndag 08–22",           
        lat: 59.333069, lon: 18.064282
    },   
     {
        name: "McDonalds Nybrogatan", address: "Nybrogatan 18, 114 39 Stockholm", img: "img/mcdonalds.png",
        info:"måndag 07–21 </br> tisdag 07–21 </br> onsdag 07–21 </br> torsdag  07–21 </br> fredag  07–21</br>lördag 08-21</br> söndag 07–21",           
        lat: 59.334930, lon: 18.077705
    },   
     {
        name: "McDonalds Hamngatan", address: "Hamngatan 8, 111 46 Stockholm", img: "img/mcdonalds.png",
        info:"måndag 07–01 </br> tisdag 07–01 </br> onsdag 07–05 </br> torsdag  07–05 </br> fredag  07–06</br>lördag 08-06</br> söndag 08-01",           
        lat: 59.333045, lon: 18.072250
    },
      {
        name: "McDonalds Bogårdsvägen", address: "Bogårdsvägen 30, 128 62 Sköndal", img: "img/mcdonalds.png",
        info:"Öppet dygnet runt",        
        lat: 59.262473, lon: 18.100465
    },      
      {
        name: "McDonalds Kungens Kurva", address: "Kungens Kurvaleden 1, 141 75 Kungens Kurva", img: "img/mcdonalds.png",
        info:"Öppet dygnet runt",         
        lat: 59.266378, lon: 17.897017
    },      
      {
        name: "McDonalds Sockengränd", address: "Sockengränd 1, 120 40 Årsta", img: "img/mcdonalds.png",
        info:"måndag 06–00 </br> tisdag 06–00 </br> onsdag 06–00 </br> torsdag 06–00 </br> fredag Öppet dygnet runt</br>lördag Öppet dygnet runt</br> söndag 06-00",                   
        lat: 59.286526, lon: 18.049024
    },      
      {
        name: "McDonalds Skärholmen centrum", address: "Skärholmen centrum", img: "img/mcdonalds.png",
        info:"måndag 09–20 </br> tisdag 09–20 </br> onsdag 09–20 </br> torsdag 09–20 </br> fredag 09–20 </br> lördag 09–19 </br> söndag 07–00",
        lat: 59.275662, lon: 17.907894
    },
     {
        name: "McDonalds Huddinge", address: "Sjödalstorget 17, 141 47 Huddinge", img: "img/mcdonalds.png", 
        info:"måndag 09–21 </br> tisdag 09–21 </br> onsdag 09–21 </br> torsdag 09–21 </br> fredag 09–21 </br> lördag 09–20 </br> söndag 10-20", 
        lat: 59.235071, lon: 17.982089
    },
     {
        name: "McDonalds Älvsjö", address: "Gamla Huddingevägen 500, 125 42 Älvsjö", img: "img/mcdonalds.png", 
        info:"Öppet dygnet runt",         
        lat: 59.272621, lon: 18.012806
    },

    //MAX HAMBURARE 
    {
        name: "Max Banérgatan", address: "Banérgatan 16, 115 23 Stockholm", img: "img/max.png", 
        info:"måndag 08–17 </br> tisdag 08–17 </br> onsdag 08–17 </br> torsdag 08–17 </br> fredag 08–17 </br> lördag Stängt </br> söndag Stängt", 
        lat: 59.335135, lon: 18.093948
    }, 
     {
        name: "Max Hagaesplanaden", address: "Hagaesplanaden 1-3, 113 30 Stockholm", img: "img/max.png", 
        info:"måndag 10-22 </br> tisdag 10-22 </br> onsdag 10-22 </br> torsdag 10-22 </br> fredag 10-22 </br> lördag 10-22 </br> söndag 10-22", 
        lat: 59.346972, lon: 18.032844
    },  
     {
        name: "Max Vasagatan", address: "Vasagatan 7, 111 20 Stockholm", img: "img/max.png", 
        info:"måndag 07-02 </br> tisdag 07-02 </br> onsdag 07-02 </br> torsdag 07-02 </br> fredag 07-05 </br> lördag 08-05 </br> söndag 08-02", 
        lat: 59.332331, lon: 18.057428
    },  
     {
        name: "Max Lugnets Allé ", address: "Lugnets Allé 22, 120 66 Stockholm", img: "img/max.png", 
        info:"måndag 10:00 </br> tisdag 10:00 </br> onsdag 10:00 </br> torsdag 10:00 </br> fredag 10:01 </br> lördag 10:01 </br> söndag 10:00", 
        lat: 59.302150, lon: 18.103457
    },  
     {
        name: "Max Kungsträdgårdsgatan", address: "Kungsträdgårdsgatan 20, 111 47 Stockholm", img: "img/max.png", 
        info:"måndag 10-01 </br> tisdag 10-05 </br> onsdag 10-05 </br> torsdag 11-06 </br> fredag 11-06 </br> lördag 10-06 </br> söndag 10-01", 
        lat: 59.332669, lon: 18.072127
    },  
     {
        name: "Max Fågelviksvägen", address: "Fågelviksvägen 2, 145 53 Norsborg", img: "img/max.png", 
        info:"måndag 10-02</br> tisdag 10-02 </br> onsdag 10-02 </br> torsdag 10-02 </br> fredag 10-02 </br> lördag 10-02 </br> söndag 10-02", 
        lat: 59.253008, lon: 17.854831
    },   
     {
        name: "Max Masmovägen", address: "Masmovägen 2, 143 32 Vårby", img: "img/max.png", 
        info:"måndag 10-23 </br> tisdag 10-23 </br> onsdag 10-23 </br> torsdag 10-23 </br> fredag 10-23 </br> lördag 10-23 </br> söndag 10-23", 
        lat: 59.251331, lon: 17.876777
    },  
     {
        name: "Max Lissmavägen", address: "Lissmavägen 24, 142 91 Skogås", img: "img/max.png", 
        info:"måndag 10-00 </br> tisdag 10-00 </br> onsdag 10-00 </br> torsdag 10-02 </br> fredag 10-02 </br> lördag 10-02 </br> söndag 10-00", 
        lat: 59.199890, lon: 18.128992
    },  
     {
        name: "Max Huvudstagatan", address: "Huvudstagatan 2A, 171 44 Solna", img: "img/max.png", 
        info:"måndag 09–02 </br> tisdag 09–02 </br> onsdag 09–02 </br> torsdag 09–02 </br> fredag 09–06 </br> lördag 09–06 </br> söndag 09–02", 
        lat: 59.360399, lon: 17.994294
    },
     {
        name: "Max Ulvsundavägen", address: "Ulvsundavägen 160, 168 67 Bromma", img: "img/max.png", 
        info:"måndag 10-00 </br> tisdag 10-00 </br> onsdag 10-00 </br> torsdag 10-00 </br> fredag 10-01 </br> lördag 10-01 </br> söndag 10-00", 
        lat: 59.353339, lon: 17.958406
    },  
     {
        name: "Max Odengatan", address: "Odengatan 60, 113 22 Stockholm", img: "img/max.png", 
        info:"måndag 10:30-22 </br> tisdag 10:30-22 </br> onsdag 10:30-22 </br> torsdag 10:30-22 </br> fredag 10:30-00 </br> lördag 12-00 </br> söndag 12-22", 
        lat: 59.343480, lon: 18.052472
    },  
     {
        name: "Max Lerbovägen", address: "Lerbovägen 2A, 181 61 Lidingö", img: "img/max.png", 
        info:"måndag 10-00 </br> tisdag 10-00 </br> onsdag 10-00 </br> torsdag 10-00 </br> fredag 10-00 </br> lördag 10-00 </br> söndag 10-00", 
        lat: 59.349056, lon: 18.150811
    },  
     {
        name: "Max Kista Galleria", address: "Kista Galleria, 164 91 Kista", img: "img/max.png", 
        info:"måndag 10-23 </br> tisdag 10-23 </br> onsdag 10-23 </br> torsdag 10-23 </br> fredag 10-00 </br> lördag 10-00 </br> söndag 10-23", 
        lat: 59.402310, lon: 17.945734
    },  
     {
        name: "Max Emblavägen", address: "Emblavägen 2, 191 49 Sollentuna", img: "img/max.png", 
        info:"Öppet dygnet runt", 
        lat: 59.445799, lon: 17.942371
    },  
     {
        name: "Max Ytterbyvägen", address: "Ytterbyvägen 18, 183 30 Täby", img: "img/max.png", 
        info:"måndag 09–02 </br> tisdag 09–02 </br> onsdag 09–02 </br> torsdag 09–02 </br> fredag 09–06 </br> lördag 09–06 </br> söndag 09–02", 
        lat: 59.434445, lon: 18.066480
    },  
     {
        name: "Max Enköpingsvägen", address: "Enköpingsvägen, 177 38 Järfälla", img: "img/max.png", 
        info:"måndag 10-00 </br> tisdag 10-00 </br> onsdag 10-00 </br> torsdag 10-00 </br> fredag 10-00 </br> lördag 10-00 </br> söndag 10-00", 
        lat: 59.417656, lon: 17.854250
    },  
     {
        name: "Max Huvudstagatan", address: "Huvudstagatan 2A, 171 44 Solna", img: "img/max.png", 
        info:"måndag 09–02 </br> tisdag 09–02 </br> onsdag 09–02 </br> torsdag 09–02 </br> fredag 09–06 </br> lördag 09–06 </br> söndag 09–02", 
        lat: 59.360399, lon: 17.994294
    },  
     {
        name: "Max SERGELS TORG", address: "SERGELS TORG 1, 111 57 Stockholm", img: "img/max.png", 
        info:"måndag 09–22 </br> tisdag 09–22 </br> onsdag 09–22 </br> torsdag 09–22 </br> fredag 09–00 </br> lördag 09–00 </br> söndag 10-22", 
        lat: 59.331953, lon: 18.064559
    },
    {
        name: "Subway Liljeholmstorget", address: "Liljeholmstorget 3, 117 83 Stockholm", img: "img/subway.png", 
        info:"måndag 09–22 </br> tisdag 09–22 </br> onsdag 09–22 </br> torsdag 09–22 </br> fredag 09–22 </br> lördag 09–22 </br> söndag 09-22", 
        lat: 59.309793, lon: 18.023263
    },
     {
        name: "Subway Rosenlundsgatan", address: "Rosenlundsgatan 60, 118 53 Stockholm", img: "img/subway.png", 
        info:"måndag 09–20 </br> tisdag 09–20 </br> onsdag 09–20 </br> torsdag 09–20 </br> fredag 09–20 </br> lördag 10-19 </br> söndag 11-19", 
        lat: 59.311141, lon: 18.057928
    },
     {
        name: "Subway Liljeholmstorget", address: "Liljeholmstorget 3, 117 83 Stockholm", img: "img/subway.png", 
        info:"måndag 09–22 </br> tisdag 09–22 </br> onsdag 09–22 </br> torsdag 09–22 </br> fredag 09–22 </br> lördag 09–22 </br> söndag 09-22", 
        lat: 59.309793, lon: 18.023263
    },
     {
        name: "Subway Ringvägen", address: "Ringvägen 100, 118 60 Stockholm", img: "img/subway.png", 
        info:"måndag 08–22 </br> tisdag  08–22 </br> onsdag  08–22 </br> torsdag  08–22 </br> fredag  08–22 </br> lördag 10–21 </br> söndag 11-21", 
        lat: 59.307113, lon: 18.076243
    },
     {
        name: "Subway Vartoftagatan", address: "Vartoftagatan 13, 118 56 Stockholm", img: "img/subway.png", 
        info:"måndag 09–20 </br> tisdag 09–20 </br> onsdag 09–20 </br> torsdag 09–20 </br> fredag 09–20 </br> lördag 10-19 </br> söndag 11-19", 
        lat: 59.312217, lon: 18.073534
    },
     {
        name: "Subway Hammarby", address: "Hammarby allé 38, 120 61 Stockholm", img: "img/subway.png", 
        info:"måndag 09–20 </br> tisdag 09–20 </br> onsdag 09–20 </br> torsdag 09–20 </br> fredag 09–20 </br> lördag 10-19 </br> söndag 10-19", 
        lat: 59.303440, lon: 18.092909
    },
     {
        name: "Subway Hornsgatan", address: "Hornsgatan 2, 118 20 Stockholm", img: "img/subway.png", 
        info:"måndag 09–00 </br> tisdag 09–00 </br> onsdag 09–00 </br> torsdag 09–00 </br> fredag 09–03 </br> lördag 10-03 </br> söndag 11-22", 
        lat: 59.320034, lon: 18.070091
    },
     {
        name: "Subway Lindhagensgatan", address: "Lindhagensgatan 147, 112 51 Stockholm", img: "img/subway.png", 
        info:"måndag 10-20 </br> tisdag 10-20 </br> onsdag 10-20 </br> torsdag 10-20 </br> fredag 10-20 </br> lördag 10-19 </br> söndag 10-19", 
        lat: 59.339211, lon: 18.004364
    },
     {
        name: "Subway Klarabergviadukten", address: "Klarabergviadukten 72 Cityterminalen, 111 64 Stockholm", img: "img/subway.png", 
        info:"måndag 07-20 </br> tisdag 07-20 </br> onsdag 07-20 </br> torsdag 07-20 </br> fredag 07-21 </br> lördag 08-20 </br> söndag 07-22", 
        lat: 59.331934, lon: 18.055438
    },
    {
        name: "Subway Kungsgatan", address: "Kungsgatan 61, 111 22 Stockholm", img: "img/subway.png", 
        info:"måndag 10-21 </br> tisdag 10-21 </br> onsdag 10-21 </br> torsdag 10-21 </br> fredag 10-05 </br> lördag 10-05 </br> söndag 11-20", 
        lat: 59.333738, lon: 18.056978
    },
    {
        name: "Subway Regeringsgatan", address: "Regeringsgatan 29, 111 53 Stockholm", img: "img/subway.png", 
        info:"måndag 10-20 </br> tisdag 10-20 </br> onsdag 10-20 </br> torsdag 10-20 </br> fredag 10-20 </br> lördag 10-20 </br> söndag 11-17", 
        lat: 59.332011, lon: 18.055438
    },
    {
        name: "Subway Malmskillnadsgatan", address: "Malmskillnadsgatan 42, 111 57 Stockholm", img: "img/subway.png", 
        info:"måndag 08:30-20 </br> tisdag 08:30-20 </br> onsdag 08:30-20 </br> torsdag 08:30-20 </br> fredag 08:30-20 </br> lördag 11-19 </br> söndag 11-18", 
        lat: 59.334103, lon: 18.066222
    },
    {
        name: "Subway Sturegatan", address: "Sturegatan 3, 114 35 Stockholm", img: "img/subway.png", 
        info:"måndag 08:30-23 </br> tisdag 08:30-23 </br> onsdag 08:30-23 </br> torsdag 08:30-23 </br> fredag 08:30-05 </br> lördag 10-05 </br> söndag 10-22", 
        lat: 59.336945, lon: 18.072852
    },
    {
        name: "Subway Odengatan", address: "Odengatan 49, 113 51 Stockholm", img: "img/subway.png", 
        info:"måndag 10-22 </br> tisdag 10-22 </br> onsdag 10-22 </br> torsdag 10-22 </br> fredag 10-22 </br> lördag 10-22 </br> söndag 11-22", 
        lat: 59.344002, lon: 18.056140
    },
    {
        name: "Subway Sankt Göransgatan", address: "Sankt Göransgatan 129, 112 38 Stockholm", img: "img/subway.png", 
        info:"måndag 09-20 </br> tisdag 09-20 </br> onsdag 09-20 </br> torsdag 09-20 </br> fredag 09-20 </br> lördag 10-17 </br> söndag 10-17", 
        lat: 59.334821, lon: 18.021920
    },
    {
        name: "Subway Sveavägen", address: "Sveavägen 33, 111 34 Stockholm", img: "img/subway.png", 
        info:"måndag 08-00 </br> tisdag 08-00 </br> onsdag 08-00 </br> torsdag 08-00 </br> fredag 08-04 </br> lördag 08-04 </br> söndag 10-22", 
        lat: 59.336892, lon: 18.061754
    },
    {
        name: "Subway Sankt Eriksplan", address: "Sankt Eriksplan 17, 113 20 Stockholm", img: "img/subway.png", 
        info:"måndag 10-20 </br> tisdag 10-20 </br> onsdag 10-20 </br> torsdag 10-20 </br> fredag 10-20 </br> lördag 11-20 </br> söndag 11-20", 
        lat: 59.339248, lon: 18.036756
    },
    {
        name: "Subway Hantverkargatan", address: "Hantverkargatan 33, 112 21 Stockholm", img: "img/subway.png", 
        info:"måndag 10-19 </br> tisdag 10-19 </br> onsdag 10-19 </br> torsdag 10-19 </br> fredag 10-19 </br> lördag 11-17 </br> söndag 11-17", 
        lat: 59.329009, lon: 18.042500
    },
    {
        name: "Subway Erik Dahlbergsallén", address: "Erik Dahlbergsallén 16, 115 20 Stockholm", img: "img/subway.png", 
        info:"måndag 10-20 </br> tisdag 10-20 </br> onsdag 10-20 </br> torsdag 10-20 </br> fredag 10-20 </br> lördag 10-18 </br> söndag 11-17", 
        lat: 59.339779, lon: 18.090282
    },
    {
        name: "Subway Danderydsgatan", address: "Danderydsgatan 27, 114 26 Stockholm", img: "img/subway.png", 
        info:"måndag 10-21 </br> tisdag 10-21 </br> onsdag 10-21 </br> torsdag 10-21 </br> fredag 10-21 </br> lördag 10-19 </br> söndag 11-19", 
        lat: 59.344676, lon: 18.070755
    },
      {
        name: "Subway Vällingbyplan", address: "Vällingbyplan 15, 162 65 Vällingby", img: "img/subway.png", 
        info:"måndag 09-21 </br> tisdag 09-21 </br> onsdag 09-21 </br> torsdag 09-21 </br> fredag 09-21 </br> lördag 09-20 </br> söndag 10-19", 
        lat: 59.363283, lon: 17.872076
    },
       {
        name: "Subway Hälsovägen", address: "Hälsovägen 20, 141 52 Huddinge", img: "img/subway.png", 
        info:"måndag 08-19 </br> tisdag 08-19 </br> onsdag 08-19 </br> torsdag 08-19 </br> fredag 08-19 </br> lördag 11-17 </br> söndag 11-17", 
        lat: 59.222511, lon: 17.939029
    },
       {
        name: "Subway Sjödalstorget", address: "Sjödalstorget 5, 141 52 Huddinge", img: "img/subway.png", 
        info:"måndag 10-19 </br> tisdag 10-19 </br> onsdag 10-19 </br> torsdag 10-19 </br> fredag 10-19 </br> lördag 10-04 </br> söndag 11-16", 
        lat: 59.236152, lon: 17.982101
    },
       {
        name: "Subway Älvsjö", address: "Älvsjö torg 13b, 125 34 Älvsjö", img: "img/subway.png", 
        info:"måndag 09-20 </br> tisdag 09-20 </br> onsdag 09-20 </br> torsdag 09-20 </br> fredag 09-20 </br> lördag 11-20 </br> söndag 11-20", 
        lat: 59.278597, lon: 18.009511
    },
       {
        name: "Subway Diagonalvägen", address: "Diagonalvägen 8, 141 75 Kungens Kurva", img: "img/subway.png", 
        info:"måndag 10-19:30 </br> tisdag 10-19:30 </br> onsdag 10-19:30 </br> torsdag 10-19:30 </br> fredag 10-19:30 </br> lördag 10-18 </br> söndag 11-18", 
        lat: 59.266497, lon: 17.923705
    }
];

/* Calculate distance between two points in Earth in KM */
function getDistance(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}