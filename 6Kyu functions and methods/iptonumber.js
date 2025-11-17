function ipToNum(ip) {

  const binaryStr = ip
    .split('.')
    .map(octet => (+octet).toString(2).padStart(8, '0'))
    .join('');
return parseInt(binaryStr, 2);
}


function numToIp(num) {

 
  let binaryStr = num.toString(2).padStart(32, '0');

  
  const octets = [];
  for (let i = 0; i < 4; i++) {
    octets.push(parseInt(binaryStr.slice(i * 8, (i + 1) * 8), 2));
  }

  return octets.join('.');
}

