/* datetime.js
 * 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getDateTime(){
    var param1 = new Date();
    return ( param1.getDate() + '/' + (param1.getMonth()+1) + '/' + param1.getFullYear() + ' ' + param1.getHours() + ':' + param1.getMinutes() + ':' + param1.getSeconds());
}

function getTodayDate() {
    var param1 = new Date();
    return ( param1.getDate() + '/' + (param1.getMonth()+1) + '/' + param1.getFullYear());
}

