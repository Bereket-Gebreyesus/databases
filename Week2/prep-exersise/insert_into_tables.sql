-- Insert Categories
INSERT INTO Category (name) VALUES 
('Cake'), 
('No-Bake'), 
('Vegetarian'), 
('Vegan'), 
('Gluten-Free'), 
('Japanese');

-- Insert Ingredients
INSERT INTO Ingredient (name) VALUES 
('Condensed milk'), 
('Cream Cheese'), 
('Lemon Juice'), 
('Pie Crust'), 
('Cherry Jam'), 
('Brussels Sprouts'), 
('Sesame seeds'), 
('Pepper'), 
('Salt'), 
('Olive oil'), 
('Macaroni'), 
('Butter'), 
('Flour'), 
('Milk'), 
('Shredded Cheddar cheese'), 
('Eggs'), 
('Soy sauce'), 
('Sugar');

-- Insert Steps
INSERT INTO Step (description) VALUES 
('Beat Cream Cheese'),
('Add condensed Milk and blend'),
('Add Lemon Juice and blend'),
('Add the mix to the pie crust'),
('Spread the Cherry Jam'),
('Place in refrigerator for 3h.'),
('Preheat the oven'),
('Mix the ingredients in a bowl'),
('Spread the mix on baking sheet'),
('Bake for 30'''),
('Cook Macaroni for 8'''),
('Melt butter in a saucepan'),
('Add flour, salt, pepper and mix'),
('Add Milk and mix'),
('Cook until mix is smooth'),
('Add cheddar cheese'),
('Add the macaroni'),
('Beat the eggs'),
('Add soya sauce, sugar and salt'),
('Add oil to a sauce pan'),
('Bring to medium heat'),
('Add some mix to the sauce pan'),
('Let is cook for 1'''),
('Add oil to a sauce pan'),
('Add some mix to the sauce pan'),
('Let is cook for 1'''),
('Remove pan from fire');

-- Insert Recipes
INSERT INTO Recipe (name, description, category_id) VALUES 
('No-Bake Cheesecake', 'Roll sushi rice and various ingredients in seaweed sheets.', 1),
('Roasted Brussels Sprouts', 'Preheat the oven, Mix the ingredients in a bowl, Spread the mix on baking sheet, Bake for 30''', 4),
('Mac & Cheese', 'Cook Macaroni for 8'', Melt butter in a saucepan, Add flour, salt, pepper and mix, Add Milk and mix, Cook until mix is smooth, Add cheddar cheese, Add the macaroni', 3),
('Tamagoyaki Japanese Omelette', 'Beat the eggs, Add soya sauce, sugar and salt, Add oil to a sauce pan, Bring to medium heat, Add some mix to the sauce pan, Let is cook for 1'', Add oil to a sauce pan, Add some mix to the sauce pan, Let is cook for 1'', Remove pan from fire', 6);

-- Insert Recipe_Category
INSERT INTO Recipe_Category (recipe_id, category_id) VALUES 
(1, 1), (1, 2), (1, 3),
(2, 4), (2, 5),
(3, 3),
(4, 3), (4, 6);

-- Insert Recipe_Ingredient
INSERT INTO Recipe_Ingredient (recipe_id, ingredient_id, quantity, unit) VALUES 
(1, 1, NULL, NULL), 
(1, 2, NULL, NULL), 
(1, 3, NULL, NULL), 
(1, 4, NULL, NULL), 
(1, 5, NULL, NULL), 
(2, 6, NULL, NULL), 
(2, 7, NULL, NULL), 
(2, 8, NULL, NULL), 
(2, 9, NULL, NULL), 
(2, 10, NULL, NULL), 
(3, 11, NULL, NULL), 
(3, 12, NULL, NULL), 
(3, 13, NULL, NULL), 
(3, 14, NULL, NULL), 
(3, 15, NULL, NULL), 
(4, 16, NULL, NULL), 
(4, 17, NULL, NULL), 
(4, 18, NULL, NULL);

-- Insert Recipe_Step
INSERT INTO Recipe_Step (recipe_id, step_id, step_order) VALUES
(1, 1, 1),
(1, 2, 2),
(1, 3, 3),
(1, 4, 4),
(1, 5, 5),
(1, 6, 6),
(2, 7, 1),
(2, 8, 2),
(2, 9, 3),
(2, 10, 4),
(3, 11, 1),
(3, 12, 2),
(3, 13, 3),
(3, 14, 4),
(3, 15, 5),
(4, 16, 1),
(4, 17, 2),
(4, 18, 3),
(4, 19, 4),
(4, 20, 5),
(4, 21, 6),
(4, 22, 7),
(4, 23, 8),
(4, 24, 9),
(4, 25, 10);
