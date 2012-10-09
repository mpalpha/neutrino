; mail configuration

insert into configuration (domain, name, value, default_value) values ('mail', 'mail.transport.protocol', 'smtp', 'smtp');
insert into configuration (domain, name, value, default_value) values ('mail', 'mail.smtp.host', 'smtp.gmail.com', 'smtp.gmail.com');
insert into configuration (domain, name, value, default_value) values ('mail', 'mail.smtp.auth', 'true', 'true');
insert into configuration (domain, name, value, default_value) values ('mail', 'mail.smtp.port', '465', '465');
insert into configuration (domain, name, value, default_value) values ('mail', 'mail.smtp.socketFactory.port', '465', '465');
insert into configuration (domain, name, value, default_value) values ('mail', 'mail.smtp.socketFactory.class', 'javax.net.ssl.SSLSocketFactory', 'javax.net.ssl.SSLSocketFactory');
insert into configuration (domain, name, value, default_value) values ('mail', 'mail.smtp.socketFactory.fallback', 'false', 'false');

insert into configuration (domain, name, value, default_value) values ('mail', 'mail.smtp.username', 'yourname@host.com', 'yourname@host.com');
insert into configuration (domain, name, value, default_value) values ('mail', 'mail.smtp.password', 'YOURPASSWORD', 'YOURPASSWORD');

