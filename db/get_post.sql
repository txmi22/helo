SELECT *
FROM posts
JOIN users ON users.id = posts.user_id;
