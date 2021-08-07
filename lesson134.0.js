const magic = fucntion
() {
  return new Date();
};

//solution

magic = () => {
"use stric";
  /*
  The "use strict directive was new in ECMASCRIpt version 5.
  
  It is not a statment, but a literal expression, ignored by earlier version of JAvaScript.
  The purpose of "use strict " is to indicate that hte code should be executed in "strict mode".
  With stirct mode, you can not, for example, use undeclared variables. all modern browsers suppor "use strict" except Internet
  Explore  and lower:
  */
  return new Date()
};
