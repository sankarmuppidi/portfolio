
  
  /* ----- TYPING EFFECT ----- */
  let typingEffect = new Typed(".typedText",{
    strings : ["data scientist","web Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
  })
  
   // Function to update and display visit count
    function updateVisitCount() {
      let count = localStorage.getItem('visitCount') || 0;
      count = parseInt(count) + 1;
      localStorage.setItem('visitCount', count);
      document.getElementById('visit-count').textContent = count;
    }

    // Call the function on page load
    window.onload = function() {
      updateVisitCount();
    };
