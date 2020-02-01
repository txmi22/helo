create table users (
    id serial primary key,
    username varchar(500),
    password varchar(20)
);

alter table users (
    alter column password text
);

create table posts (
    id serial primary key,
    user_id int references users(id),
    title varchar(200),
    image text,
    content text
);

select * from users;
select * from posts;