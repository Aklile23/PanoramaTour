AFRAME.registerComponent('navigate', {
  init: function () {
      var sky = document.getElementById('sky');
      var roomNo = 1;
      let el = this.el;

      this.toggleColor = function() {
          fadeOut(sky, function() {
              if (roomNo == 1) {
                  roomNo = 0;
                  sky.setAttribute('src', '../Images/Rooms/Bedroom.jpg');
              } else {
                  roomNo = 1;
                  sky.setAttribute('src', '../Images/Rooms/LivingRoom.jpg');
              }
              fadeIn(sky);
          });
      };

      this.el.addEventListener('mouseenter', function() {
          el.setAttribute('scale', '0.6 0.6 0.6');
      });

      this.el.addEventListener('mouseleave', function() {
          el.setAttribute('scale', '0.5 0.5 0.5');
      });

      this.el.addEventListener('click', this.toggleColor);
  },
  remove: function () {
      this.el.removeEventListener('click', this.toggleColor);
  },
});

function fadeOut(element, callback) {
  element.setAttribute('animation__fadeout', {
      property: 'material.opacity',
      to: 0,
      dur: 1000,
      easing: 'easeInOutQuad',
      startEvents: 'fadeout'
  });
  element.emit('fadeout');
  setTimeout(callback, 1000);  // Match this duration with the animation duration
}

function fadeIn(element) {
  element.setAttribute('animation__fadein', {
      property: 'material.opacity',
      to: 1,
      dur: 1000,
      easing: 'easeInOutQuad',
      startEvents: 'fadein'
  });
  element.emit('fadein');
}


