-- All the vegetarian recipes with potatoes
SELECT DISTINCT r.name AS Recipe_Name
FROM Recipe r
JOIN Recipe_Ingredient ri ON r.recipe_id = ri.recipe_id
JOIN Ingredient i ON ri.ingredient_id = i.ingredient_id
JOIN Recipe_Category rc ON r.recipe_id = rc.recipe_id
JOIN Category c ON rc.category_id = c.category_id
WHERE c.name = 'Vegetarian' AND i.name = 'Potatoes';

-- All the cakes that do not need baking

SELECT DISTINCT r.name AS Recipe_Name
FROM Recipe r
JOIN Recipe_Category rc ON r.recipe_id = rc.recipe_id
JOIN Category c ON rc.category_id = c.category_id
WHERE c.name = 'Cake' AND r.recipe_id NOT IN (
    SELECT DISTINCT r.recipe_id
    FROM Recipe r
    JOIN Recipe_Step rs ON r.recipe_id = rs.recipe_id
    JOIN Step s ON rs.step_id = s.step_id
    WHERE s.description LIKE '%bake%'
);

-- All the vegan and Japanese recipes

SELECT DISTINCT r.name AS Recipe_Name
FROM Recipe r
JOIN Recipe_Category rc ON r.recipe_id = rc.recipe_id
JOIN Category c ON rc.category_id = c.category_id
WHERE c.name IN ('Vegan', 'Japanese');