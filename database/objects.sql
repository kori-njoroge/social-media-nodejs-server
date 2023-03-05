CREATE DATABASE SocialMedia_DB
GO

USE SocialMedia_DB
GO

CREATE TABLE users(
    user_id uniqueidentifier PRIMARY KEY,
    full_name NVARCHAR(234)  ,
    user_name NVARCHAR(234) UNIQUE ,
    email NVARCHAR(234) NOT NULL UNIQUE ,
    phoneNumber NVARCHAR(234) ,
    [password] NVARCHAR(234) NOT NULL ,
    created_At DATETIME2 NOT NULL DEFAULT(GETUTCDATE()),
    is_deleted BIT
)
GO

INSERT INTO users(user_id, full_name, email , user_name, phoneNumber, [password], is_deleted )
VALUES (NEWID(), 'John Doe', 'john.doe@example.com', 'd_john','254711111111','123456.john.doe', 0),
       (NEWID(), 'Jane Doe', 'jan.doe@example.com', 'jany_d','254722222222','123456.jane.doe', 0),
       (NEWID(), 'Jammy Doe', 'jammy.doe@example.com', 'jammy_d', '254733333333','123456.jammy.doe', 1),
       (NEWID(), 'Jab Doe', 'jab.doe@example.com', 'd_jab', '254744444444','123456.jab.doe', 0),
       (NEWID(), 'Jake Doe', 'jake.doe@example.com', 'jake_d', '254745555555','123456.jake.doe', 0)
GO





