function n(){return{1:"stycze\u0144",2:"luty",3:"marzec",4:"kwiecie\u0144",5:"maj",6:"czerwiec",7:"lipiec",8:"sierpie\u0144",9:"wrzesie\u0144",10:"pa\u017Adziernik",11:"listopad",12:"grudzie\u0144"}}function o(e){return String(e).padStart(2,0)}function r(e){return n()[e]}var t=new Date,i=`${o(t.getDate())} ${r(t.getMonth()+1)} ${t.getFullYear()}`;console.log(i);console.log();
