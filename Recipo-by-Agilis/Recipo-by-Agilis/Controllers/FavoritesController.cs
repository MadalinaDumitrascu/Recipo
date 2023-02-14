using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Recipo_by_Agilis.Models;

namespace Recipo_by_Agilis.Controllers;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class FavoritesController: ControllerBase
{
    private readonly RecipoContext _context;
    private readonly UserManager<IdentityUser> _userManager;

    public FavoritesController(RecipoContext context, UserManager<IdentityUser> userManager)
    {
        _context = context;
        _userManager = userManager;
    }


    [HttpGet("{recipeId}")]
    public async Task<ActionResult<Favorites>> PostFavorites(int recipeId)
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var favorites = _context.Favorites.Add(new Favorites()
        {
            RecipeId = recipeId,
            UserId = user.Id
        });
        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpDelete("{recipeId}")]
    public async Task<IActionResult> DeleteFavorite(int recipeId)
    {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);
        var favorite = _context.Favorites.AsEnumerable().Where(item => item.RecipeId == recipeId && item.UserId == user.Id);
        if (favorite.First() == null)
        {
            return NotFound();
        }

        _context.Favorites.Remove(favorite.First());
        await _context.SaveChangesAsync();

        return NoContent();
    }
}