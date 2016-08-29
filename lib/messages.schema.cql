CREATE TABLE fabula.messages (
    chatroom text,
    timestamp timestamp,
    message text,
    username text,
    PRIMARY KEY(chatroom, timestamp)
) WITH CLUSTERING ORDER BY (timestamp ASC);