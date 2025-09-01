function domainName(url) {
   if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'http://' + url;
  }
  const hostname = new URL(url).hostname.replace(/^www\./, '');
  const parts = hostname.split('.');
  return parts[0];
}

console.log(domainName("http://github.com/carbonfive/raygun")); // github
