
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Recipo_by_Agilis.Models;

public class RecipoContext : IdentityDbContext
{
    public RecipoContext(DbContextOptions options) : base(options) { }


    public DbSet<Ingredient> Ingredients { get; set; }
    public DbSet<Recipe> Recipes { get; set; }
    public DbSet<IngredientInRecipe> IngredientsInRecipes { get; set; }
    public DbSet<Category> Category { get; set; }
    public DbSet<Subscription> Subscription { get; set; }
    
    public DbSet<UserSubscription> UserSubscriptions { get; set; }
    public DbSet<Favorites> Favorites { get; set; }

    public DbSet<RecipeByUser> RecipeByUser { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        SeedRoles(builder);
    }
    private static void SeedRoles(ModelBuilder builder)
    {
        builder.Entity<IdentityRole>().HasData(
            new IdentityRole() { Name = "Admin", ConcurrencyStamp = "1", NormalizedName = "Admin" },
            new IdentityRole() { Name = "FreeUser", ConcurrencyStamp = "2", NormalizedName = "FreeUser" },
            new IdentityRole() { Name = "SubscribedUser", ConcurrencyStamp = "3", NormalizedName = "SubscribedUser" }
        );
    }
}