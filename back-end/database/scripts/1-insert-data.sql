COPY ktc_players FROM '/data/datasource.csv' DELIMITER ',' CSV;
SELECT SETVAL('ktc_players_id_seq', (SELECT MAX(id) + 1 FROM ktc_players));
