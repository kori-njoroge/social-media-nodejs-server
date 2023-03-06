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
    [password] NVARCHAR(234) NOT NULL ,
    created_at DATETIME2 NOT NULL DEFAULT(GETUTCDATE()),
    gender VARCHAR(20) NOT NULL,
    country VARCHAR(234) NOT NULL,
    cover_image NVARCHAR(max) ,
    profile_image NVARCHAR(max) ,
    is_deleted BIT DEFAULT 0
)
GO

INSERT INTO users
    (full_name, email , user_name, phone_number, [password], gender, country )
VALUES
    ('John Doe', 'john.doe@example.com', 'd_john', '254711111111', '123456.john.doe', 'male', 'US'),
    ('Jane Doe', 'jan.doe@example.com', 'jany_d', '254722222222', '123456.jane.doe', 'female', 'US'),
    ('Jammy Doe', 'jammy.doe@example.com', 'jammy_d', '254733333333', '123456.jammy.doe', 'male', 'US'),
    ('Jab Doe', 'jab.doe@example.com', 'd_jab', '254744444444', '123456.jab.doe', 'male', 'US'),
    ('Jake Doe', 'jake.doe@example.com', 'jake_d', '254745555555', '123456.jake.doe', 'male', 'US')
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
