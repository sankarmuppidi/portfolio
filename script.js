
  
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
    document.addEventListener("DOMContentLoaded", function () {
      // Sample testimonial data (you can replace this with real data from your backend)
      const testimonialsData = [
          {
              name: "John Doe",
              occupation: "CEO, XYZ Company",
              testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              image: "avatar1.jpg" // Replace with the actual image path
          },
          {
              name: "Jane Smith",
              occupation: "Marketing Manager, ABC Inc.",
              testimonial: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              image: "avatar2.jpg" // Replace with the actual image path
          }
      ];
  
      // Function to dynamically populate testimonials
      function renderTestimonials() {
          const testimonialContainer = document.getElementById("testimonialContainer");
  
          testimonialsData.forEach(testimonial => {
              const testimonialDiv = document.createElement("div");
              testimonialDiv.classList.add("testimonial");
  
              testimonialDiv.innerHTML = `
                  <img src="${testimonial.image}" alt="${testimonial.name}">
                  <div>
                      <p>${testimonial.testimonial}</p>
                      <cite>${testimonial.name}, <span>${testimonial.occupation}</span></cite>
                  </div>
              `;
  
              testimonialContainer.appendChild(testimonialDiv);
          });
      }
  
      // Call the function to render testimonials
      renderTestimonials();
  });