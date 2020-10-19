// Providers:

var REG_OVH = NewRegistrar("ovh", "OVH");
var OVH = NewDnsProvider("ovh", "OVH");

// Domains:

D('szczot3k.pl', REG_OVH, DnsProvider(OVH),
    A('@', '51.68.142.236'),
    MX('@', 1, 'mx0.mail.ovh.net.'),
    MX('@', 5, 'mx1.mail.ovh.net.'),
    MX('@', 50, 'mx2.mail.ovh.net.'),
    MX('@', 100, 'mx3.mail.ovh.net.'),
    A('www', '51.68.142.236'),
    A('sv01.cloud', '51.68.142.236'),
    A('gcp01.cloud', '35.231.50.169'),
    A('traefik', '51.68.142.236'),
    A('vps', '51.68.142.236'),
    SRV('_autodiscover._tcp', 0, 0, 443, 'pro1.mail.ovh.net.'),
    CNAME('autoconfig', 'autodiscover.mail.ovh.net.')
);
