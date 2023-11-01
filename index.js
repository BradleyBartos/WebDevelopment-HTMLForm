
// add cc input conditionally
const ccHandler = (checkbox) => {
  const cc_div = document.querySelector('.cc-email');
  const cc_input = 
    '<label for="cc-email">CC To</label>' + 
    '<input id="cc-email" type="text" name="cc-email" required maxlength="255"/>';

  if (checkbox.checked) {
    cc_div.innerHTML = cc_input;
  } else {
    cc_div.innerHTML = '';
  }
}
