using System.ComponentModel.DataAnnotations;

namespace Recipo_by_Agilis.Models;

public class Register
{
    [Required]
    public string UserName { get; set; }

    [Required]
    [StringLength(50)]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 5)]
    [Display(Name = "Password")]
    public string Password { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 5)]
    [Compare("Password")]
    public string ConfirmPassword { get; set; }

    
}