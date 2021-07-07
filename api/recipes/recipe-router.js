const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

// 🌕   [GET]       api/recipes         res = all recipes
// 🌕   [GET]       api/recipes/:id     res = recipe with specific id
// 🌕   [POST]      api/recipes         res = newly created recipe
// 🌕   [PUT]       api/recipes/:id     res = updated recipe
// 🌕   [DELETE]    api/recipes/:id     res = confirmation

module.exprots = router;
