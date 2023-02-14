﻿using System.ComponentModel.DataAnnotations;

namespace Recipo_by_Agilis.Models;

public class Login
{ 
    [Required]
    [StringLength(50)]
    [EmailAddress]
      public string Email { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 5)]
    [DataType(DataType.Password)]
    public string Password { get; set; }
}