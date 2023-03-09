CREATE DATABASE SocialMedia_DB
GO

USE SocialMedia_DB
GO

CREATE TABLE users
(
    user_id INT IDENTITY(1000,1) PRIMARY KEY,
    full_name NVARCHAR(234)  ,
    user_name NVARCHAR(234) UNIQUE ,
    email NVARCHAR(234) NOT NULL UNIQUE ,
    phone_number NVARCHAR(234) UNIQUE,
    created_at DATETIME2 NOT NULL DEFAULT(GETUTCDATE()),
    gender VARCHAR(20) NOT NULL,
    country VARCHAR(234) NOT NULL,
    cover_image NVARCHAR(max) ,
    profile_image NVARCHAR(max) ,
    is_deleted BIT DEFAULT 0,
    [password] NVARCHAR(234) NOT NULL 
)
GO

CREATE TABLE posts (
    post_id uniqueidentifier PRIMARY KEY DEFAULT(NEWID()),
    title varchar(100) NOT NULL,
    "description" VARCHAR(max) ,
    user_id INT FOREIGN KEY REFERENCES users(user_id),
    created_at TIMESTAMP,
    is_deleted BIT,
    likes INT ,
    picture  NVARCHAR(max),
    video NVARCHAR(max),
)
GO

CREATE TABLE comments (
    comment_id uniqueidentifier PRIMARY KEY DEFAULT(NEWID()),
    [comment_text] varchar(250) NOT NULL,
    post_id uniqueidentifier REFERENCES posts(post_id),
    commentor INT  FOREIGN KEY REFERENCES users(user_id),
    submitted_at TIMESTAMP,
    is_deleted bit ,
    likes bigint ,
)
GO

CREATE TABLE friends (
    friend_id uniqueidentifier PRIMARY KEY DEFAULT(NEWID()),
    user_id INT FOREIGN KEY REFERENCES users(user_id),
    friend_username VARCHAR(50)
);
