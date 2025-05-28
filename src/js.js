
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 4,
      gap: 20,
       autoplay: 5000,
  hoverpause: true,
      breakpoints: {
        768: { perView: 2 },
        1024: { perView: 3 }
      }
    }).mount()