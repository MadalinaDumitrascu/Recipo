namespace Recipo_by_Agilis.Models;

public class IngredientInRecipe
{
    public int Id { get; set; }
    public int IngredientId { get; set; }
    public int RecipeId { get; set; }
    public int Quantity { get; set; }
    public string QuantityType { get; set; }
}