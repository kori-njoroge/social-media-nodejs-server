-- CREATE DATABASE social_media_db
-- GO

use social_media_db
GO

CREATE TABLE users (
    user_id int IDENTITY(1,1) PRIMARY KEY,
    full_names varchar(250) NOT NULL,
    email varchar(250) UNIQUE NOT NULL,
    gender varchar NOT NULL,
    country varchar NOT NULL,
    cover_image VARCHAR(max) ,
    profile_image VARCHAR(max) ,
    created_at TIMESTAMP,
   
)

GO



CREATE TABLE posts (
    post_id varchar(20) PRIMARY KEY,
    title varchar(100) NOT NULL,
    "description" VARCHAR(max) ,
    user_id int REFERENCES users(user_id),
    created_at TIMESTAMP,
    is_deleted bit,
    likes bigint ,
    picture  VARCHAR(max),
    video varchar(max),
)


GO

CREATE TABLE comments (
    comment_id VARCHAR(20)  PRIMARY KEY,
    text varchar(250) NOT NULL,
    post_id VARCHAR(20) REFERENCES posts(post_id),
    commentor INT REFERENCES users(user_id),
    submitted_at TIMESTAMP,
    is_deleted bit ,
    likes bigint ,
)

GO



