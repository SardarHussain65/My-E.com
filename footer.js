const footerHTML = 
  
  <footer>
  <div class="container grid grid-two--cols">
      <div class="footerj-1--div">
        <div class="logo-brand">
          <a href="index.html" class="footer-subheading">Buy the things you desire.</a>
        </div>
        <p>May your journey be illuminated by the golden light of your aspirations, guiding you to boundless success and fulfillment</p>
     

      

     </div>
     <div class="social-footer--icons">
      <a href="https://" target="_blank" alt="my discord server link" >
        <i class="fa-brands fa-discord"></i>
        </a>
        <a href="@SardarHussain-yw3ff" target="_blank" alt="my youtube channel link" >
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/sardarhussain1001/" target="_blank" alt="my instagram profile link" >
          <i class="fa-brands fa-instagram"></i>
        </a>
    </div>
    </div>
</footer>

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);
