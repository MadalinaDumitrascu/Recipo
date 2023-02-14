namespace Recipo_by_Agilis.Models;

public class RecipeByUser
{
    public int Id { get; set; }
    public int RecipeId { get; set; }
    public string UserId { get; set; }
}