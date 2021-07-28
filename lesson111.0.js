fucntion lookProfile(name,prop) {
  for (let x = 0; x < contacts.length; x++) {
    if(contacts[x].firstNmae===name){
        if(contacts[x].hasOwnProperty(prop)){
          return contats [x] [prop];
        }else{
          return "No such property";
        }
    }
  }
  return "No such contact";
}
