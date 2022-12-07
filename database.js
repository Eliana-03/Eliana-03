'use strict';

var firebaseConfig = {
  apiKey: 'AIzaSyCq4xJA9vUIJVQ8Zpk1L2WtSOhKyKVYr9w',
  authDomain: 'personal-resume-60d99.firebaseapp.com',
  databaseURL: 'https://personal-resume-60d99.firebaseio.com',
  projectId: 'personal-resume-60d99',
  storageBucket: 'personal-resume-60d99.appspot.com',
  messagingSenderId: '23661873317',
  appId: '1:23661873317:web:0e60ec53b77c376eba654c',
  measurementId: 'G-PLPPXV1G1X'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

$('#contactForm').submit(function(e) {
  e.preventDefault();

  const name = document.querySelector('#name').value || '';
  const email = document.querySelector('#email').value || '';
  const phone = document.querySelector('#phone').value || '';

  // document.querySelector("#loading-mesagge").disabled = true;

  return firebase
    .database()
    .ref('users')
    .push()
    .set({
      name: name,
      email: email,
      phone: phone
    })
    .then(
      data => {
        console.log('Write succeeded!', data);
        document.querySelector('#name').value = null;
        document.querySelector('#email').value = null;
        document.querySelector('#phone').value = null;
      },
      error => {
        console.log('Error!', error);
      }
    );
});
