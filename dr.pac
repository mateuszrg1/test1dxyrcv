function FindProxyForURL(url, host) {
var drop = "BLOCK";
/* Return DIRECT to Allow access */
if ((localHostOrDomainIs(host, "google.com")) ||
(localHostOrDomainIs(host, "salesforce.com")) ||
(localHostOrDomainIs(host, "microsoft.com")) ||
(localHostOrDomainIs(host, "Handelsregister.de")) ||
(localHostOrDomainIs(host, "deutsche-bank.de")) ||
(localHostOrDomainIs(host, "kurz-thoerle.com")) ||
(localHostOrDomainIs(host, "bea-brak.de")) ||
(localHostOrDomainIs(host, "deepl.com")) ||
(localHostOrDomainIs(host, "beck-online.beck.de")) ||
(localHostOrDomainIs(host, "lufthansa.com)) ||
(localHostOrDomainIs(host, "bahn.de")) ||
(localHostOrDomainIs(host, "eurowings.com")) ||
(localHostOrDomainIs(host, "nsone.net")) ||
(localHostOrDomainIs(host, "salesforce.com")) ||
(localHostOrDomainIs(host, "zscaler.com"))
return "DIRECT";
/* Default Block Statement to block anything not allowed above */
return drop;
}


