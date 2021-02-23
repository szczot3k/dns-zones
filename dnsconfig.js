// Aliases:

var CF_PROXY_OFF = {'cloudflare_proxy': 'off'};
var CF_PROXY_ON = {'cloudflare_proxy': 'on'};


// Providers:

var REG_OVH = NewRegistrar("ovh", "OVH");
var OVH = NewDnsProvider("ovh", "OVH"); // NOT USED at the moment
var CLOUDFLARE = NewDnsProvider('cloudflare','CLOUDFLAREAPI');

// Domains:

D('szczot3k.pl', REG_OVH, DnsProvider(CLOUDFLARE),
    A('@', '51.68.142.236'),
    MX('@', 1, 'mx0.mail.ovh.net.'),
    MX('@', 5, 'mx1.mail.ovh.net.'),
    MX('@', 50, 'mx2.mail.ovh.net.'),
    MX('@', 100, 'mx3.mail.ovh.net.'),
    A('www', '51.68.142.236'),
    A('sv01.cloud', '51.68.142.236'),
    A('traefik', '51.68.142.236'),
    SRV('_autodiscover._tcp', 0, 0, 443, 'pro1.mail.ovh.net.'),
    CNAME('autoconfig', 'autodiscover.mail.ovh.net.')
);

D('kszczot.ovh', REG_OVH, DnsProvider(CLOUDFLARE),
    ALIAS('@', 'szczot3k.github.io.', CF_PROXY_ON),
    CNAME('www', 'szczot3k.github.io.', CF_PROXY_ON),
    A('nextcloud', '5.135.153.44'),
    AAAA('nextcloud', '2001:41d0:8:d32c::1'),
    A('sv1', '51.68.142.236', CF_PROXY_ON),
    A('sv2', '5.135.153.44', CF_PROXY_ON),
    AAAA('sv2', '2001:41d0:8:d32c::1', CF_PROXY_ON),
    MX('@', 10, 'mx.mikr.us.'),
    TXT('@', 'v=spf1 include:spf.mikr.us -all')
);

D('threelip.ovh', REG_OVH, DnsProvider(CLOUDFLARE),
    A('@', '5.135.153.44', CF_PROXY_ON),
    AAAA('@', '2001:41d0:8:d32c::1', CF_PROXY_ON),
    MX('@', 10, 'mx.mikr.us.'),
    TXT('@', 'v=spf1 include:spf.mikr.us -all')
);
