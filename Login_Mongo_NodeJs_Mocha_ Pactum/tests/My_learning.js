const assert = require('assert');
 describe('Handle Checkboxes', () => {
 it('should be checked', ()=> { 
 browser.url('http://omayo.blogspot.com'); 
 const checkbox_two = $('[type="checkbox"]:nth-child(2)'); 
 checkbox_two.scrollIntoView(); browser.pause(3000); 
 checkbox_two.click(); 
 browser.pause(3000); 
 }); 
});