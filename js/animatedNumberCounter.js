// const counters = document.querySelectorAll(".count");
// const speed = 200;

// counters.forEach((counter) => {
//   const animate = () => {
//     const value = +counter.getAttribute("akhi");
//     const data = +counter.innerText;

//     const time = value / speed;
//     if (data < value) {
//       counter.innerText = Math.ceil(data + time);
//       setTimeout(animate, 1);
//     } else {
//       counter.innerText = value;
//     }
//   };

//   animate();
// });




// // Counter To Count Number Visit
// let a = 0;
// $(window).scroll(function() {

//   let oTop = $('#counter').offset().top - window.innerHeight;
//   // Md.Asaduzzaman Muhid
//   if (a == 0 && $(window).scrollTop() > oTop) {
//     $('.counter').each(function() {
//         let $this = $(this);
//         jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//             duration: 2000,
//             easing: 'swing',
//             step: function () {
//                 $this.text(Math.ceil(this.Counter));
//             }
//         });
//     });
//     a = 1;// Md.Asaduzzaman Muhid
//   }
// });


// $(document).ready(function () {
//   let isCounterAnimated = false; // To ensure the animation runs only once

//   $(window).on('scroll', function () {
//     // Calculate when the counter section comes into view
//     let sectionTop = $('#counter').offset().top - window.innerHeight;

//     if (!isCounterAnimated && $(window).scrollTop() > sectionTop) {
//       $('.counter').each(function () {
//         let $this = $(this);
//         let countTo = parseInt($this.text().replace(/\D/g, '')); // Extract the number from the text

//         // Animate the counter
//         $({ countNum: 0 }).animate(
//           { countNum: countTo },
//           {
//             duration: 2000,
//             easing: 'swing',
//             step: function () {
//               $this.text(Math.ceil(this.countNum) + '+'); // Update the counter text with '+'
//             },
//             complete: function () {
//               $this.text(this.countNum + '+'); // Ensure the final number is displayed correctly
//             }
//           }
//         );
//       });

//       isCounterAnimated = true; // Prevent the animation from running multiple times
//     }
//   });
// });
