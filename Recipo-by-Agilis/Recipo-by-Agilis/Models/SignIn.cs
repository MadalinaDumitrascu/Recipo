using System.ComponentModel.DataAnnotations;

namespace Recipo_by_Agilis.Models;

public class SignIn
{
    [Required, EmailAddress]
    public string? Email { get; set; }
    [Required]
    public string? Password { get; set; }
    public string? Token { get; set; }
    public bool IsAdmin { get; set; }
}