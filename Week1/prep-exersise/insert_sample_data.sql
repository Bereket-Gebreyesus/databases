INSERT INTO Category (name) VALUES 
('Japanese'), 
('Cake'), 
('Vegetarian');

INSERT INTO Ingredient (name) VALUES 
('Rice'), 
('Noodles'), 
('Flour'), 
('Sugar'), 
('Salt'), 
('Milk'), 
('Egg'), 
('Butter'), 
('Tomato'), 
('Lettuce'), 
('Cucumber'), 
('Carrot'), 
('Tofu');

INSERT INTO Step (description) VALUES 
('Boil rice in water until cooked.'),
('Mix flour, sugar, salt, milk, and egg to make batter.'),
('Cook pancakes on a hot pan with butter.'),
('Slice tomato, lettuce, cucumber, and carrot.'),
('Arrange vegetables on a plate.'),
('Cut tofu into cubes and pan-fry until golden brown.');

INSERT INTO Recipe (name, description, category_id) VALUES 
('Sushi Rolls', 'Roll sushi rice and various ingredients in seaweed sheets.', 1),
('Pancakes', 'Cook fluffy pancakes with butter and syrup.', 2),
('Tofu Salad', 'Combine fresh vegetables and pan-fried tofu.', 3);

INSERT INTO Recipe_Category (recipe_id, category_id) VALUES 
(1, 1), 
(2, 2), 
(3, 3);

INSERT INTO Recipe_Ingredient (recipe_id, ingredient_id, quantity, unit) VALUES 
(1, 1, 1, 'cup'), 
(1, 9, 0.5, 'cup'), 
(1, 10, 1, 'sheet'), 
(2, 3, 1.5, 'cup'), 
(2, 4, 0.25, 'cup'), 
(2, 6, 1, 'cup'), 
(2, 7, 2, 'piece'), 
(2, 8, 2, 'tablespoon'), 
(3, 12, 1, 'head'), 
(3, 11, 0.5, 'piece'), 
(3, 13, 1, 'pack'), 
(3, 1, 1, 'cup');