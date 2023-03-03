CREATE TABLE loginusers(
	 id INT AUTO_INCREMENT PRIMARY KEY,
     uid1 VARCHAR(60) UNIQUE,
	 pwd VARCHAR(60),

  CONSTRAINT contact_name_unique UNIQUE (uid1)    
);

INSERT INTO loginusers(uid1, pwd) VALUES("Rak", "rak@123");
INSERT INTO loginusers(uid1, pwd) VALUES("Manj", "manj@123");

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;
