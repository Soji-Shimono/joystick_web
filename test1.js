/*
<!--Reference site-->
<!--https://www.codegrid.net/articles/touch-click-pointer-1/-->
*/
document.addEventListener("touchmove",scroll_control,{passive:false});
function scroll_control(event) {
    event.preventDefault();
}
  class joystick{
    constructor(id,id_x,id_y){   
      this.el_hitarea = id;
      this.el_x = id_x;
      this.el_y = id_y;
      this.size = this.el_hitarea.clientWidth;
      this.centor_x= this.el_hitarea.getBoundingClientRect().left + this.size/2;
      this.centor_y= this.el_hitarea.getBoundingClientRect().top + this.size/2;
      this.el_hitarea.addEventListener('touchstart', (e) => {
        this.el_hitarea.style.backgroundColor = 'red';
        console.log("test");
      }, false);
      
      this.el_hitarea.addEventListener('touchmove', (e) => {
        event.preventDefault(); // タッチによる画面スクロールを止める
        this.el_x.innerHTML = (event.changedTouches[0].pageX - this.centor_x) / (this.size/2);
        this.el_y.innerHTML = (event.changedTouches[0].pageY - this.centor_y) / -(this.size/2);
      }, false);
      
      this.el_hitarea.addEventListener('touchend', (e) => {
        this.el_x.innerHTML = 0;
        this.el_y.innerHTML = 0;
        this.el_hitarea.style.backgroundColor = 'blue';
      }, false);
    }
  }

  testjoy = new joystick(
    document.getElementById('teststick'),
    document.getElementById('x_t'),
    document.getElementById('y_t'),
    );

  leftjoy = new joystick(
    document.getElementById('leftstick'),
    document.getElementById('x_l'),
    document.getElementById('y_l'),
    );

  rightjoy = new joystick(
    document.getElementById('rightstick'),
    document.getElementById('x_r'),
    document.getElementById('y_r'),
    );

  testjoy.el_x.innerHTML = testjoy.centor_x
  testjoy.el_y.innerHTML = testjoy.centor_x



