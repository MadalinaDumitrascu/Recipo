
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Recipo_by_Agilis.Models;

namespace Recipo_by_Agilis.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly RecipoContext _context;
        private readonly  UserManager<IdentityUser> _userManager;

        public RecipesController(RecipoContext context, UserManager<IdentityUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: api/Recipes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes()
        {
            return await _context.Recipes.ToListAsync();
        }

        // GET: api/Recipes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecipeDto>> GetRecipe(int id)
        {
            var recipe = await _context.Recipes.FindAsync(id);

            if (recipe == null)
            {
                return NotFound();
            }

            var RecipeDto = new RecipeDto()
            {
                Id = recipe.Id,
                ImageLink = recipe.ImageLink,
                IsPremium = recipe.IsPremium,
                Name = recipe.Name,
                Steps = recipe.Steps,
                IngredientIds = _context.IngredientsInRecipes.AsEnumerable().Where(i => i.RecipeId == recipe.Id)
                    .Select(i => i.IngredientId).ToList(),
                IngredientQuantity = _context.IngredientsInRecipes.AsEnumerable().Where(i => i.RecipeId == recipe.Id).Select(i => new IngredientDto()
                    {
                        IngredientId = i.IngredientId,
                        Quantity = i.Quantity,
                        QuantityType = i.QuantityType
                    }).ToList()

            };

            return RecipeDto;
        }

        // PUT: api/Recipes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipe(int id, RecipeDto recipe)
        {
            if (id != recipe.Id)
            {
                return BadRequest();
            }

            _context.Update(new Recipe()
            {
                Id = recipe.Id,
                ImageLink = recipe.ImageLink,
                IsPremium = recipe.IsPremium,
                Name = recipe.Name,
                Steps = recipe.Steps,
            });
            await _context.SaveChangesAsync();
            _context.IngredientsInRecipes.AsEnumerable()
                .Where(e => e.RecipeId == recipe.Id).ToList().ForEach(e =>_context.IngredientsInRecipes.Remove(e));
            await _context.SaveChangesAsync();

            recipe.IngredientQuantity.ForEach(e => _context.IngredientsInRecipes.Add(new IngredientInRecipe()
            {
                IngredientId = e.IngredientId,
                Quantity = e.Quantity,
                QuantityType = e.QuantityType,
                RecipeId = recipe.Id
            }));
            await _context.SaveChangesAsync();
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return NoContent();
        }

        // POST: api/Recipes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Recipe>> PostRecipe(RecipeDto recipe)
        {
           var a = _context.Recipes.Add(new Recipe()
            {
                Name = recipe.Name,
                ImageLink = recipe.ImageLink,
                IsPremium = false,
                Steps = recipe.Steps
            });
           await _context.SaveChangesAsync();
            recipe.IngredientQuantity.ForEach(i =>
            {
                _context.IngredientsInRecipes.Add(new IngredientInRecipe()
                {
                    IngredientId = i.IngredientId,
                    Quantity = i.Quantity,
                    QuantityType = i.QuantityType,
                    RecipeId = a.Entity.Id /*_context.Recipes.AsEnumerable().Where(item => item.Name == recipe.Name).Select(item => item.Id).First()*/
                });
                
            });
            await _context.SaveChangesAsync();
            _context.RecipeByUser.Add(new RecipeByUser()
            {
                RecipeId = a.Entity.Id,
                UserId = User.Identity.Name
            });
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecipe", new { id = recipe.Id }, recipe);
        }

        // DELETE: api/Recipes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipe(int id)
        {
            var recipe = await _context.Recipes.FindAsync(id);
            if (recipe == null)
            {
                return NotFound();
            }

            _context.Recipes.Remove(recipe);
            await _context.SaveChangesAsync();
            _context.RecipeByUser.Remove(_context.RecipeByUser.AsEnumerable().Where(e => e.RecipeId == id).First());
            await _context.SaveChangesAsync();
            _context.IngredientsInRecipes.AsEnumerable().Where(e => e.RecipeId == id)
                .Select(e => _context.IngredientsInRecipes.Remove(e));
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecipeExists(int id)
        {
            return _context.Recipes.Any(e => e.Id == id);
        }


        [HttpPost("IngredientsinRecipe")]
        public async Task<IActionResult> GetRecipesByIngredients(List<Ingredient> data)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            var recipes = _context.Recipes.AsEnumerable().Select(e => new RecipeDto
            {
                Id = e.Id,
                IngredientIds = _context.IngredientsInRecipes.AsEnumerable().Where(i => i.RecipeId == e.Id).Select(i=> i.IngredientId).ToList(),
                IsPremium = e.IsPremium,
                Name = e.Name,
                Steps = e.Steps,
                ImageLink = e.ImageLink,
                Favorite = _context.Favorites.AsEnumerable().Where(item => item.RecipeId == e.Id).Where(item => item.UserId == user.Id).Any(item => !item.Id.Equals(null))
            });
            var filteredRecipes = recipes.Where(e => data.Any(i => e.IngredientIds.Any(x => x == i.Id))).OrderBy(e=> e.Name).OrderBy(e => e.IsPremium).ToList();

            return Ok(new
            {
                data = filteredRecipes
            });
        }

        [HttpGet("/Favorites")]
        public async Task<ActionResult> GetFavoriteRecipes()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            var favorites = _context.Favorites.AsEnumerable().Where(e => e.UserId == user.Id).Select(e => e.RecipeId);
            var recipes = _context.Recipes.Where(e => favorites.Any(i => i == e.Id)).Select(e => new RecipeDto()
            {
                Favorite = true,
                Id = e.Id,
                ImageLink = e.ImageLink,
                IsPremium = e.IsPremium,
                Name = e.Name,
                Steps = e.Steps
            }).OrderBy(e=> e.Name).OrderBy(e => e.IsPremium).ToList();

            return Ok(new
            {
                data = recipes
            });
        }

        [HttpGet("User-Recipes")]
        public async Task<ActionResult> GetUserRecipes()
        {
            var userRecipes = _context.RecipeByUser.AsEnumerable().Where(e => e.UserId == User.Identity.Name);
            var Recipes = _context.Recipes.AsEnumerable().Where(e => userRecipes.Any(i => i.RecipeId == e.Id)).Select(
                e => new RecipeDto()
                {
                    Id = e.Id,
                    ImageLink = e.ImageLink,
                    Name = e.Name,
                    Steps = e.Steps,
                    IsPremium = e.IsPremium
                }).OrderBy(e => e.Name);
            return Ok(new
            {
                data = Recipes
            });
        }
    }
}
