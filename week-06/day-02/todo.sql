SHOW DATABASES;

CREATE DATABASE todo_app;
USE todo_app;

CREATE TABLE todos (
    id INTEGER NOT NULL AUTO_INCREMENT,
    task VARCHAR(255) NOT NULL,
    isDone BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY(id)
);

INSERT INTO todos (task) VALUES ('Walk the dog'), ('Buy milk'), ('Do homework');
SELECT * FROM todos;

UPDATE todos
SET isDone = true
WHERE id = 2;

DELETE FROM todos
WHERE id = 3;