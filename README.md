************************************************
code carousel
      <h3>Pas de kilometres, pas de frontieres</h3>
        <div class="carousel-wrapper">
            <div class="gallery-container">
                <div class="main-image">
                    <button class="nav left">&#10094;</button>
                    <img class="displayed-img" src="./assets/avion.webp" alt="Image principale" loading="lazy"/>
                    <button class="nav right">&#10095;</button>
                </div>
                <div class="thumbnails">
                    <img src="./assets/avion.webp" alt="avion" class="thumb" loading="lazy"/>
                   
                   <img src="./assets/panier_a_salade.webp" alt="voiture" class="thumb" />  
                </div>
            </div>
        </div>       




************************************************
code galerie photo
             <div class="thumbnails-several">
                <img src="./assets/fleur_resultat.webp" alt="fleur_resultat" class="thumb" loading="lazy"/>
                <img src="./assets/veg1.webp" alt="vegetation"  class="thumb" loading="lazy"/>
                <img src="./assets/veg2.webp" alt="vegetation"  class="thumb" loading="lazy"/>
                <img src="./assets/veg3.webp" alt="vegetation" class="thumb" loading="lazy"/>
                <img src="./assets/veg4.webp" alt="vegetation" class="thumb" loading="lazy"/>
                <img src="./assets/veg6.webp" alt="vegetation"  class="thumb" loading="lazy" />
                <img src="./assets/veg7.webp" alt="vegetation"  class="thumb" loading="lazy"/>
                <img src="./assets/papayer.webp" alt="vegetation"  class="thumb" loading="lazy"/>
                <img src="./assets/fromager_resultat.webp" alt="vegetation" class="thumb" loading="lazy"/>
                <img src="./assets/arbre_lune.webp" alt="arbre" class="thumb" loading="lazy"/>         
            </div>
****************************************************
image a 75% et 100% responsive
 <div class="illustration-block">
      <div class="image-container">       
        <img src="./assets/stg_cdps.webp" alt="Illustration CDPS" class="illustration-75" />
        <div class="caption">
          Saint Georges de l'Oyapocke
        </div>
         <img src="./assets/stg_frontiere_resultat.webp" alt="pont" class="illustration-75">
      </div>        
    </div> 
*******************************************************
seion video
<div class="video-container">
            <video controls width="80%" poster="assets/apercu.jpg">
              <source src="./videos/20190723_111725.mp4" type="video/mp4" />
          </video>
          </div>
             <div class="caption">
                      Grand Santi          
            </div>  
****************************************************************************************************
part of de footer and logo

footer {
  background: #f4f4f4; /* couleur de fond du footer */
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
  padding: 15px 20px;
}

.footer-content {
  display: flex;
  align-items: center; /* centre verticalement texte et logo */
  justify-content: center; /* centre horizontalement tout le bloc */
  gap: 10px; /* espace entre logo et texte */
}

.footer-logo img,
.logo-footer {
  width: 40px;  /* taille du logo */
  height: auto;
  transition: transform 0.3s ease;
}

.footer-logo img:hover,
.logo-footer:hover {
  transform: scale(1.1); /* petit zoom au survol */
  cursor: pointer;
}

footer p {
  margin: 0; /* enlève le margin par défaut du <p> */
}




           

