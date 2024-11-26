function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} est une année bissextile.`;
    } else {
        return `${year} n'est pas une année bissextile.`;
    }
}

function getTicketPrice(age) {
    if (age <= 12) {
        return "Le prix du billet est de 10 $.";
    } else if (age >= 13 && age <= 17) {
        return "Le prix du billet est de 15 $.";
    } else {
        return "Le prix du billet est de 20 $.";
    }
}

function isPalindrome(str) {
   
    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    
    function checkRecursive(start, end) {
        if (start >= end) return true; /
        if (cleanStr[start] !== cleanStr[end]) return false; 
        return checkRecursive(start + 1, end - 1); 
    }

    return checkRecursive(0, cleanStr.length - 1);
}



function power(x, n) {
    if (n === 0) return 1; 
    if (n < 0) return 1 / power(x, -n); 
    return x * power(x, n - 1); 
}