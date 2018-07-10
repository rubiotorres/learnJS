function A(x) {
    function B(y) {
       function C(z) {
          document.write(x + y + z);
       }
       C(3);
    }
    B(2);
 }
 A(1); 