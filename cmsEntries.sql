DROP DATABASE IF EXISTS cms_entries;
CREATE DATABASE cms_entries;

\c cms_entries;

CREATE TABLE entries (
  ID SERIAL PRIMARY KEY,
  headerText VARCHAR
  -- breed VARCHAR,
  -- age INTEGER,
  -- sex VARCHAR
);

INSERT INTO entries (headerText)
  VALUES ('Hello CMS 1');
