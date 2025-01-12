import RecipeItem from "./model/RecipeItem";

export default [
  {
    "id": 1,
    "title": "Spaghetti Carbonara",
    "instructions": "Boil spaghetti. Cook pancetta. Mix eggs and cheese. Combine all with pasta.",
    "ingredients": ["spaghetti", "pancetta", "eggs", "parmesan cheese", "black pepper"],
    "isFavorite": true
  },
  {
    "id": 2,
    "title": "Chicken Curry",
    "instructions": "Cook onions and spices. Add chicken and simmer with coconut milk.",
    "ingredients": ["chicken", "onion", "garlic", "ginger", "coconut milk", "curry powder"],
    "isFavorite": false
  },
  {
    "id": 3,
    "title": "Vegetable Stir-Fry",
    "instructions": "Stir-fry vegetables in a wok. Add soy sauce and serve with rice.",
    "ingredients": ["broccoli", "carrot", "bell pepper", "soy sauce", "ginger"],
    "isFavorite": true
  },
  {
    "id": 4,
    "title": "Beef Tacos",
    "instructions": "Cook ground beef. Assemble tacos with toppings.",
    "ingredients": ["ground beef", "taco shells", "lettuce", "cheese", "salsa"],
    "isFavorite": false
  },
  {
    "id": 5,
    "title": "Margherita Pizza",
    "instructions": "Prepare dough. Add tomato sauce, mozzarella, and basil. Bake in oven.",
    "ingredients": ["pizza dough", "tomato sauce", "mozzarella", "basil"],
    "isFavorite": true
  },
  {
    "id": 6,
    "title": "Pancakes",
    "instructions": "Mix batter. Cook on skillet until golden brown.",
    "ingredients": ["flour", "milk", "eggs", "sugar", "butter"],
    "isFavorite": false
  },
  {
    "id": 7,
    "title": "Caesar Salad",
    "instructions": "Combine lettuce, croutons, and dressing. Add parmesan and serve.",
    "ingredients": ["romaine lettuce", "croutons", "Caesar dressing", "parmesan cheese"],
    "isFavorite": true
  },
  {
    "id": 8,
    "title": "Grilled Salmon",
    "instructions": "Season salmon. Grill until cooked through. Serve with lemon.",
    "ingredients": ["salmon", "lemon", "olive oil", "garlic", "salt"],
    "isFavorite": false
  },
  {
    "id": 9,
    "title": "Chocolate Chip Cookies",
    "instructions": "Mix dough. Add chocolate chips. Bake until golden.",
    "ingredients": ["flour", "sugar", "butter", "chocolate chips", "eggs"],
    "isFavorite": true
  },
  {
    "id": 10,
    "title": "Tomato Soup",
    "instructions": "Cook tomatoes with onions and garlic. Blend until smooth.",
    "ingredients": ["tomatoes", "onion", "garlic", "vegetable broth", "cream"],
    "isFavorite": false
  }
].map((item) => new RecipeItem(item.id, item.title, item.ingredients, item.instructions, item.isFavorite))
