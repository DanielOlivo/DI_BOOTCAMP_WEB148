CREATE TABLE regions(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

select * from regions;

CREATE TABLE countries(
    id SERIAL PRIMARY KEY,
    region_id SERIAL NOT NULL,
    name VARCHAR(100) UNIQUE NOT NULL,
    FOREIGN KEY (region_id) REFERENCES regions(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE capitals(
    id SERIAL PRIMARY KEY,
    country_id SERIAL NOT NULL,
    name VARCHAR(100) NOT NULL,
    FOREIGN KEY (country_id) REFERENCES countries(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE flags(
    id SERIAL PRIMARY KEY,
    country_id SERIAL NOT NULL,
    png VARCHAR(255),
    svg VARCHAR(255),
    FOREIGN KEY (country_id) REFERENCES countries(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE populations(
    id SERIAL PRIMARY KEY,
    country_id SERIAL NOT NULL,
    population INT NOT NULL,
    FOREIGN KEY (country_id) REFERENCES countries(id) ON DELETE CASCADE ON UPDATE CASCADE
);
