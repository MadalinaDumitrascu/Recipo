namespace Recipo_by_Agilis.Models;

public class RecipeDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Steps { get; set; }
    public bool IsPremium { get; set; }
    public string ImageLink { get; set; }
    public List<int> IngredientIds { get; set; }
    public List<IngredientDto> IngredientQuantity { get; set; }
    public bool Favorite { get; set; }
}